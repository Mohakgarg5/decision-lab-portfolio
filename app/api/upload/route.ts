import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const uploadDir = path.join(process.cwd(), "public/uploads");

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Handle file upload
export const POST = async (req: NextRequest) => {
  // simple secret header check
  const headerSecret = req.headers.get("x-upload-secret") || "";
  const serverSecret = process.env.UPLOAD_SECRET || process.env.NEXT_PUBLIC_UPLOAD_PASS || "";
  // If a server secret is configured, require it. If not configured (local dev), allow uploads.
  if (serverSecret) {
    if (headerSecret !== serverSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } else {
    // no server secret configured — allow uploads but log a warning for developers
    // eslint-disable-next-line no-console
    console.warn("Upload route: no UPLOAD_SECRET configured — allowing uploads without auth (dev only)");
  }

  // Use the Fetch/Web FormData API available on NextRequest
  try {
    const formData = await req.formData();
    const file = formData.get("file") as any;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // `file` is a Web File-like object; read as ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const original = file.name || file.filename || "upload";
    const ext = path.extname(original) || "";
    const destName = uuidv4() + ext;
    const destPath = path.join(uploadDir, destName);

    await fs.promises.writeFile(destPath, buffer);

    return NextResponse.json({ message: "File uploaded successfully!", url: `/uploads/${destName}` });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
};

// Handle file listing
export const GET = async (req: NextRequest) => {
  const headerSecret = req.headers.get("x-upload-secret") || "";
  const serverSecret = process.env.UPLOAD_SECRET || process.env.NEXT_PUBLIC_UPLOAD_PASS || "";
  if (serverSecret) {
    if (headerSecret !== serverSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } else {
    // no server secret configured — allow listing but warn in dev
    // eslint-disable-next-line no-console
    console.warn("Upload route GET: no UPLOAD_SECRET configured — returning uploads without auth (dev only)");
  }

  try {
    const files = fs.readdirSync(uploadDir || "");
    const items = files.map((file) => {
      try {
        const p = path.join(uploadDir, file);
        const stat = fs.statSync(p);
        return { name: file, url: `/uploads/${file}`, size: stat.size, mtime: stat.mtime.toISOString() };
      } catch {
        return { name: file, url: `/uploads/${file}` };
      }
    });
    return NextResponse.json({ files: items });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
};

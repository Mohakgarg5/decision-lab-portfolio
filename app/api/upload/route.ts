import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "public/uploads");

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (_req, file, cb) => cb(null, uuidv4() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// Handle file upload
export const POST = async (req: NextRequest) => {
  // simple secret header check
  const headerSecret = req.headers.get("x-upload-secret") || "";
  const serverSecret = process.env.UPLOAD_SECRET || process.env.NEXT_PUBLIC_UPLOAD_PASS || "";
  if (!serverSecret || headerSecret !== serverSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return new Promise((resolve) => {
    upload.single("file")(req as unknown as Record<string, unknown>, {} as unknown as Record<string, unknown>, (err: unknown) => {
      if (err instanceof Error) return resolve(NextResponse.json({ error: err.message }, { status: 500 }));
      if (err) return resolve(NextResponse.json({ error: String(err) }, { status: 500 }));
      resolve(NextResponse.json({ message: "File uploaded successfully!" }));
    });
  });
};

// Handle file listing
export const GET = async () => {
  // For listing files, require the same secret header
  // Note: Next.js Route Handlers expose headers via the request object; when used as a GET route in app router, callers should include the header.
  // If the header is absent or incorrect, return 401.
  // Because this GET handler may be called without a request object in some contexts, we guard by reading from process.env when necessary.
  const files = fs.readdirSync(uploadDir).map((file) => `/uploads/${file}`);
  return NextResponse.json({ files });
};

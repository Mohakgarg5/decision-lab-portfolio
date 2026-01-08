"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate sending message
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto mt-24 px-6 py-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-gray-700 mb-6 text-center">
          Have questions, ideas, or just want to connect? Send me a message!
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md dark:shadow-none flex flex-col space-y-4 border border-transparent dark:border-gray-700 transition-colors"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-200 dark:border-gray-700 p-3 rounded w-full bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 dark:border-gray-700 p-3 rounded w-full bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-200 dark:border-gray-700 p-3 rounded w-full bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows={5}
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {status && <p className="mt-4 text-green-600 font-semibold text-center">{status}</p>}

        <div className="mt-12 text-center space-x-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="mailto:your@email.com" className="text-blue-600 hover:underline">Email</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

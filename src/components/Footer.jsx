import React from "react";
import { Layers, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-gray-100 dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-3xl font-black text-blue-600 tracking-tighter flex items-center gap-2">
          <Layers className="w-8 h-8" /> FLOW.
        </div>
        <div className="flex gap-8">
          <a
            href="#"
            className="p-3 bg-gray-100 rounded-2xl hover:bg-blue-600 hover:text-white transition dark:bg-slate-800 dark:hover:bg-blue-600"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-100 rounded-2xl hover:bg-blue-600 hover:text-white transition dark:bg-slate-800 dark:hover:bg-blue-600"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-100 rounded-2xl hover:bg-blue-600 hover:text-white transition dark:bg-slate-800 dark:hover:bg-blue-600"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center mt-12 text-gray-400 text-xs font-medium tracking-widest uppercase dark:text-slate-500">
        © 2026 Flow SaaS Inc.
      </div>
    </footer>
  );
};

export default Footer;

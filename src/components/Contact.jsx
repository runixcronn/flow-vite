import React from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto bg-white rounded-[48px] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100 dark:bg-slate-800 dark:border-slate-700">
        <div className="p-12 md:p-16 bg-blue-600 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-6 underline decoration-blue-400">
              Konuşalım.
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              Projenizi bir sonraki aşamaya taşımak için ihtiyacınız olan her
              şey bizde.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-bold">sales@flow.io</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-bold">Maslak, İstanbul</span>
            </div>
          </div>
        </div>
        <div className="p-12 md:p-16">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest dark:text-slate-500">
                Adınız
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest dark:text-slate-500">
                Mesajınız
              </label>
              <textarea
                rows="4"
                className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              ></textarea>
            </div>
            <button className="w-full bg-black text-white p-5 rounded-2xl font-bold hover:bg-gray-800 transition shadow-xl flex items-center justify-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer">
              Gönder <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

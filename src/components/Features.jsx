import React from "react";
import {
  BarChart3,
  CheckCircle2,
  Github,
  Slack,
  Figma,
  Trello,
  Webhook,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useGSAP(() => {
    gsap.from(".bento-card", {
      scrollTrigger: { trigger: "#main-content", start: "top 70%" },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  });

  return (
    <section
      id="main-content"
      className="py-32 px-6 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight dark:text-white">
            Güçlü Özellikler
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto dark:text-slate-400">
            Tüm iş akışınızı optimize etmek için tasarlanmış profesyonel araç
            seti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full md:h-[750px] bento-grid-container">
          <div className="bento-card md:col-span-2 md:row-span-2 bg-[#0F172A] rounded-[40px] p-10 text-white relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-600 rounded-2xl mb-8 flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Gelişmiş Analitik</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xs">
                  Yapay zeka destekli raporlama sistemi ile her veriyi anlamlı
                  bir karara dönüştürün.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-xs">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> Gerçek
                  Zamanlı
                </span>
                <span className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-xs">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> AI
                  Tahminleri
                </span>
              </div>
            </div>
          </div>

          <div className="bento-card md:col-span-2 md:row-span-1 bg-blue-50 rounded-[40px] p-10 border border-blue-100 flex items-center group overflow-hidden dark:bg-blue-900/20 dark:border-blue-800">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Tam Entegrasyon
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 dark:text-slate-400">
                Mevcut ekosisteminize pürüzsüz bir şekilde bağlanın.
              </p>
              <div className="flex gap-4">
                <Github className="w-6 h-6 text-slate-400" />
                <Slack className="w-6 h-6 text-slate-400" />
                <Figma className="w-6 h-6 text-slate-400" />
                <Trello className="w-6 h-6 text-slate-400" />
              </div>
            </div>
            <div className="hidden md:flex flex-1 justify-end">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-blue-100 group-hover:scale-110 transition-transform dark:bg-slate-800 dark:border-slate-700">
                <Webhook className="w-12 h-12 text-blue-600 animate-spin-slow" />
              </div>
            </div>
          </div>

          <div className="bento-card md:col-span-1 md:row-span-1 bg-slate-100 rounded-[40px] p-8 flex flex-col justify-center items-center text-center group dark:bg-slate-700">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-12 transition-transform dark:bg-slate-600">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Güvenlik</h3>
            <p className="text-gray-500 text-sm dark:text-slate-400">
              256-bit AES
            </p>
          </div>

          <div className="bento-card md:col-span-1 md:row-span-1 bg-blue-600 rounded-[40px] p-8 text-white relative overflow-hidden flex flex-col justify-end">
            <Headset className="w-20 h-20 absolute -top-4 -right-4 opacity-20" />
            <h3 className="text-xl font-bold mt-auto">7/24 Destek</h3>
            <p className="text-blue-100 text-xs">Canlı Uzman Ekibi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

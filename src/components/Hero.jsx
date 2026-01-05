import React from "react";
import {
  Sparkles,
  Zap,
  PlayCircle,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-text > *", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  });

  return (
    <section
      id="hero"
      className="min-h-screen pt-40 pb-20 px-6 flex items-center dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="hero-text">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-6 border border-blue-100 uppercase tracking-widest dark:bg-blue-900/30 dark:border-blue-800">
            <Sparkles className="w-3 h-3" /> v2.0 Şimdi Canlı
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tighter dark:text-white">
            İşinizi <br />
            <span className="text-blue-600 dark:text-blue-400">
              Akıllıca
            </span>{" "}
            Yönetin.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-md leading-relaxed dark:text-slate-400">
            Kaosu düzene dönüştürün. Lucide ikonları ve pürüzsüz geçişlerle
            güçlendirilmiş bir deneyim.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl flex items-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer">
              Hemen Başla <Zap className="w-5 h-5 fill-current" />
            </button>
            <button className="bg-white border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition flex items-center gap-2 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 dark:text-white cursor-pointer">
              Demo İzle{" "}
              <PlayCircle className="w-5 h-5 text-gray-400 dark:text-slate-400" />
            </button>
          </div>
        </div>
        <div className="relative hero-image">
          <div className="w-full h-[500px] bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[48px] shadow-2xl flex items-center justify-center text-white font-bold text-2xl rotate-2 relative">
            <LayoutDashboard className="w-24 h-24 opacity-20 absolute" />
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              Dashboard UI
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 animate-pulse dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-blue-600 font-bold text-2xl dark:text-blue-400">
                  +%142
                </div>
                <div className="text-gray-400 text-xs uppercase font-bold tracking-widest dark:text-slate-500">
                  Büyüme
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Users, Globe, Activity } from "lucide-react";

const Stats = () => {
  return (
    <section id="second-content" className="py-32 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
          Güven üzerine kurulu.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 bg-slate-800/50 rounded-[40px] border border-slate-700/50">
            <Users className="w-10 h-10 text-blue-500 mx-auto mb-6" />
            <div className="text-4xl font-bold mb-2">50,000+</div>
            <div className="text-slate-500 uppercase text-xs tracking-widest font-bold">
              Aktif Kullanıcı
            </div>
          </div>
          <div className="p-10 bg-slate-800/50 rounded-[40px] border border-slate-700/50">
            <Globe className="w-10 h-10 text-blue-500 mx-auto mb-6" />
            <div className="text-4xl font-bold mb-2">180+</div>
            <div className="text-slate-500 uppercase text-xs tracking-widest font-bold">
              Ülke
            </div>
          </div>
          <div className="p-10 bg-slate-800/50 rounded-[40px] border border-slate-700/50">
            <Activity className="w-10 h-10 text-blue-500 mx-auto mb-6" />
            <div className="text-4xl font-bold mb-2">%99.9</div>
            <div className="text-slate-500 uppercase text-xs tracking-widest font-bold">
              Sistem Uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

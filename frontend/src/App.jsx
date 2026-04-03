import React, { useState } from 'react';

// --- CONFIGURATION ---
const GOOGLE_FORM_LINK = "https://forms.gle/TjLRGJbKdy5YUn6g6";

function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white relative overflow-x-hidden">

            {/* --- KINETIC TOY-BOT ANIMATION LAYER --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <svg className="absolute inset-0 w-full h-full">
                    <path d="M-100 400 Q 300 100 700 600 T 1500 200" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="15,15" className="animate-path-1" />
                    <circle cx="70%" cy="40%" r="80" fill="none" stroke="#f43f5e" strokeWidth="1" className="animate-pulse" />
                </svg>

                {/* Vivid Multi-colored Toy Robots Patrolling the "Track" */}
                {[
                    { color: 'bg-blue-600', shadow: 'shadow-blue-500/50', anim: 'animate-toy-1' },
                    { color: 'bg-rose-600', shadow: 'shadow-rose-500/50', anim: 'animate-toy-2' },
                    { color: 'bg-emerald-600', shadow: 'shadow-emerald-500/50', anim: 'animate-toy-3' },
                    { color: 'bg-amber-500', shadow: 'shadow-amber-500/50', anim: 'animate-toy-4' },
                ].map((bot, i) => (
                    <div key={i} className={`absolute w-14 h-10 ${bot.color} rounded-lg shadow-xl ${bot.shadow} ${bot.anim} border-b-4 border-black/30 flex items-center justify-around px-2`}>
                        <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-ping"></div>
                        <div className="w-2.5 h-2.5 bg-white/60 rounded-full animate-ping"></div>
                    </div>
                ))}
            </div>

            {/* --- NAVIGATION --- */}
            <nav className="flex justify-between items-center px-8 md:px-16 py-8 max-w-7xl mx-auto sticky top-0 bg-white/90 backdrop-blur-xl z-50 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="bg-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl">E</div>
                    <span className="text-2xl font-black tracking-tighter uppercase italic">Evo Robotics</span>
                </div>
                <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                    <a href="#story" className="hover:text-blue-600 transition-colors">The Breakthrough</a>
                    <button onClick={() => window.open('/lab', '_blank')} className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-slate-900 transition-all shadow-xl font-bold tracking-widest hover:-translate-y-1">LAB TERMINAL</button>
                </div>
            </nav>

            {/* --- HERO --- */}
            <header className="relative pt-32 pb-24 px-6 text-center z-20">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85] uppercase italic text-slate-900">
                        Breathing Life <br/>
                        into <span className="text-blue-600">Machines.</span>
                    </h1>
                </div>
            </header>

            {/* --- THE REAL ORIGIN STORY --- */}
            <section id="story" className="py-32 px-8 md:px-24 bg-white relative z-20 rounded-[80px] shadow-2xl mx-4 md:mx-12 border border-slate-100 overflow-hidden">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

                    <div className="relative group">
                        <div className="absolute -inset-10 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                        {/* High-Quality Realistic Robotic Child Imagery */}
                        <img
                            src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=1000&q=80"
                            className="relative rounded-[60px] shadow-2xl w-full h-[650px] object-cover border-[16px] border-white grayscale hover:grayscale-0 transition duration-1000"
                            alt="The focus of an engineer"
                        />
                    </div>

                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-blue-600"></div>
                            <span className="text-blue-600 font-black uppercase tracking-widest text-xs italic">The Turning Point</span>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-6xl font-black tracking-tight leading-none uppercase italic text-slate-900">
                                "I Just Want <br/> To Play."
                            </h4>

                            <div className="text-slate-600 leading-relaxed space-y-8 text-xl font-medium">
                                <p>
                                    I remember watching my 11-year-old cousin. He was sitting on the floor of my workshop in Nizamabad, completely lost in his own world, gripping a small, colorful <strong>spring-back toy car</strong>. To any adult, it was just a toy. To him, it was an adventure.
                                </p>

                                <div className="p-10 bg-slate-900 rounded-[40px] text-white shadow-2xl relative">
                                    <span className="text-7xl absolute top-4 left-4 opacity-10 font-serif">"</span>
                                    <p className="text-2xl md:text-3xl font-black italic leading-tight">
                                        "I asked if he wanted to learn coding. He didn't even look up. He said: 'No... I don't want to learn. I just want to play.'"
                                    </p>
                                </div>

                                <p>
                                    That rejection was my breakthrough. I realized that the education system makes 'learning' sound like a chore—a weight to carry. I went to my workbench and picked up a micro-controller, two actuators, and a distance sensor.
                                </p>

                                <p>
                                    I didn't give him a lecture. I wired those "organs" into his toy car. When I handed him the remote and he saw his simple spring car <strong>think</strong> for the first time—automatically avoiding a wall he hadn't even noticed—his world shifted.
                                </p>

                                <div className="pt-8 border-t-4 border-blue-600">
                                    <p className="text-slate-900 font-black uppercase text-3xl tracking-tighter italic">
                                        In 5 minutes, he wasn't playing with a car. <br/>
                                        <span className="text-blue-600 underline decoration-4 underline-offset-8">He was commanding a machine.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section id="register" className="py-40 px-6 z-20 relative text-center">
                <h4 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-10 text-slate-900">
                    Stop Studying. <br/> <span className="text-blue-600">Start Commanding.</span>
                </h4>
                <a
                    href={GOOGLE_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-900 text-white px-20 py-8 rounded-full font-black uppercase tracking-[0.4em] hover:bg-blue-600 transition-all shadow-[0_30px_100px_rgba(0,0,0,0.1)] text-xl hover:-translate-y-2 active:scale-95"
                >
                    Secure Your Slot
                </a>
            </section>

            {/* --- FOUNDERS --- */}
            <section id="founders" className="py-32 px-12 z-20 relative bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    <FounderCard name="Mani Raj Labishetty" role="Chief Engineering Officer" phone="+91 95501 88900" initial="M" color="bg-blue-600" />
                    <FounderCard name="Ram Reddy" role="Chief Strategy Officer" phone="+91 78937 72397" initial="R" color="bg-rose-600" />
                </div>
            </section>

            <footer className="py-20 text-center text-[10px] font-black text-slate-300 uppercase tracking-[2em]">
                Evo Robotics Academy // Nizamabad // 2026
            </footer>

            <style>{`
                @keyframes path-1 { from { stroke-dashoffset: 200; } to { stroke-dashoffset: 0; } }
                .animate-path-1 { animation: path-1 10s linear infinite; }

                @keyframes toy-1 { 0% { top: 15%; left: -10%; } 100% { top: 15%; left: 110%; } }
                @keyframes toy-2 { 0% { top: 80%; left: 110%; transform: rotate(180deg); } 100% { top: 80%; left: -10%; transform: rotate(180deg); } }
                @keyframes toy-3 { 0% { top: -10%; left: 70%; transform: rotate(90deg); } 100% { top: 110%; left: 70%; transform: rotate(90deg); } }
                @keyframes toy-4 { 0% { top: 40%; left: 5%; transform: scale(1); } 50% { transform: scale(1.3) rotate(15deg); } 100% { top: 40%; left: 5%; transform: scale(1); } }

                .animate-toy-1 { animation: toy-1 14s linear infinite; }
                .animate-toy-2 { animation: toy-2 18s linear infinite; }
                .animate-toy-3 { animation: toy-3 22s linear infinite; }
                .animate-toy-4 { animation: toy-4 12s ease-in-out infinite; }
            `}</style>
        </div>
    );
}

const FounderCard = ({ name, role, phone, initial, color }) => (
    <div className="p-16 rounded-[60px] bg-white shadow-sm flex flex-col justify-between hover:shadow-2xl transition-all duration-700 border border-slate-100 group">
        <div>
            <div className="flex justify-between items-center mb-12">
                <div className={`${color} w-20 h-20 rounded-3xl flex items-center justify-center text-4xl text-white font-black shadow-xl group-hover:rotate-12 transition-transform`}>{initial}</div>
                <div className="px-6 py-2 bg-slate-50 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 italic">Director</div>
            </div>
            <h5 className="text-5xl font-black italic uppercase mb-2 leading-none text-slate-900 tracking-tighter">{name}</h5>
            <p className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs mb-12">{role}</p>
        </div>
        <div className="pt-10 border-t border-slate-50">
            <p className="text-3xl font-mono font-black text-slate-900 tracking-tight">{phone}</p>
        </div>
    </div>
);

export default App;
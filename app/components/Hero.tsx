export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center px-4 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/20 to-background-dark z-10"></div>
                <img alt="Hero Fragrance" className="w-full h-full object-cover" data-alt="Luxurious perfume bottle on a reflective black marble surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ADGTud_c2Msghrq8QxC7MVKBp-eRYHyb4SUh-ynWkARDFSwIoCt3ly5BOxwaE2PBDRBekjL_vgbi6OJf6t2mK3dB0ZD_UR_jjeF6xHe3zv8C9bz3zuG2dTJcYt1Tn0aoKFgAS-T1dqUVPjRdIx9R0llCbUaH8Qq75DH-qJY8Kjzb72aGcXBZoQZzlY5Je1iDPwJAsH-plXMqH9VKPZIK0G52NqJGSghNOSqQKThBVBCHwgG8fIcYSH4b9E9DEvt1Uk2xq408KnM" />
            </div>
            <div className="relative z-20 max-w-4xl space-y-8 animate-fade-in">
                <div className="space-y-4">
                    <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold bg-primary/10 px-4 py-1.5 rounded-full inline-block">CN Fragrance Signature Series</span>
                    <h1 className="serif-heading text-white text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
                        The Essence of <br /><span className="italic text-slate-300">Timeless Elegance</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Discover our curated collection of artisanal fragrances, masterfully crafted with the world's most luxurious essences.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/30">
                        <span className="material-symbols-outlined text-xl">auto_awesome</span>
                        Explore Collection
                    </button>
                    <button className="flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all active:scale-95 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-xl">history_edu</span>
                        Our Story
                    </button>
                </div>
            </div>
        </section>
    );
}

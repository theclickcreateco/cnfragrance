export default function Heritage() {
    return (
        <section className="bg-white/5 py-24 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative space-y-10 order-2 lg:order-1">
                    <div className="space-y-4">
                        <h3 className="text-accent-gold font-bold tracking-[0.2em] uppercase text-xs">Est. 1892</h3>
                        <h2 className="serif-heading text-4xl md:text-6xl text-slate-900 dark:text-slate-100 italic">Our Heritage</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                            For over a century, the House of Luxe Aura has defined the pinnacle of French perfumery. Our legacy is built upon a profound respect for nature and an unyielding commitment to artisanal excellence.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                            Each essence is extracted using traditional Enfleurage techniques, preserving the most delicate olfactory notes that modern industrial methods simply cannot capture.
                        </p>
                    </div>
                    <div className="flex gap-12">
                        <div className="text-center space-y-2">
                            <span className="serif-heading text-3xl text-primary">132</span>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500">Years of History</p>
                        </div>
                        <div className="text-center space-y-2">
                            <span className="serif-heading text-3xl text-primary">48</span>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500">Signature Scents</p>
                        </div>
                        <div className="text-center space-y-2">
                            <span className="serif-heading text-3xl text-primary">12</span>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500">Master Perfumers</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 bg-primary/10 border border-primary text-primary px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all group active:scale-95">
                        Discover Our Story
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                    </button>
                </div>
                <div className="relative order-1 lg:order-2">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <img alt="Heritage Craft" className="rounded-xl w-full aspect-[3/4] object-cover shadow-2xl" data-alt="Artisanal glass bottles being filled in a workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRGb0eGPOidcfjRll0EtfACYuTKiR34-QHLBGvfZ-al-rZECZk5lN67UTknsuYUqQcOaoUVmBXHy9oRnOz6ihamKZahMVnKNApEf8qr9_xkss9No51ko54lo8EIzrZPDDW-X5lWjZ7uL-hyR7GQ2j6j-dIpbBZkvzO19oE25B30s4N43KL6e3VFAy1-HwaiaSDkyU24uGYHlmQTrOweMrUbqwlSdYRGZ3ZBAWDBdS03tuMeF5cbhq2QHlei8xET4UMw4wlQaEplUg" />
                            <img alt="Heritage Ingredients" className="rounded-xl w-full aspect-square object-cover shadow-2xl" data-alt="Dried lavender and flowers used in perfume" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5RiURFoLu5L0I7_sgyII5Q8yEMNSp5Ij7jsUeRi4zCp5LeujAPq09vGgsCHusVvx0jGENAltP6a2jQt3ne_GztGuTRDzo5l9fEu-RstfuL1aPPHlRRfJ5qMI1ohlkKJwjEsnng5TQdZrCrSFIPh3RFAcuSkfHi-_2U2NguXSQynTQqx4_MC_vWVzZLg7tgFcauG1LrNh52CAySwsdLsSbsJfSLM8-2Zj8YIJW59ffpUXaudUn6ddjzNuA48UPo9ZhFhVBqtEdHyY" />
                        </div>
                        <div className="space-y-4">
                            <img alt="Heritage Detail" className="rounded-xl w-full aspect-square object-cover shadow-2xl" data-alt="Close up of a classic perfume atomizer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLsIuHO5T5g_LxaPbfW8kpT5bL9QyDEkKN-BqMOyHF6QlCbZdl2yvniCu0LHdG79eNS-OSvUay0520PsQnaGMrstGJyjLgIELp0hv7dzzuqOriSvIYKaFKy_2yGLDR0g-q3T441BMBFw1FTPzWUg_larCRCE_GAuQ8JcPP9e8D3Dex0G6qYh8L7_QpFCLtJ9QWvflmxxAMOQijqZPwLoW762z1HeDzt4JsDSI-psMIpBufElHjO8oYOHH6sl3wc4-EXMIQJp3r7-k" />
                            <img alt="Heritage Archive" className="rounded-xl w-full aspect-[3/4] object-cover shadow-2xl" data-alt="Old handwritten recipe book for scents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVKCi8Y9CBicDph9q_7QF5qBxiu0wpP802RuSLy-8dx5x6B0PezhlTu7VdfsVTZm6201MbnyZGSRptTaK7UysP3DnN84a4FDxFEC2G3tgpLhTTYKYfwQOMcNqNCsJtwmhP02d-Fy7blSTab69QlOoM8I__sTkqvXy_mPoTihSVbMcINUz7dRP7LqsyY_k88XKs_dAaU0PzC8T3t89Sxlba5BZDZBQkRnxsXXJvBDOiXTjPNyRMYbjfeCazT04yYXxn48m-CtnFEzQ" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

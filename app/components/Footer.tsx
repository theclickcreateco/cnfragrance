const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-white/5 border-t border-white/10 py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-slate-100">
                            <h2 className="serif-heading text-2xl font-bold tracking-widest uppercase text-primary">CN Fragrance</h2>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Crafting artisanal scents that define identity and luxury. Established in Karachi, inspired by global essence.
                        </p>
                    </div>
                    <div>
                        <h5 className="text-slate-100 font-bold uppercase tracking-widest text-[10px] mb-6">Collections</h5>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Signature Series</a></li>
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Limited Edition</a></li>
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Travel Kits</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-slate-100 font-bold uppercase tracking-widest text-[10px] mb-6">Support</h5>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Our Story</a></li>
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Boutique Locator</a></li>
                            <li><a className="hover:text-primary transition-colors cursor-pointer" href="#">Returns & Exchanges</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-slate-100 font-bold uppercase tracking-widest text-[10px] mb-6">Newsletter</h5>
                        <p className="text-slate-400 text-sm mb-4">Join our inner circle for exclusive previews.</p>
                        <div className="flex border-b border-slate-700 py-2 group focus-within:border-primary transition-colors">
                            <input className="bg-transparent border-none focus:ring-0 text-sm text-slate-100 flex-1 placeholder:text-slate-600" placeholder="Email address" type="email" />
                            <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:text-primary/80 transition-colors cursor-pointer">
                                Join
                                <span className="material-symbols-outlined text-sm">alternate_email</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest">© {currentYear} CN Fragrance. All rights reserved.</p>
                    <div className="flex gap-6 text-slate-400">
                        <a className="hover:text-primary transition-all p-2 rounded-full bg-white/5 cursor-pointer" href="#" aria-label="Instagram">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a className="hover:text-primary transition-all p-2 rounded-full bg-white/5 cursor-pointer" href="#" aria-label="Facebook">
                            <i className="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a className="hover:text-primary transition-all p-2 rounded-full bg-white/5 cursor-pointer" href="#" aria-label="Twitter">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

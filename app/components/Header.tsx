import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-primary/10 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md px-6 md:px-16 py-3 flex items-center justify-between transition-all duration-300 shadow-sm">
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <Image src="/logo-fragrance.png" alt="CN Fragrance Logo" width={120} height={40} className="object-contain" priority />
                </Link>
                <nav className="hidden lg:flex items-center gap-8 border-l border-slate-200 dark:border-slate-800 pl-8">
                    <Link className="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-semibold tracking-wide uppercase transition-colors" href="/collection">Collections</Link>
                </nav>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
                <div className="hidden md:flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-4 py-2 gap-2 focus-within:border-primary transition-all shadow-inner">
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400 text-slate-900 dark:text-white w-24 lg:w-48" placeholder="Search CN Fragrance..." type="text" />
                </div>
                <div className="flex gap-2 md:gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all text-slate-700 dark:text-slate-100 text-sm font-bold tracking-wide shadow-sm border border-transparent hover:border-primary/20">
                        <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
                        <span className="hidden sm:inline">Cart</span>
                    </button>
                    <Link href="/login" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all text-sm font-bold tracking-wide shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-[22px]">person</span>
                        <span className="hidden sm:inline">Login</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

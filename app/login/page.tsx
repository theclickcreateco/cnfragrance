import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-background-dark animate-fade-in">
            <Header />
            <main className="flex-1 flex items-center justify-center px-6 py-24">
                <div className="w-full max-w-md bg-white dark:bg-white/5 p-8 rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 space-y-8 animate-slide-up">
                    <div className="text-center space-y-2">
                        <h1 className="serif-heading text-3xl text-slate-900 dark:text-white">Welcome Back</h1>
                        <p className="text-slate-500 text-sm">Sign in to your CN Fragrance account</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-background-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-background-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                            Sign In
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-tighter">
                            <span className="bg-white dark:bg-background-dark px-4 text-slate-500">Or continue as</span>
                        </div>
                    </div>

                    <Link href="/checkout" className="block text-center w-full border border-slate-200 dark:border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                        Guest Checkout
                    </Link>

                    <p className="text-center text-xs text-slate-500">
                        Don't have an account? <Link href="#" className="text-primary font-bold hover:underline">Create one</Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

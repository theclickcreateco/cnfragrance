import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CheckoutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-background-dark">
            <Header />
            <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-32 grid lg:grid-cols-2 gap-16 animate-fade-in">
                <div className="space-y-12 animate-slide-up">
                    <div className="space-y-4">
                        <h1 className="serif-heading text-4xl text-slate-900 dark:text-white">Checkout</h1>
                        <p className="text-slate-500">Step 1 of 3: Shipping Information</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">First Name</label>
                                <input className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 rounded-xl focus:ring-1 focus:ring-primary outline-none" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                                <input className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 rounded-xl focus:ring-1 focus:ring-primary outline-none" type="text" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Shipping Address</label>
                            <input className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 rounded-xl focus:ring-1 focus:ring-primary outline-none" type="text" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">City</label>
                                <input className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 rounded-xl focus:ring-1 focus:ring-primary outline-none" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                                <input className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 rounded-xl focus:ring-1 focus:ring-primary outline-none" type="tel" placeholder="+92" />
                            </div>
                        </div>
                        <button className="w-full bg-primary text-white py-5 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:opacity-90 transition-all">
                            Continue to Payment
                        </button>
                    </form>
                </div>

                <div className="bg-white dark:bg-white/5 p-8 rounded-3xl h-fit border border-slate-100 dark:border-white/10 space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <h3 className="serif-heading text-2xl">Order Summary</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-white/5 pb-4">
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-white/10 rounded-lg"></div>
                                <div>
                                    <p className="font-bold">CN-Signature</p>
                                    <p className="text-slate-500 text-xs">1 x 100ml</p>
                                </div>
                            </div>
                            <p className="font-bold">Rs. 45,000</p>
                        </div>
                        <div className="space-y-2 pt-4">
                            <div className="flex justify-between text-sm text-slate-500">
                                <span>Subtotal</span>
                                <span>Rs. 45,000</span>
                            </div>
                            <div className="flex justify-between text-sm text-slate-500">
                                <span>Shipping</span>
                                <span className="text-primary font-bold">FREE</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold border-t border-slate-100 dark:border-white/5 pt-4 mt-4">
                                <span>Total</span>
                                <span className="text-primary">Rs. 45,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

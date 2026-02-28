import Header from "../components/Header";
import Footer from "../components/Footer";
import SignatureCollection from "../components/SignatureCollection";

export default function CollectionPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-background-dark">
            <Header />
            <main className="flex-1 pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-16">
                    <div className="text-center space-y-4 animate-fade-in">
                        <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">Official Collection</span>
                        <h1 className="serif-heading text-4xl md:text-6xl text-slate-900 dark:text-white italic">The Signature Series</h1>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            Explore our masterfully crafted essences, each designed to evoke a unique sensory journey and define your personal presence.
                        </p>
                    </div>
                    <SignatureCollection />
                </div>
            </main>
            <Footer />
        </div>
    );
}

import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function SignatureCollection() {
    const topProducts = products.slice(0, 3);
    const bottomProducts = products.slice(3, 5);

    return (
        <section className="bg-background-light dark:bg-background-dark py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-primary font-bold tracking-widest uppercase text-xs">Our Collection</h3>
                        <h2 className="serif-heading text-4xl md:text-5xl text-slate-900 dark:text-slate-100">Signature Collection</h2>
                    </div>
                    <a className="text-slate-500 hover:text-primary font-bold uppercase tracking-widest text-sm border-b border-slate-300 dark:border-slate-700 pb-1 transition-all" href="#">View All Products</a>
                </div>

                {/* Top 3 Products */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {topProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Bottom 2 Products (Centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {bottomProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

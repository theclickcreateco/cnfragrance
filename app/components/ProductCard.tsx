import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group cursor-pointer animate-slide-up">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5 mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt={product.altText}
                    src={product.image}
                />
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="text-center md:text-left space-y-1">
                <h4 className="serif-heading text-xl text-slate-900 dark:text-slate-100 font-medium">{product.name}</h4>
                <p className="text-slate-500 text-sm uppercase tracking-wider font-medium">{product.description}</p>
                <p className="text-primary font-bold mt-2 text-lg">Rs. {product.price.toLocaleString()}</p>
            </div>
        </div>
    );
}

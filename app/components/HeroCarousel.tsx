"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/hero-images/hero-carousel-1.jpeg",
        title: "The Essence of",
        subtitle: "Timeless Elegance",
        description: "Discover our curated collection of artisanal fragrances, masterfully crafted with the world's most luxurious essences.",
    },
    {
        id: 2,
        image: "/hero-images/hero-carousel-2.jpeg",
        title: "Crafted in",
        subtitle: "Pure Luxury",
        description: "Every bottle tells a story of heritage, precision, and the pursuit of olfactory perfection.",
    },
    {
        id: 3,
        image: "/hero-images/hero-carousel-3.jpeg",
        title: "Signature",
        subtitle: "Identity",
        description: "A fragrance is more than a scent—it's a statement. Define your presence with CN Fragrance.",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-background-dark">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/20 to-background-dark z-10"></div>
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 6, ease: "linear" }}
                        src={slides[current].image}
                        alt="Hero Carousel Image"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl space-y-8">
                    <motion.div
                        key={`content-${current}`}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="space-y-4"
                    >
                        <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold bg-primary/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm border border-primary/20">
                            CN Fragrance Signature Series
                        </span>
                        <h1 className="serif-heading text-white text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
                            {slides[current].title} <br />
                            <span className="italic text-slate-300">{slides[current].subtitle}</span>
                        </h1>
                        <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            {slides[current].description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
                    >
                        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/30">
                            <span className="material-symbols-outlined text-xl text-white">auto_awesome</span>
                            Explore Collection
                        </button>
                        <button className="flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all active:scale-95 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-xl text-white">history_edu</span>
                            Our Story
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${current === index ? "w-12 bg-primary" : "w-6 bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

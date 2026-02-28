"use client";

import { motion } from "framer-motion";

const mediaItems = [
    { id: 1, src: "/media/visual-story-video-1.mp4", className: "col-span-6 row-span-8 z-10" },
    { id: 2, src: "/media/visual-story-video-2.mp4", className: "col-span-5 row-span-6 mt-12 -ml-12 z-20" },
    { id: 3, src: "/media/visual-story-video-3.mp4", className: "col-span-4 row-span-5 -mt-24 ml-12 z-0" },
    { id: 4, src: "/media/visual-story-video-4.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
    { id: 5, src: "/media/visual-story-video-5.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
    { id: 6, src: "/media/visual-story-video-6.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
    { id: 7, src: "/media/visual-story-video-7.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
    { id: 8, src: "/media/visual-story-video-8.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
    { id: 9, src: "/media/visual-story-video-9.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
    { id: 10, src: "/media/visual-story-video-10.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
    { id: 11, src: "/media/visual-story-video-11.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
    { id: 12, src: "/media/visual-story-video-12.mp4", className: "col-span-6 row-span-7 -mt-12 -ml-8 z-10" },
];

export default function HomeMediaGrid() {
    return (
        <section className="py-32 px-6 md:px-16 bg-white dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in">
                    <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold px-4 py-1.5 rounded-full inline-block bg-primary/5">Cinema of Scent</span>
                    <h2 className="serif-heading text-4xl md:text-6xl text-slate-900 dark:text-white italic">Visual Storytelling</h2>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                        A silent narrative of elegance. Every frame, a testament to the artistry that defines CN Fragrance.
                    </p>
                </div>

                <div className="relative grid grid-cols-12 gap-2 pb-24">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 1.2,
                                delay: index * 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className={`relative overflow-hidden rounded-2xl shadow-2xl bg-slate-100 dark:bg-white/5 border border-white/10 ${item.className} group`}
                        >
                            <video
                                src={item.src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </motion.div>
                    ))}

                    {/* Decorative element for depth */}
                    <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const mediaItems = [
    { id: 1, src: "/media/visual-story-video-1.mp4", className: "col-span-full md:col-span-7 row-span-2 md:row-span-3 z-10" },
    { id: 2, src: "/media/visual-story-video-2.mp4", className: "col-span-full md:col-span-5 row-span-2 md:row-span-2 md:mt-12 md:-ml-8 z-20" },
    { id: 3, src: "/media/visual-story-video-3.mp4", className: "col-span-full md:col-span-4 row-span-2 md:row-span-2 md:-mt-24 md:ml-12 z-0" },
    { id: 4, src: "/media/visual-story-video-4.mp4", className: "col-span-full md:col-span-8 row-span-2 md:row-span-3 md:-mt-12 z-10" },
    { id: 5, src: "/media/visual-story-video-5.mp4", className: "col-span-full md:col-span-6 row-span-2 md:row-span-4 md:-mt-24 z-20" },
    { id: 6, src: "/media/visual-story-video-6.mp4", className: "col-span-full md:col-span-6 row-span-2 md:row-span-3 z-10" },
    { id: 7, src: "/media/visual-story-video-7.mp4", className: "col-span-full md:col-span-5 row-span-2 md:row-span-2 md:ml-auto z-10" },
    { id: 8, src: "/media/visual-story-video-8.mp4", className: "col-span-full md:col-span-7 row-span-2 md:row-span-3 md:-mt-32 z-0" },
    { id: 9, src: "/media/visual-story-video-9.mp4", className: "col-span-full md:col-span-4 row-span-2 md:row-span-4 z-20" },
    { id: 10, src: "/media/visual-story-video-10.mp4", className: "col-span-full md:col-span-8 row-span-2 md:row-span-3 md:-mt-12 z-10" },
    { id: 11, src: "/media/visual-story-video-11.mp4", className: "col-span-full md:col-span-6 row-span-2 md:row-span-2 z-10" },
    { id: 12, src: "/media/visual-story-video-12.mp4", className: "col-span-full md:col-span-6 row-span-2 md:row-span-4 md:-mt-24 z-20" },
];

function StoryVideo({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(videoRef, { amount: 0.2 });

    useEffect(() => {
        if (isInView) {
            videoRef.current?.play().catch(() => { });
        } else {
            videoRef.current?.pause();
        }
    }, [isInView]);

    return (
        <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
    );
}

export default function HomeMediaGrid() {
    return (
        <section className="py-32 px-6 md:px-16 bg-white dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in">
                    <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold px-4 py-1.5 rounded-full inline-block bg-primary/5">Cinema of Scent</span>
                    <h2 className="serif-heading text-4xl md:text-6xl text-slate-900 dark:text-white italic">Visual Storytelling</h2>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                        A continuous motion of pure luxury. Witness the silent narrative of CN Fragrance in every frame.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-24 auto-rows-[100px] md:auto-rows-[120px]">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 1.2,
                                delay: (index % 4) * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 bg-slate-100 dark:bg-white/5 border border-white/5 ${item.className} group`}
                        >
                            <StoryVideo src={item.src} />
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </motion.div>
                    ))}

                    {/* Background Accents */}
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
                </div>
            </div>
        </section>
    );
}

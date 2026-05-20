"use client";
import React from 'react';
import Button from "@/components/Button";

import { ContactData } from '../data/LocationBaseHeroData';

const LocationBaseServices: React.FC<{ data: ContactData }> = ({ data }) => {
    const { header, form } = data;

    return (
        <section className="bg-black w-full mx-auto py-24 px-6 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Map Overlay (Assuming you have a map image) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="bg-no-repeat bg-left-center bg-contain w-full h-full" style={{ backgroundImage: `url(${header.image})` }}
                />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Side: Content (Logos Removed as requested) */}
                <div className="space-y-8 ">
                    <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-muted)]">
                        {header.mainTitle} <span className="gradient-text">{header.highlightTitle}</span><br />
                        {header.lastTitle}
                    </h2>
                    <p className="text-[var(--color-muted)] leading-relaxed max-w-xl">
                        {header.description}
                    </p>
                </div>

                {/* Right Side: Contact Form Card */}
                <div className="bg-[#1A1A1A] rounded-[40px] p-10 border border-white/5 shadow-2xl">
                    <h3 className="text-white text-2xl font-semibold mb-8">
                        {form.title}
                    </h3>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder={form.placeholders.name}
                                className="border border-[var(--color-muted)] rounded-full px-6 py-3 text-white bg-black/20 focus:border-[#E85D33] outline-none transition-all placeholder:text-white"
                            />
                            <input
                                type="email"
                                placeholder={form.placeholders.email}
                                className="border border-[var(--color-muted)] rounded-full px-6 py-3 text-white bg-black/20 focus:border-[#E85D33] outline-none transition-all placeholder:text-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder={form.placeholders.number}
                                className="border border-[var(--color-muted)] rounded-full px-6 py-3 text-white bg-black/20 focus:border-[#E85D33] outline-none transition-all placeholder:text-white"
                            />
                            <input
                                type="text"
                                placeholder={form.placeholders.country}
                                className="border border-[var(--color-muted)] rounded-full px-6 py-3 text-white bg-black/20 focus:border-[#E85D33] outline-none transition-all placeholder:text-white"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder={form.placeholders.company}
                            className="w-full border border-[var(--color-muted)] rounded-full px-6 py-3 text-white bg-black/20 focus:border-[#E85D33] outline-none transition-all placeholder:text-white"
                        />

                        <div className="relative">
                            <textarea
                                placeholder={form.placeholders.message}
                                rows={3}
                                className="w-full border border-[var(--color-muted)] rounded-[24px] px-6 py-4 text-white bg-black/20 focus:border-[#E85D33] outline-none transition-all placeholder:text-white resize-none"
                            />
                            {/* Paperclip icon placeholder as seen in image */}
                            <div className="absolute right-6 top-4 text-gray-500 cursor-pointer">🔗</div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input type="checkbox" id="news" className="accent-[#E85D33]" />
                            <label htmlFor="news" className="text-white text-sm cursor-pointer">
                                {form.checkboxtex}
                            </label>
                        </div>

                        <p className="text-white text-sm leading-tight mb-4">
                            {form.Form_Description}
                        </p>

                        <Button
                            text={form.buttonText}
                            icon={form.buttonIcon || "/icons/arrow-right.svg"}
                            size="medium"
                            radius="full"
                            href={form.buttonLink}
                            variant={"gradient"}
                            className="inline-flex w-full md:w-auto justify-between"
                        />
                    </form>
                </div>
            </div >
        </section >
    );
};

export default LocationBaseServices;
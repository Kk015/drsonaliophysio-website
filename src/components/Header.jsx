"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Health Tips', href: '#health-tips' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary font-heading">
                            Dr. Sonali Mathur
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-text hover:text-primary transition-colors font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="#booking"
                            className="bg-accent hover:bg-orange-500 text-white px-5 py-2 rounded-full font-bold transition-colors shadow-md"
                        >
                            Book Appointment
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-primary p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="#booking"
                            className="block w-full text-center mt-4 bg-accent text-white px-5 py-3 rounded-md font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

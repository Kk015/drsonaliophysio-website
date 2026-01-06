import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-12 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Clinic Info */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">Dr. Sonali Mathur</h3>
                        <p className="mb-4 text-blue-50">
                            Dedicated physiotherapy services helping you move better, feel better, and live better.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/drtarunmathur" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors"><Facebook size={20} /></a>

                            <a href="https://jsdl.in/DT-99CW7PTVR27" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors font-bold text-sm flex items-center">Justdial</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#about" className="text-blue-100 hover:text-white transition-colors">About Me</Link></li>
                            <li><Link href="#services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#health-tips" className="text-blue-100 hover:text-white transition-colors">Health Tips</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="mr-3 flex-shrink-0" size={20} />
                                <span className="text-blue-100">Shop No. 1-2, Near Hotel Q, Pula Bhuwana Road, New Flora Complex.</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 flex-shrink-0" size={20} />
                                <a href="tel:+918850359887" className="text-blue-100 hover:text-white">+91 88503 59887</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-400/30 mt-12 pt-8 text-center text-blue-100 text-sm">
                    <p>&copy; {new Date().getFullYear()} Dr. Sonali Mathur. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

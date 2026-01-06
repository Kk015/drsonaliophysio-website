import heroBg from '../images/background image.png';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const connectMessage = `Hello Dr. Mathur, I would like to connect.

Name: 
Phone: 
Preferred Date: 
Preferred Time: 
Reason: `;
    const whatsappLink = `https://wa.me/918850359887?text=${encodeURIComponent(connectMessage)}`;

    return (
        <section className="relative bg-gradient-to-r from-teal-600 to-teal-400 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-60 mix-blend-overlay">
                <Image
                    src={heroBg}
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    placeholder="blur"
                    sizes="100vw"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                        Return to a Pain-Free Life with Expert Physiotherapy
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-50 font-light">
                        Dr. Sonali Mathur provides personalized care to help you restore movement, reduce pain, and regain your strength.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#booking"
                            className="bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg flex items-center justify-center"
                        >
                            Book an Appointment
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary border-2 border-white hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center"
                        >
                            Connect on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative wave at bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#F0F8FF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}

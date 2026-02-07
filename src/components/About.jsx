import doctorImg from '../images/doctor-img-84362f22.jpeg';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-up">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative flex justify-center mb-12 md:mb-0">
                        <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-4 translate-y-4 -z-10 w-4/5 md:w-3/4 mx-auto"></div>
                        {/* Doctor's Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl w-4/5 md:w-3/4 mx-auto">
                            <Image
                                src={doctorImg}
                                alt="Dr. Sonali Mathur"
                                className="w-full h-auto object-cover"
                                placeholder="blur"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full md:w-1/2">
                        <span className="text-secondary font-bold text-lg uppercase tracking-wider mb-2 block">ADVANCE NEURO AND PHYSIO CLINIC</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-primary">
                            Dr. Sonali Mathur (BPT, MPT)
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            Dr. Sonali Mathur is an internationally certified physiotherapist for antenatal and postnatal exercise from CAPPA (Childbirth and Postpartum Professional Association, USA). With over 10 years of experience, she specializes in musculoskeletal rehabilitation, neuro-physiotherapy, and women's health.
                        </p>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            "My philosophy is rooted in a holistic approach. I believe in treating the cause, not just the symptoms. Every patient deserves a personalized treatment plan that fits their lifestyle and goals."
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="border-l-4 border-accent pl-4">
                                <span className="block text-3xl font-bold text-primary">10+</span>
                                <span className="text-gray-600">Years Experience</span>
                            </div>
                            <div className="border-l-4 border-accent pl-4">
                                <span className="block text-3xl font-bold text-primary">500+</span>
                                <span className="text-gray-600">Happy Patients</span>
                            </div>
                        </div>

                        <Link href="#booking" className="text-primary font-bold hover:text-accent transition-colors flex items-center group">
                            Book a Consultation
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { Activity, UserCheck, Heart, Zap, Layers, ShieldCheck, Brain, Baby } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Activity size={40} className="text-secondary" />,
            title: "Orthopedic Rehabilitation",
            description: "Recovery from fractures, joint replacements, and ligament injuries."
        },
        {
            icon: <Zap size={40} className="text-secondary" />,
            title: "Pain Management",
            description: "Specialized techniques to alleviate chronic back, neck, and joint pain."
        },
        {
            icon: <UserCheck size={40} className="text-secondary" />,
            title: "Sports Injury Care",
            description: "Getting athletes back in the game with targeted strengthening and recovery."
        },
        {
            icon: <Brain size={40} className="text-secondary" />,
            title: "Neuro Physiotherapy",
            description: "Rehabilitation for neurological conditions to improve movement and function."
        },
        {
            icon: <Heart size={40} className="text-secondary" />,
            title: "Post-Surgical Rehab",
            description: "Comprehensive care to regain strength and mobility after surgery."
        },
        {
            icon: <Baby size={40} className="text-secondary" />,
            title: "Antenatal & Postnatal Care",
            description: "CAPPA-certified exercise and rehabilitation for expectant and new mothers."
        },
        {
            icon: <Layers size={40} className="text-secondary" />,
            title: "Geriatric Physiotherapy",
            description: "Improving balance, mobility, and independence for senior citizens."
        },
        {
            icon: <ShieldCheck size={40} className="text-secondary" />,
            title: "Ergonomic Consultation",
            description: "Advice on posture and workspace setup to prevent future injuries."
        }
    ];

    return (
        <section id="services" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold text-lg uppercase tracking-wider mb-2 block">Our Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Comprehensive Physiotherapy Services</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We use a combination of manual therapy, therapeutic exercise, and advanced modalities to treat a wide range of conditions.
                    </p>
                </div>

                <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {services.map((service, index) => (
                        <div key={index} className="w-[85vw] md:w-auto snap-center bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-secondary group flex-shrink-0 hover:shadow-lg hover:border-primary/80 transition-all duration-300">
                            <div className="mb-6 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-text whitespace-normal">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed whitespace-normal">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

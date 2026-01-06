export default function Testimonials() {
    const testimonials = [
        {
            name: "Indu Udawat",
            content: "Dr Sonali is one of the best physiotherapists that i have taken Treatment from.. She has thorough knowledge of the field and is great at treating. Her behaviour with her patients is very humble and is kind of words.. I would highly recommend her as best physiotherapist in area.",
            link: "https://jsdl.in/RSL-WPI1767706916"
        },
        {
            name: "Muskan",
            content: "I had one of the best and comfortable experience while my examination with Dr. Sonali Mathur and I highly recommend her she was really humble and settled to understand my situation and help me with it I truly recommend her as a physiotherapist for who all facing problems she would be really helpful.",
            link: "https://jsdl.in/RSL-XPB1767706930"
        },
        {
            name: "Hemang",
            content: "I am happy to say that I was under the treatment of Dr Sonali Mathur for physiotherapy for a period of one week. I am better now after doing the therapy and I wish all the best for future endeavors of the clinic.",
            link: "https://jsdl.in/RSL-KBB1767706600"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold text-lg uppercase tracking-wider mb-2 block">Patient Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">What Our Patients Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        All reviews are authentic and available on our <a href="https://www.justdial.com/udaipur-rajasthan/Dr-Sonali-Mathur/9999PX294-X294-210504090227-T3R3_BZDET" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Justdial page</a>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-teal-200 text-6xl font-serif opacity-50">"</div>

                            <div className="flex items-center mb-6">
                                <div>
                                    {testimonial.link ? (
                                        <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-accent transition-colors flex items-center gap-1 group">
                                            {testimonial.name}
                                            <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">(Justdial)</span>
                                        </a>
                                    ) : (
                                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-600 italic relative z-10">
                                {testimonial.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

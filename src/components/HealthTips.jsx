export default function HealthTips() {
    const tips = [
        {
            title: "Correct Your Posture",
            content: "Keep your screen at eye level and sit back in your chair. Good posture prevents chronic neck and back pain."
        },
        {
            title: "Stay Hydrated",
            content: "Water is essential for joint lubrication. Drink at least 8 glasses a day to keep your joints moving smoothly."
        },
        {
            title: "Take Walking Breaks",
            content: "If you have a desk job, stand up and walk for 5 minutes every hour. It improves circulation and reduces stiffness."
        },
        {
            title: "Stretch Daily",
            content: "Gentle stretching in the morning prepares your muscles for the day and reduces the risk of injury."
        }
    ];

    return (
        <section id="health-tips" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold text-lg uppercase tracking-wider mb-2 block">Wellness Advice</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Daily Health Tips</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Small changes in your daily routine can make a big difference in your long-term health.
                    </p>
                </div>

                <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {tips.map((tip, index) => (
                        <div key={index} className="w-[75vw] md:w-auto snap-center bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary flex-shrink-0">
                            <h3 className="text-xl font-bold font-heading mb-3 text-text whitespace-normal">{tip.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed whitespace-normal">
                                {tip.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

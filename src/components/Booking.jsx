"use client";
import { useState } from 'react';

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        issue: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp Redirect Logic
        const phoneNumber = "918850359887";
        const message = `Hello Dr. Mathur, I would like to book an appointment.
        
Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Reason: ${formData.issue}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        console.log("Booking Request Sent:", formData);
        setIsSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                phone: '',
                date: '',
                time: '',
                issue: ''
            });
        }, 5000);
    };

    return (
        <section id="booking" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Info Side */}
                    <div className="md:w-5/12 bg-primary text-white p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-teal-700 opacity-20 transform -skew-x-12 translate-x-12"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold font-heading mb-6">Book an Appointment</h3>
                            <p className="mb-6 text-blue-100">
                                Ready to start your recovery journey? Fill out the form and we will confirm your appointment shortly.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="font-bold w-20 flex-shrink-0">Call Us:</div>
                                    <div>+91 88503 59887</div>
                                </div>

                                <div className="flex items-start">
                                    <div className="font-bold w-20 flex-shrink-0">Visit:</div>
                                    <div>Shop No. 1-2, Near Hotel Q, Pula Bhuwana Road, New Flora Complex.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-7/12 p-6 md:p-10">
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-lg animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                                <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h4>
                                <p className="text-green-700">Thank you, {formData.name}. You should be redirected to WhatsApp to send your details to Dr. Mathur.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                                        <input
                                            type="time"
                                            id="time"
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                                    <textarea
                                        id="issue"
                                        name="issue"
                                        rows="3"
                                        value={formData.issue}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
                                        placeholder="Briefly describe your pain or issue..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg mt-2"
                                >
                                    Send Message on WhatsApp
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

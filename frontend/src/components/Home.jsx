import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center shadow-lg">
                <h1 className="text-5xl font-extrabold mb-4 animate-fadeInDown">
                    Welcome to Our Premium Home Page
                </h1>
                <p className="text-lg opacity-90 animate-fadeInUp">
                    Experience excellence with our services
                </p>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-12 px-6">
                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                            Premium Features
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Exclusive Content</li>
                            <li>Custom Services</li>
                            <li>24/7 Support</li>
                            <li>Personalized Experience</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our platform offers unparalleled quality and a customer-first approach. We prioritize your satisfaction and strive to deliver the best experience tailored to your needs.
                        </p>
                    </div>
                </section>

                {/* Call-to-Action */}
                <div className="mt-16 text-center">
                    <a
                        href="/services"
                        className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110 inline-block shadow-md animate-pulse"
                    >
                        Explore Our Services
                    </a>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; 2024 Premium Home. All rights reserved.</p>
                <p className="mt-2 text-gray-400">Made with ❤️ by Alok Tiwari</p>
            </footer>
        </div>
    );
};

export default Home;

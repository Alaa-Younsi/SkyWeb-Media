import React from 'react';
import { Code, Share2, ShoppingCart, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Web Development & Graphic Design",
      description: "We build all kinds of websites, our graphic design services cover everything, and we offer server management services.",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Social Media & Email Marketing",
      description: "We offer social media management, advertising, marketing, Content Creation, Email Marketing & PPC services.",
      icon: <Share2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "SEO & CRO",
      description: "We offer Search engine optimization & Conversion rate optimization services to maximize your online visibility.",
      icon: <Search className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description: "We build online stores, products listing & Payment gateway integration services for seamless online shopping.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-skyblue-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to boost your online presence 
            and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl p-6 card-hover shadow-lg border border-skyblue-100"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-skyblue-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600">
                {service.description}
              </p>
              
              <button className="mt-6 text-skyblue-600 hover:text-skyblue-800 font-medium flex items-center group">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
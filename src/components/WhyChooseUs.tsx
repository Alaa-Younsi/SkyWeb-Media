import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      id: 1,
      number: "01",
      title: "Expertise & Specialization",
      description: "We are experts in web development and graphic design, ensuring high-quality results that exceed expectations.",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 2,
      number: "02",
      title: "Creative Customization",
      description: "Our approach is all about creative, custom solutions to make your brand stand out in the digital landscape.",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      number: "03",
      title: "Proven Success",
      description: "Our portfolio showcases successful projects and demonstrates how we deliver real, measurable results.",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 4,
      number: "04",
      title: "Comprehensive Services",
      description: "We offer a full range of digital marketing services, making us your one-stop solution for all marketing needs.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="why-us" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-skyblue-600 to-cyan-500 rounded-2xl h-96 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white rounded-full"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-skyblue-700">95%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-skyblue-700">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-skyblue-900 mb-6">
              Why Choose SkyWeb Media?
            </h2>
            
            <p className="text-gray-600 mb-10">
              We combine technical expertise with creative innovation to deliver 
              digital solutions that drive business growth and establish market leadership.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.id}
                  className="flex items-start space-x-4 p-4 hover:bg-skyblue-50 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-skyblue-100 text-skyblue-700 rounded-lg w-12 h-12 flex items-center justify-center">
                      <span className="font-bold text-lg">{benefit.number}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-skyblue-600">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-skyblue-900">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
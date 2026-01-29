import React from 'react';
import { MessageSquare, Search, Users, Target } from 'lucide-react';

const SMMA: React.FC = () => {
  const reasons = [
    {
      id: 1,
      title: "Your Customers Are on Social Media",
      description: "With almost 4 billion people on social media, your customers are already there. We help you engage and connect with them where they're already scrolling.",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: "People Are Searching for You",
      description: "If you offer valuable products/services, people are searching for them. We ensure you have a strong online presence to meet them in their search.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 3,
      title: "They're Talking About You",
      description: "Your customers are discussing your products/services on social media. We help you listen, engage, and be part of the conversation.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Stand Out From Competition",
      description: "77.6% of small businesses use social media. We implement specific strategies to propel you ahead of your competition.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-skyblue-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue-900 mb-4">
            Why You Need a Social Media Marketing Agency
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            In today's digital landscape, social media isn't optional—it's essential for business growth 
            and customer engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason) => (
            <div 
              key={reason.id}
              className="bg-white rounded-xl p-6 card-hover shadow-lg border border-skyblue-100"
            >
              <div className="bg-skyblue-100 text-skyblue-700 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-bold text-skyblue-900 mb-3">
                {reason.title}
              </h3>
              
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-skyblue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Digital Presence?
                </h3>
                <p className="opacity-95 mb-6">
                  At SkyWeb Media, your marketing goals are our goals. Our expert team is ready to 
                  help you understand and utilize social media marketing so that your business 
                  profits from it!
                </p>
              </div>
              
              <div className="text-center lg:text-right">
                <button className="bg-white text-skyblue-700 hover:bg-skyblue-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Let's Get Started
                </button>
                <p className="mt-4 text-sm opacity-90">
                  Schedule a free consultation today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMMA;
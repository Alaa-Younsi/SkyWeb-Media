import React from 'react';
import { TrendingUp, Users, Eye, MousePointer } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      id: 1,
      percentage: "75%",
      description: "of opinions on website credibility come from web design",
      icon: <Eye className="w-8 h-8" />,
      color: "text-blue-600"
    },
    {
      id: 2,
      percentage: "89%",
      description: "of people shop with a competitor after a poor user experience",
      icon: <Users className="w-8 h-8" />,
      color: "text-cyan-600"
    },
    {
      id: 3,
      percentage: "38%",
      description: "of people stop engaging with a website if it's unattractive",
      icon: <MousePointer className="w-8 h-8" />,
      color: "text-teal-600"
    },
    {
      id: 4,
      percentage: "4B+",
      description: "people on social media actively engaging with brands daily",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-emerald-600"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue-900 mb-4">
            How Can Web Design Improve Your Business?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Web design has the power to help you increase sales and improve your company's revenue. 
            Let's look at a few statistics that show the impact of design on business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-white rounded-xl p-8 card-hover shadow-lg border border-skyblue-100"
            >
              <div className={`mb-6 ${stat.color}`}>
                {stat.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-skyblue-900 mb-4">
                {stat.percentage}
              </div>
              
              <p className="text-gray-700">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-skyblue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-skyblue-900 mb-3">
                First Impressions Matter
              </h3>
              <p className="text-gray-700">
                When users look at your site, they determine if you're credible based on your design. 
                An outdated design makes visitors see you as untrustworthy. A clean, modern website 
                makes visitors comfortable browsing or shopping, leading to more conversions.
              </p>
            </div>
            
            <div className="bg-skyblue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-skyblue-900 mb-3">
                User Experience is Key
              </h3>
              <p className="text-gray-700">
                A website that delivers a positive experience with great design keeps people engaged. 
                You'll draw them in with a visually appealing site that's functional and easy to use, 
                leading to more engagement and sales for your business.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-skyblue-600 to-cyan-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              The Visual Impact
            </h3>
            <p className="mb-6 opacity-95">
              If your website isn't visually appealing, people will stop engaging with it. Your audience 
              wants to interact with sites that catch their attention and provide visual satisfaction.
            </p>
            <div className="bg-white/20 rounded-lg p-6">
              <p className="font-semibold">
                An outdated website can cause people to leave, which means they won't turn into a sale 
                for your company. By investing in professional web design, you can drive more sales and 
                revenue for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
import React from 'react';
import { Users, Target, TrendingUp, BarChart } from 'lucide-react';

const MarketingFunnel: React.FC = () => {
  const funnelStages = [
    {
      id: 1,
      title: "Awareness",
      description: "Cast a wide net to capture as many prospects as possible through top-of-funnel marketing.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-300"
    },
    {
      id: 2,
      title: "Interest",
      description: "Engage prospects with compelling content that showcases your value proposition.",
      icon: <Target className="w-6 h-6" />,
      color: "from-cyan-400 to-teal-300"
    },
    {
      id: 3,
      title: "Decision",
      description: "Target qualified audiences with focused messaging to drive conversion decisions.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-teal-400 to-emerald-300"
    },
    {
      id: 4,
      title: "Action",
      description: "Convert prospects into customers with optimized user journeys and clear calls-to-action.",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-emerald-400 to-green-300"
    }
  ];

  return (
    <section id="approach" className="section-padding bg-gradient-to-b from-white to-skyblue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue-900 mb-4">
            The Full-Funnel Approach
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Save Time & Generate Results With A Funnel That Works Across The Entire Customer Journey
          </p>
        </div>

        {/* Funnel Visualization */}
        <div className="relative">
          {/* Funnel Shape */}
          <div className="hidden lg:block absolute inset-0">
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-green-300"></div>
            <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-cyan-400 to-teal-300"></div>
            <div className="absolute top-3/4 left-1/3 right-1/3 h-1 bg-gradient-to-r from-teal-400 to-emerald-300"></div>
          </div>

          {/* Funnel Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {funnelStages.map((stage) => (
              <div key={stage.id} className="relative">
                <div className={`bg-gradient-to-br ${stage.color} rounded-xl p-8 text-white h-full card-hover`}>
                  <div className="mb-6">
                    <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      {stage.icon}
                    </div>
                    <div className="text-4xl font-bold opacity-50">0{stage.id}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                  <p className="opacity-90">{stage.description}</p>
                </div>
                
                {/* Connector arrows for mobile */}
                {stage.id < 4 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="text-skyblue-400">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            A full-funnel marketing approach allows our team to work across the entire customer journey 
            and create solutions for the fundamental needs to scale new customer acquisition and retention 
            for e-commerce brands. We begin at top of the funnel by casting a wide net to capture as many 
            prospects as possible. As prospects move down, the marketing becomes highly focused, targeting 
            the most qualified audience with the highest propensity to convert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingFunnel;
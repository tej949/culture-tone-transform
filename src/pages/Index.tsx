
import React from 'react';
import EmailTransformer from '@/components/EmailTransformer';
import FeatureHighlight from '@/components/FeatureHighlight';
import DemoStory from '@/components/DemoStory';
import StatsCard from '@/components/StatsCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto py-12 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Culture Tone Transform
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            AI-powered email transformation for cross-cultural business communication
          </p>
        </header>

        <div className="flex flex-col items-center space-y-12">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col space-y-2 text-left">
                  <h2 className="text-2xl font-bold">Before</h2>
                  <div className="bg-white/10 p-4 rounded-md">
                    <p className="text-white/90">Sir, send me the report fast.</p>
                    <p className="text-white/90">I need it for my meeting tomorrow.</p>
                    <p className="text-white/90">- Jane</p>
                  </div>
                </div>
                <div className="hidden md:block w-0.5 h-24 bg-white/30" />
                <div className="flex flex-col space-y-2 text-left">
                  <h2 className="text-2xl font-bold">After</h2>
                  <div className="bg-white/10 p-4 rounded-md">
                    <p className="text-white/90">Dear Dr. Smith,</p>
                    <p className="text-white/90">I hope this email finds you well.</p>
                    <p className="text-white/90">I'd be grateful if you could share the report at your earliest convenience, as I need to prepare for a meeting tomorrow.</p>
                    <p className="text-white/90">Thank you for your assistance.</p>
                    <p className="text-white/90">Kind regards,</p>
                    <p className="text-white/90">Jane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <StatsCard />
          
          <EmailTransformer />
          
          <FeatureHighlight />
          
          <DemoStory />
        </div>
      </div>
    </div>
  );
};

export default Index;

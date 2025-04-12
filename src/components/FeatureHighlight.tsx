
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Database, Zap, Code2, BarChart4, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Globe2 className="h-6 w-6 text-blue-500" />,
    title: "Culture Codes API",
    description: "Validated cultural databases covering business norms for 47 countries"
  },
  {
    icon: <Code2 className="h-6 w-6 text-indigo-500" />,
    title: "Gemini Prompt Engineering",
    description: "Advanced prompt engineering for cultural context understanding"
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: "Real-time Transformation",
    description: "Industry-specific rules with attachment context awareness"
  },
  {
    icon: <Database className="h-6 w-6 text-green-500" />,
    title: "Smart Caching",
    description: "Efficient caching mechanisms for faster response times"
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-purple-500" />,
    title: "Validation System",
    description: "Quality assurance through a multi-level validation system"
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-red-500" />,
    title: "Response Analytics",
    description: "Track improved response rates with detailed analytics"
  }
];

const FeatureHighlight = () => {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-xl">Technical Features</CardTitle>
        <CardDescription>
          Powered by advanced AI and cultural intelligence
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="mb-2">{feature.icon}</div>
              <h3 className="font-medium text-base mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureHighlight;

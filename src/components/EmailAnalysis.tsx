
import React from 'react';
import { AlertCircle, InfoIcon, CheckCircle2 } from 'lucide-react';

type AnalysisItem = {
  type: 'improvement' | 'warning' | 'info';
  text: string;
};

type EmailAnalysisProps = {
  analysis: {
    items: AnalysisItem[];
    overallTone: string;
  };
};

const EmailAnalysis: React.FC<EmailAnalysisProps> = ({ analysis }) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'improvement':
        return <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />;
      case 'info':
        return <InfoIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Cultural Analysis</h3>
      
      <div className="bg-muted p-4 rounded-md">
        <h4 className="font-medium mb-2">Overall Assessment</h4>
        <p className="text-sm">{analysis.overallTone}</p>
      </div>
      
      <div className="space-y-3">
        {analysis.items.map((item, index) => (
          <div key={index} className="flex gap-3 items-start p-3 bg-background border rounded-md">
            {renderIcon(item.type)}
            <div>
              <div className="text-xs uppercase font-semibold mb-1">
                {item.type === 'improvement' && 'Improvement'}
                {item.type === 'warning' && 'Cultural Warning'}
                {item.type === 'info' && 'Cultural Insight'}
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailAnalysis;

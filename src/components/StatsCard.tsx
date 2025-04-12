
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpCircle, UsersRound, Clock, Globe } from 'lucide-react';

const StatsCard = () => {
  return (
    <Card className="w-full max-w-4xl">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-4 text-center space-y-2">
            <ArrowUpCircle className="h-10 w-10 text-green-500" />
            <h3 className="text-3xl font-bold">300%</h3>
            <p className="text-sm text-muted-foreground">Higher Response Rate</p>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center space-y-2">
            <UsersRound className="h-10 w-10 text-blue-500" />
            <h3 className="text-3xl font-bold">47</h3>
            <p className="text-sm text-muted-foreground">Cultural Databases</p>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center space-y-2">
            <Clock className="h-10 w-10 text-amber-500" />
            <h3 className="text-3xl font-bold">90s</h3>
            <p className="text-sm text-muted-foreground">Real-time Demo</p>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center space-y-2">
            <Globe className="h-10 w-10 text-indigo-500" />
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-sm text-muted-foreground">Industry Rules</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;

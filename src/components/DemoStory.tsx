
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';

const DemoStory = () => {
  return (
    <Card className="w-full max-w-4xl border-t-4 border-t-blue-500">
      <CardHeader>
        <CardTitle className="text-xl">Success Story</CardTitle>
        <CardDescription>
          How our Cultural Email Transformer makes a real difference
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-shrink-0 flex flex-col items-center">
          <Avatar className="h-24 w-24 border-2 border-blue-200">
            <AvatarImage src="/placeholder.svg" alt="Maria" />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
          <h3 className="font-medium mt-2">Maria Lopez</h3>
          <p className="text-sm text-muted-foreground">Software Developer, Colombia</p>
        </div>
        
        <div className="relative flex-1">
          <Quote className="absolute top-0 left-0 h-8 w-8 text-blue-200 -translate-x-2 -translate-y-2" />
          <blockquote className="pl-6 pr-4 py-2 text-muted-foreground italic">
            I was constantly being rejected after job interviews because of what recruiters called my "tone issues" in follow-up emails. As a Colombian developer applying to international companies, I didn't understand what I was doing wrong. After using the Cultural Email Transformer for just two weeks, everything changed. My emails were clear, professional, and culturally appropriate. I secured three job offers in one month! This tool didn't just transform my emails—it transformed my career.
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemoStory;

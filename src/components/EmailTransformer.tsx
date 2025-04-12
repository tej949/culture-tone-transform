
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { transformEmail } from '@/utils/emailTransformer';
import EmailAnalysis from './EmailAnalysis';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

const cultures = [
  { id: 'british', name: 'British' },
  { id: 'japanese', name: 'Japanese' },
  { id: 'german', name: 'German' },
  { id: 'american', name: 'American' },
  { id: 'indian', name: 'Indian' },
  { id: 'french', name: 'French' },
];

const EmailTransformer = () => {
  const [originalEmail, setOriginalEmail] = useState('');
  const [targetCulture, setTargetCulture] = useState('british');
  const [transformedEmail, setTransformedEmail] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('input');
  const { toast } = useToast();

  const handleTransform = async () => {
    if (!originalEmail.trim()) {
      toast({
        title: "Email content required",
        description: "Please enter an email to transform",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await transformEmail(originalEmail, targetCulture);
      setTransformedEmail(result.rewrittenEmail);
      setAnalysis(result.analysis);
      setActiveTab('output');
      toast({
        title: "Email transformed",
        description: "Your email has been culturally adapted",
        variant: "default",
      });
    } catch (error) {
      console.error('Error transforming email:', error);
      toast({
        title: "Transformation failed",
        description: "There was an error transforming your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const exampleEmail = `Sir, send me the report fast. 
I need it for my meeting tomorrow.
- Jane`;

  const handleUseExample = () => {
    setOriginalEmail(exampleEmail);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-2xl">Cultural Email Transformer</CardTitle>
        <CardDescription>
          Transform your business emails to match cultural norms and increase response rates by up to 300%
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="input">Input Email</TabsTrigger>
            <TabsTrigger value="output" disabled={!transformedEmail}>Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="input" className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="email-content" className="text-sm font-medium">
                  Your Email Content
                </label>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleUseExample}
                  className="text-xs"
                >
                  Use Example
                </Button>
              </div>
              <Textarea
                id="email-content"
                placeholder="Enter your email content here..."
                className="min-h-[200px]"
                value={originalEmail}
                onChange={(e) => setOriginalEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="target-culture" className="text-sm font-medium">
                Target Culture
              </label>
              <Select 
                value={targetCulture} 
                onValueChange={setTargetCulture}
              >
                <SelectTrigger id="target-culture">
                  <SelectValue placeholder="Select target culture" />
                </SelectTrigger>
                <SelectContent>
                  {cultures.map((culture) => (
                    <SelectItem key={culture.id} value={culture.id}>
                      {culture.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          
          <TabsContent value="output" className="space-y-6">
            {transformedEmail && (
              <>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Transformed Email</h3>
                  <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
                    {transformedEmail}
                  </div>
                </div>
                
                {analysis && <EmailAnalysis analysis={analysis} />}
              </>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => {
          setTransformedEmail('');
          setAnalysis(null);
          setActiveTab('input');
        }} variant="outline" disabled={isLoading || !transformedEmail}>
          Reset
        </Button>
        <Button onClick={handleTransform} disabled={isLoading || !originalEmail.trim()}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Transforming...
            </>
          ) : (
            <>Transform Email</>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EmailTransformer;


import { toast } from "@/components/ui/use-toast";

const GEMINI_API_KEY = 'AIzaSyDO0R-9FhBajxi-TznQ95INqHjzKXEZ50w';
const API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

interface TransformationResult {
  rewrittenEmail: string;
  analysis: {
    items: Array<{
      type: string;
      text: string;
    }>;
    overallTone: string;
  };
}

// Simple in-memory cache
const cache: Record<string, TransformationResult> = {};

export const transformEmail = async (
  originalEmail: string,
  targetCulture: string
): Promise<TransformationResult> => {
  // Create a cache key
  const cacheKey = `${targetCulture}:${originalEmail}`;
  
  // Check if we have a cached response
  if (cache[cacheKey]) {
    console.log('Using cached transformation result');
    return cache[cacheKey];
  }

  try {
    const prompt = createCulturePrompt(originalEmail, targetCulture);
    
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the JSON string from the response
    const textResponse = data.candidates[0].content.parts[0].text;
    
    // The API returns JSON as a string within markdown code blocks, so we need to extract it
    const jsonMatch = textResponse.match(/```json\n([\s\S]*)\n```/);
    
    if (!jsonMatch) {
      throw new Error('Failed to parse API response');
    }
    
    const jsonStr = jsonMatch[1];
    const result: TransformationResult = JSON.parse(jsonStr);
    
    // Cache the result
    cache[cacheKey] = result;
    
    return result;
  } catch (error) {
    console.error('Error in transformEmail:', error);
    throw new Error('Failed to transform email');
  }
};

function createCulturePrompt(originalEmail: string, targetCulture: string): string {
  const culturePrompts: Record<string, string> = {
    british: `You are a cultural email adaptation expert specializing in British business communication. 
  Rewrite the provided email to match British business norms, which typically include:
  
  - Formal and polite language
  - Indirect communication style
  - Proper use of titles and formalities
  - Understated approach to achievements and requests
  - Appropriate British phrases and expressions
  - Less directness than American English
  - Proper use of British English spelling (organisation vs organization, etc.)
  
  Analyze the original email for cultural tone and provide feedback on potential misunderstandings.
                `,
    japanese: `You are a cultural email adaptation expert specializing in Japanese business communication.
  Rewrite the provided email to match Japanese business norms, which typically include:
  
  - High degree of formality and respect
  - Careful attention to hierarchy and social status
  - Indirect and tentative phrasing for requests
  - Acknowledgment of the relationship
  - Appropriate seasonal greetings
  - Expressions of gratitude and apology
  - Consultative and group-oriented language
  - Clear closing expressions
  
  Analyze the original email for cultural tone and provide feedback on potential misunderstandings.
                `,
    german: `You are a cultural email adaptation expert specializing in German business communication.
  Rewrite the provided email to match German business norms, which typically include:
  
  - Direct and precise language
  - Formal academic titles and surnames
  - Clear organization with bullet points or numbered lists
  - Factual and data-oriented content
  - Minimal small talk or personal content
  - Thorough details and reasoning
  - Proper use of formal/informal address (Sie vs. du)
  - Appropriate closing formulations
  
  Analyze the original email for cultural tone and provide feedback on potential misunderstandings.
                `,
    american: `You are a cultural email adaptation expert specializing in American business communication.
  Rewrite the provided email to match American business norms, which typically include:
  
  - Friendly but professional tone
  - Direct and clear communication
  - A blend of personal and business content
  - Positive and solution-focused language
  - Clear action items and next steps
  - Time-sensitive references and deadlines
  - Appropriate level of informality balanced with professionalism
  - Brief but thorough content
  
  Analyze the original email for cultural tone and provide feedback on potential misunderstandings.
                `,
    indian: `You are a cultural email adaptation expert specializing in Indian business communication.
  Rewrite the provided email to match Indian business norms, which typically include:
  
  - Respectful acknowledgment of seniority and position
  - Blend of formality with personal connection
  - Relationship-building elements
  - Contextual background information
  - Flexible approach to timelines
  - Polite and indirect requests
  - Appropriate honorifics and titles
  - Expression of collective values
  
  Analyze the original email for cultural tone and provide feedback on potential misunderstandings.
                `,
    french: `You are a cultural email adaptation expert specializing in French business communication.
  Rewrite the provided email to match French business norms, which typically include:
  
  - Formal language and structure
  - Proper use of titles and honorifics
  - Logical flow and intellectual rigor
  - Appropriate formality in addressing recipients
  - Proper openings and closings (formules de politesse)
  - Context and background information
  - Proper use of vous (formal) vs. tu (informal)
  - Elegant and sophisticated language
  
  Analyze the original email for cultural tone and provide feedback on potential misunderstandings.
                `
  };

  const prompt = culturePrompts[targetCulture] || culturePrompts.british;
  
  return `${prompt}
Original email:
"""
${originalEmail}
"""

Return a JSON response with the following structure:
{
  "rewrittenEmail": "The full rewritten email text",
  "analysis": {
    "items": [
      {"type": "improvement", "text": "Description of improvement made"},
      {"type": "warning", "text": "Warning about potential cultural issue"},
      {"type": "info", "text": "General cultural information"}
    ],
    "overallTone": "A short assessment of the original email's tone and key adjustments made"
  }
}
`;
}

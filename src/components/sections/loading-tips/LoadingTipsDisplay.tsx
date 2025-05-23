"use client";

import { useEffect, useState } from 'react';
import { generateLoadingTips, type GenerateLoadingTipsOutput } from '@/ai/flows/generate-loading-tips';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Lightbulb, ScrollText, Brain, PuzzleIcon, Zap } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { LOADING_TIPS_PROMPT_INPUT, LOADING_TIPS_ICONS } from '@/lib/constants';

const LoadingTipsDisplay = () => {
  const [tipsData, setTipsData] = useState<GenerateLoadingTipsOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await generateLoadingTips(LOADING_TIPS_PROMPT_INPUT);
        setTipsData(result);
      } catch (e) {
        console.error("Failed to generate loading tips:", e);
        setError("Oops! Couldn't fetch helpful tips right now. Try again later!");
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  if (loading) {
    return (
      <Card className="bg-card/70 backdrop-blur-sm border-border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-accent glow-accent">
            <Lightbulb className="mr-2 h-6 w-6" /> Loading Server Wisdom...
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from({ length: LOADING_TIPS_PROMPT_INPUT.numTips }).map((_, i) => (
            <div key={i} className="flex items-start space-x-3">
              <Skeleton className="h-5 w-5 rounded-full mt-1 bg-muted" />
              <Skeleton className="h-4 w-3/4 bg-muted" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-destructive/20 border-destructive text-destructive-foreground">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <AlertTriangle className="mr-2 h-6 w-6" /> Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!tipsData || tipsData.tips.length === 0) {
    return (
       <Card className="bg-card/70 backdrop-blur-sm border-border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-accent glow-accent">
            <Lightbulb className="mr-2 h-6 w-6" /> Server Wisdom
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No tips available at the moment. Explore and discover!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/70 backdrop-blur-sm border-primary shadow-xl shadow-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-primary glow-primary">
          <Lightbulb className="mr-3 h-7 w-7" /> Server Wisdom & Tips
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tipsData.tips.map((tip, index) => {
             const TipIconComponent = LOADING_TIPS_ICONS[index % LOADING_TIPS_ICONS.length] || Lightbulb;
            return (
            <li key={index} className="group flex items-start space-x-3 p-3 bg-muted/50 rounded-md border border-border hover:border-accent transition-all">
              <TipIconComponent className="h-5 w-5 mt-1 text-accent flex-shrink-0 group-hover:glow-accent transition-all duration-200" />
              <span className="text-foreground">{tip}</span>
            </li>
          );
        })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LoadingTipsDisplay;

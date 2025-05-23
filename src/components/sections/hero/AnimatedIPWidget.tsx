"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { SERVER_IP } from '@/lib/constants';

const AnimatedIPWidget = () => {
  const { toast } = useToast();
  const [copied, copyToClipboard] = useCopyToClipboard();
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(SERVER_IP);
    if (success) {
      toast({
        title: "IP Copied!",
        description: `${SERVER_IP} is now in your clipboard.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Copy Failed",
        description: "Could not copy IP to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div 
      className="flex items-center space-x-2 bg-card/70 backdrop-blur-sm p-3 rounded-lg border border-primary shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span 
        className={`font-mono text-lg md:text-xl transition-all duration-300 ${
          isHovered || copied ? 'text-primary glow-primary' : 'text-accent'
        }`}
      >
        {SERVER_IP}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleCopy}
        className={`transition-colors duration-300 ${
          copied ? 'text-green-400 hover:text-green-500' : 'text-muted-foreground hover:text-primary'
        }`}
        aria-label="Copy server IP"
      >
        {copied ? <Check className="w-5 h-5 animate-pulse" /> : <Copy className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default AnimatedIPWidget;

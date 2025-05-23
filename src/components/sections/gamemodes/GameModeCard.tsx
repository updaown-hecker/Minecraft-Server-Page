import type { GameMode } from '@/lib/constants';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface GameModeCardProps {
  gameMode: GameMode;
}

const GameModeCard: React.FC<GameModeCardProps> = ({ gameMode }) => {
  const { Icon, title, description, status, image } = gameMode;
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20 overflow-hidden flex flex-col h-full group">
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            className="transition-transform duration-500 group-hover:scale-110"
            data-ai-hint="minecraft gameplay"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent"></div>
        </div>
      )}
      <CardHeader className="pt-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-300">{title}</CardTitle>
          <div className="p-2 rounded-full bg-accent/20 text-accent glow-accent">
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Badge variant={status === "Coming Soon" ? "secondary" : "default"} className={`text-xs ${status === "Coming Soon" ? "bg-accent/80 text-accent-foreground" : "bg-primary/80 text-primary-foreground"}`}>
          {status}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default GameModeCard;

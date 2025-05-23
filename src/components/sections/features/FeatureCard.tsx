import type { Feature } from '@/lib/constants';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { Icon, title, description } = feature;
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/20 flex flex-col h-full">
      <CardHeader className="flex flex-row items-center space-x-4 pb-3">
        <div className="p-3 rounded-full bg-primary/20 text-primary glow-primary">
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-xl font-semibold text-primary-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

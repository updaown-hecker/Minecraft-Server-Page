import Link from 'next/link';
import { FOOTER_LINKS, SOCIAL_LINKS, SERVER_IP, SERVER_NAME } from '@/lib/constants';
import DiscordIcon from '@/components/icons/DiscordIcon';
import YoutubeIcon from '@/components/icons/YoutubeIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import { Separator } from '@/components/ui/separator';
import { Heart, Settings } from 'lucide-react';

const iconComponents: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  Discord: DiscordIcon,
  Youtube: YoutubeIcon,
  Twitter: TwitterIcon,
};

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border/50 py-12 text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3 glow-primary">{SERVER_NAME}</h3>
            <p className="text-sm">
              The future of Minecraft multiplayer. Custom-coded and constantly evolving.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3 glow-accent">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:text-accent transition-all duration-200 ease-out hover:glow-accent transform hover:-translate-y-px"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3 glow-accent">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = iconComponents[social.iconKey];
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-muted-foreground hover:text-accent transition-all duration-200 ease-out hover:glow-accent transform hover:scale-110"
                  >
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </Link>
                );
              })}
            </div>
            <p className="text-sm">Server IP:</p>
            <p className="font-mono text-accent hover:glow-accent transition-all duration-200 cursor-pointer">
              {SERVER_IP}
            </p>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/50" />
        
        <div className="text-center text-sm">
          <p className="flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Settings className="w-4 h-4 text-primary inline-block animate-spin [animation-duration:3s]" />
            <span>and</span>
            <Heart className="w-4 h-4 text-primary inline-block animate-pulse" />
            <span>by the Storage Attendance Dev Team</span>
          </p>
          <p className="mt-1">&copy; {new Date().getFullYear()} {SERVER_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

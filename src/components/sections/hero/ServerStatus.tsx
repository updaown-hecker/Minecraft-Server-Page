import { Wifi, Users, Zap } from 'lucide-react';
import { UPTIME_PERCENTAGE, CURRENT_PLAYERS, MAX_PLAYERS, SERVER_STATUS_ONLINE } from '@/lib/constants';

const ServerStatus = () => {
  const statusColor = SERVER_STATUS_ONLINE ? 'text-green-400' : 'text-red-400';
  const statusText = SERVER_STATUS_ONLINE ? 'Online' : 'Offline';

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground backdrop-blur-sm bg-card/50 p-3 rounded-lg border border-border shadow-md">
      <div className="flex items-center space-x-2">
        <Wifi className={`w-5 h-5 ${statusColor} glow-accent`} />
        <span className={statusColor}>{statusText}</span>
      </div>
      <div className="hidden sm:block h-6 w-px bg-border"></div>
      <div className="flex items-center space-x-2">
        <Users className="w-5 h-5 text-accent glow-accent" />
        <span>{CURRENT_PLAYERS} / {MAX_PLAYERS} Players</span>
      </div>
      <div className="hidden sm:block h-6 w-px bg-border"></div>
      <div className="flex items-center space-x-2">
        <Zap className="w-5 h-5 text-primary glow-primary" />
        <span>{UPTIME_PERCENTAGE} Uptime</span>
      </div>
    </div>
  );
};

export default ServerStatus;

import { SpaceInvaderIcon } from "#components/icons";
import { CardTitle } from "#components/primitives";
import { cn } from "#utils";
import { cva, VariantProps } from "class-variance-authority";
import { useMemo, HTMLAttributes, useState, useEffect } from "react";
export interface ArcadeDiscoveryEventProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof arcadeDiscoveryEventVariants> {
  name: string;
  timestamp: number;
  Icon?: React.ReactNode;
  achievement?: {
    title: string;
    icon: string;
  };
}

export const arcadeDiscoveryEventVariants = cva(
  "select-none h-11 flex justify-between items-center px-3 py-2.5",
  {
    variants: {
      variant: {
        default: "bg-background-200",
        faded: "bg-background-100",
        ghost: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const ArcadeDiscoveryEvent = ({
  name,
  timestamp,
  Icon,
  achievement,
  variant,
}: ArcadeDiscoveryEventProps) => {
  return (
    <div className={cn(arcadeDiscoveryEventVariants({ variant }))}>
      <div className="flex items-center gap-x-1.5">
        {Icon ? Icon : <SpaceInvaderIcon size="sm" variant="solid" />}
        <CardTitle className="text-sm font-normal tracking-normal text-foreground-100">
          {name}
        </CardTitle>
        {achievement && (
          <AchievementEvent title={achievement.title} icon={achievement.icon} />
        )}
      </div>
      <Timestamp timestamp={timestamp} />
    </div>
  );
};

const AchievementEvent = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="flex items-center gap-x-1.5">
      <p className="text-xs text-foreground-300">earned</p>
      <div className="flex items-center gap-1 p-1 text-primary border-background-400 border rounded-sm">
        <div className={cn(icon, "fa-solid w-3 h-3")} />
        <p className="text-xs">{title}</p>
      </div>
    </div>
  );
};

const Timestamp = ({ timestamp }: { timestamp: number }) => {
  const [state, setState] = useState<{
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
  }>({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = now - timestamp * 1000;
      setState({
        seconds: Math.floor(diff / 1000),
        minutes: Math.floor(diff / (1000 * 60)),
        hours: Math.floor(diff / (1000 * 60 * 60)),
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const label = useMemo(() => {
    if (state.days > 0) return `${state.days}d ago`;
    if (state.hours > 0) return `${state.hours}h ago`;
    if (state.minutes > 0) return `${state.minutes}m ago`;
    return `${state.seconds}s ago`;
  }, [state]);

  return <p className="text-xs text-foreground-300">{label}</p>;
};

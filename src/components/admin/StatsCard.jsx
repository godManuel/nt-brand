import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel,
  color = "accent",
}) {
  const colorMap = {
    accent: "bg-accent/10 text-accent",
    primary: "bg-primary/10 text-primary",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="bg-card rounded-2xl p-5 md:p-6 shadow-sm border border-border/30">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <p className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            {value}
          </p>
        </div>
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
            colorMap[color],
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>
      {trend !== undefined && (
        <div className="flex items-center gap-1.5 mt-4">
          {trend >= 0 ? (
            <TrendingUp className="w-3.5 h-3.5 text-green-600" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5 text-red-500" />
          )}
          <span
            className={cn(
              "text-xs font-medium",
              trend >= 0 ? "text-green-600" : "text-red-500",
            )}
          >
            {trend >= 0 ? "+" : ""}
            {trend}%
          </span>
          {trendLabel && (
            <span className="text-xs text-muted-foreground">{trendLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}

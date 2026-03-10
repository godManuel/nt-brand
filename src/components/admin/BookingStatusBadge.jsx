import React from "react";
import { cn } from "@/lib/utils";

const STATUS_STYLES = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  confirmed: "bg-green-100 text-green-800 border-green-200",
  completed: "bg-blue-100 text-blue-800 border-blue-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
};

export default function BookingStatusBadge({ status }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border capitalize",
        STATUS_STYLES[status] ?? STATUS_STYLES.pending,
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full mr-1.5",
          status === "confirmed"
            ? "bg-green-500"
            : status === "completed"
              ? "bg-blue-500"
              : status === "cancelled"
                ? "bg-red-500"
                : "bg-yellow-500",
        )}
      />
      {status}
    </span>
  );
}

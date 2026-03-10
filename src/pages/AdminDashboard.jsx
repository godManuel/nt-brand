import React, { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import StatsCard from "../components/admin/StatsCard";
import BookingStatusBadge from "../components/admin/BookingStatusBadge";
import {
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "1234567890";

export default function AdminDashboard() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.Consultation.list("-created_date", 50).then((data) => {
      setConsultations(data);
      setLoading(false);
    });
  }, []);

  const pending = consultations.filter((c) => c.status === "pending");
  const confirmed = consultations.filter((c) => c.status === "confirmed");
  const completed = consultations.filter((c) => c.status === "completed");
  const thisMonth = consultations.filter((c) => {
    const d = new Date(c.created_date);
    const now = new Date();
    return (
      d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    );
  });

  const recent = consultations.slice(0, 5);

  return (
    <AdminLayout currentPage="AdminDashboard">
      {/* Welcome */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Good{" "}
          {new Date().getHours() < 12
            ? "morning"
            : new Date().getHours() < 17
              ? "afternoon"
              : "evening"}{" "}
          👋
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Here's what's happening with LocLuxe today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <StatsCard
            title="Total Bookings"
            value={loading ? "–" : consultations.length}
            icon={Calendar}
            trend={12}
            trendLabel="vs last month"
            color="accent"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <StatsCard
            title="Pending"
            value={loading ? "–" : pending.length}
            icon={Clock}
            color="blue"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <StatsCard
            title="Confirmed"
            value={loading ? "–" : confirmed.length}
            icon={CheckCircle2}
            color="green"
            trend={8}
            trendLabel="this week"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <StatsCard
            title="This Month"
            value={loading ? "–" : thisMonth.length}
            icon={Users}
            color="primary"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-card rounded-2xl shadow-sm border border-border/30 overflow-hidden">
          <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Recent Bookings</h3>
            <Link to={createPageUrl("AdminBookings")}>
              <Button
                variant="ghost"
                size="sm"
                className="text-accent h-8 text-xs"
              >
                View All <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="divide-y divide-border">
            {loading ? (
              Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="px-5 md:px-6 py-4 animate-pulse flex items-center gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-muted" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3.5 bg-muted rounded w-32" />
                      <div className="h-3 bg-muted rounded w-24" />
                    </div>
                    <div className="h-6 bg-muted rounded-full w-20" />
                  </div>
                ))
            ) : recent.length === 0 ? (
              <div className="px-6 py-10 text-center text-muted-foreground text-sm">
                No bookings yet
              </div>
            ) : (
              recent.map((c) => (
                <div
                  key={c.id}
                  className="px-5 md:px-6 py-4 flex items-center gap-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-sm font-bold">
                      {c.client_name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {c.client_name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {c.consultation_type === "new_client"
                        ? "New Client"
                        : "Transfer"}{" "}
                      · {c.preferred_date}
                    </p>
                  </div>
                  <BookingStatusBadge status={c.status} />
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${c.client_name}, this is LocLuxe regarding your consultation on ${c.preferred_date}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-muted-foreground hover:text-accent"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <div className="bg-card rounded-2xl shadow-sm border border-border/30 p-5 md:p-6">
            <h3 className="font-semibold text-foreground mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2.5">
              {[
                {
                  label: "Manage Bookings",
                  page: "AdminBookings",
                  icon: Calendar,
                },
                { label: "Edit Team Members", page: "AdminTeam", icon: Users },
                {
                  label: "Update Services",
                  page: "AdminServices",
                  icon: CheckCircle2,
                },
                {
                  label: "Site Settings",
                  page: "AdminSettings",
                  icon: ExternalLink,
                },
              ].map((action) => (
                <Link key={action.page} to={createPageUrl(action.page)}>
                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <action.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {action.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-sm border border-border/30 p-5 md:p-6">
            <h3 className="font-semibold text-foreground mb-1">
              Booking Breakdown
            </h3>
            <p className="text-xs text-muted-foreground mb-4">All time</p>
            <div className="space-y-3">
              {[
                {
                  label: "Pending",
                  count: pending.length,
                  total: consultations.length,
                  color: "bg-yellow-400",
                },
                {
                  label: "Confirmed",
                  count: confirmed.length,
                  total: consultations.length,
                  color: "bg-green-500",
                },
                {
                  label: "Completed",
                  count: completed.length,
                  total: consultations.length,
                  color: "bg-blue-500",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">
                      {item.count}
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all duration-700`}
                      style={{
                        width: item.total
                          ? `${(item.count / item.total) * 100}%`
                          : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

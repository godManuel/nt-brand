import React, { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import BookingStatusBadge from "../components/admin/BookingStatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Search,
  MessageCircle,
  Trash2,
  Eye,
  Filter,
  Phone,
  Mail,
  Calendar,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "1234567890";

export default function AdminBookings() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const load = () => {
    setLoading(true);
    base44.entities.Consultation.list("-created_date", 100).then((data) => {
      setConsultations(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (id, status) => {
    await base44.entities.Consultation.update(id, { status });
    setConsultations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c)),
    );
    if (selected?.id === id) setSelected((prev) => ({ ...prev, status }));
  };

  const deleteBooking = async (id) => {
    await base44.entities.Consultation.delete(id);
    setConsultations((prev) => prev.filter((c) => c.id !== id));
    setSelected(null);
  };

  const filtered = consultations.filter((c) => {
    const matchSearch =
      !search ||
      c.client_name?.toLowerCase().includes(search.toLowerCase()) ||
      c.email?.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || c.status === statusFilter;
    const matchType =
      typeFilter === "all" || c.consultation_type === typeFilter;
    return matchSearch && matchStatus && matchType;
  });

  return (
    <AdminLayout currentPage="AdminBookings">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Bookings
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          {consultations.length} total consultations
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-11 rounded-xl"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="h-11 w-full sm:w-40 rounded-xl">
            <Filter className="w-4 h-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="h-11 w-full sm:w-44 rounded-xl">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="new_client">New Client</SelectItem>
            <SelectItem value="transfer_client">Transfer Client</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-card rounded-2xl shadow-sm border border-border/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Client
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-5 py-4">
                        <div className="h-4 bg-muted rounded w-32" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="h-4 bg-muted rounded w-24" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="h-4 bg-muted rounded w-28" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="h-6 bg-muted rounded-full w-20" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="h-8 bg-muted rounded w-20" />
                      </td>
                    </tr>
                  ))
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-12 text-muted-foreground text-sm"
                  >
                    No bookings found
                  </td>
                </tr>
              ) : (
                filtered.map((c, i) => (
                  <motion.tr
                    key={c.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-accent text-xs font-bold">
                            {c.client_name?.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {c.client_name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {c.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-foreground/80">
                        {c.consultation_type === "new_client"
                          ? "New Client"
                          : "Transfer"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-foreground">
                        {c.preferred_date}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {c.preferred_time}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <Select
                        value={c.status}
                        onValueChange={(v) => updateStatus(c.id, v)}
                      >
                        <SelectTrigger className="h-8 w-32 border-0 p-0 bg-transparent focus:ring-0">
                          <BookingStatusBadge status={c.status} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-accent"
                          onClick={() => setSelected(c)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${c.client_name}, this is LocLuxe confirming your consultation on ${c.preferred_date} at ${c.preferred_time}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-green-600"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </a>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => deleteBooking(c.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">
              Booking Details
            </DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-lg font-bold">
                    {selected.client_name?.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {selected.client_name}
                  </p>
                  <BookingStatusBadge status={selected.status} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 bg-muted/30 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground">{selected.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm text-foreground">{selected.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Date</p>
                    <p className="text-sm text-foreground">
                      {selected.preferred_date}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Time</p>
                    <p className="text-sm text-foreground">
                      {selected.preferred_time}
                    </p>
                  </div>
                </div>
              </div>
              {selected.hair_type && (
                <div>
                  <Label className="text-xs text-muted-foreground">
                    Hair Type
                  </Label>
                  <p className="text-sm text-foreground mt-0.5">
                    {selected.hair_type}
                  </p>
                </div>
              )}
              {selected.message && (
                <div className="bg-muted/30 rounded-xl p-4">
                  <Label className="text-xs text-muted-foreground">Notes</Label>
                  <p className="text-sm text-foreground mt-1">
                    {selected.message}
                  </p>
                </div>
              )}
              <div className="flex gap-2 pt-2">
                <Select
                  value={selected.status}
                  onValueChange={(v) => updateStatus(selected.id, v)}
                >
                  <SelectTrigger className="flex-1 h-11 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${selected.client_name}, this is LocLuxe regarding your consultation on ${selected.preferred_date}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-11 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

import React, { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Scissors,
  ShoppingBag,
  GraduationCap,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

const EMPTY = {
  title: "",
  description: "",
  category: "hair",
  duration: "",
  price_range: "",
  image_url: "",
  whatsapp_message: "",
  external_link: "",
  is_active: true,
  sort_order: 0,
};

const CAT_ICONS = {
  hair: Scissors,
  product: ShoppingBag,
  training: GraduationCap,
};
const CAT_COLORS = {
  hair: "bg-accent/10 text-accent",
  product: "bg-blue-100 text-blue-700",
  training: "bg-green-100 text-green-700",
};

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [catFilter, setCatFilter] = useState("all");

  const load = () =>
    base44.entities.Service.list("sort_order").then((d) => {
      setServices(d);
      setLoading(false);
    });
  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY);
    setOpen(true);
  };
  const openEdit = (s) => {
    setEditing(s);
    setForm(s);
    setOpen(true);
  };

  const save = async () => {
    setSaving(true);
    if (editing) {
      const updated = await base44.entities.Service.update(editing.id, form);
      setServices((prev) =>
        prev.map((s) => (s.id === editing.id ? updated : s)),
      );
    } else {
      const created = await base44.entities.Service.create(form);
      setServices((prev) => [...prev, created]);
    }
    setSaving(false);
    setOpen(false);
  };

  const remove = async (id) => {
    await base44.entities.Service.delete(id);
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const toggleActive = async (s) => {
    const updated = await base44.entities.Service.update(s.id, {
      is_active: !s.is_active,
    });
    setServices((prev) => prev.map((x) => (x.id === s.id ? updated : x)));
  };

  const filtered =
    catFilter === "all"
      ? services
      : services.filter((s) => s.category === catFilter);

  return (
    <AdminLayout currentPage="AdminServices">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Services
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {services.length} total
          </p>
        </div>
        <Button
          onClick={openCreate}
          className="h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Service
        </Button>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {["all", "hair", "product", "training"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCatFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${catFilter === cat ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}
          >
            {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            {cat !== "all" && (
              <span className="ml-1.5 text-xs opacity-70">
                ({services.filter((s) => s.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-3">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-24 rounded-2xl bg-muted animate-pulse"
              />
            ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg font-medium">No services yet</p>
          <Button
            onClick={openCreate}
            variant="outline"
            className="mt-4 rounded-xl"
          >
            Add First Service
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((s, i) => {
            const Icon = CAT_ICONS[s.category] ?? Scissors;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`bg-card rounded-2xl border border-border/30 shadow-sm p-4 md:p-5 flex items-center gap-4 transition-opacity ${!s.is_active ? "opacity-60" : ""}`}
              >
                {s.image_url ? (
                  <img
                    src={s.image_url}
                    alt={s.title}
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                  />
                ) : (
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${CAT_COLORS[s.category]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                      {s.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${CAT_COLORS[s.category]}`}
                    >
                      {s.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1 line-clamp-1">
                    {s.description}
                  </p>
                  {(s.duration || s.price_range) && (
                    <p className="text-xs text-foreground/60 mt-1">
                      {s.duration && `⏱ ${s.duration}`}{" "}
                      {s.price_range && `· ${s.price_range}`}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => toggleActive(s)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.is_active ? (
                      <Eye className="w-4 h-4 text-green-600" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg"
                    onClick={() => openEdit(s)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg text-muted-foreground hover:text-destructive"
                    onClick={() => remove(s.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg rounded-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">
              {editing ? "Edit Service" : "Add Service"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label className="text-sm mb-1.5 block">Title *</Label>
                <Input
                  value={form.title}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, title: e.target.value }))
                  }
                  placeholder="Service title"
                  className="h-11 rounded-xl"
                />
              </div>
              <div>
                <Label className="text-sm mb-1.5 block">Category *</Label>
                <Select
                  value={form.category}
                  onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}
                >
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hair">Hair Service</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm mb-1.5 block">Price Range</Label>
                <Input
                  value={form.price_range}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, price_range: e.target.value }))
                  }
                  placeholder="$150 - $350"
                  className="h-11 rounded-xl"
                />
              </div>
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">Description</Label>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
                placeholder="Describe this service..."
                className="rounded-xl resize-none"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm mb-1.5 block">Duration</Label>
                <Input
                  value={form.duration}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, duration: e.target.value }))
                  }
                  placeholder="e.g. 2-4 hours"
                  className="h-11 rounded-xl"
                />
              </div>
              <div>
                <Label className="text-sm mb-1.5 block">Sort Order</Label>
                <Input
                  type="number"
                  value={form.sort_order}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      sort_order: Number(e.target.value),
                    }))
                  }
                  className="h-11 rounded-xl"
                />
              </div>
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">Image URL</Label>
              <Input
                value={form.image_url}
                onChange={(e) =>
                  setForm((f) => ({ ...f, image_url: e.target.value }))
                }
                placeholder="https://..."
                className="h-11 rounded-xl"
              />
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">
                WhatsApp Pre-fill Message
              </Label>
              <Input
                value={form.whatsapp_message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, whatsapp_message: e.target.value }))
                }
                placeholder="Hi! I'm interested in..."
                className="h-11 rounded-xl"
              />
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">
                External Link (Amazon / Course)
              </Label>
              <Input
                value={form.external_link}
                onChange={(e) =>
                  setForm((f) => ({ ...f, external_link: e.target.value }))
                }
                placeholder="https://..."
                className="h-11 rounded-xl"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1 h-11 rounded-xl"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={save}
                disabled={saving || !form.title}
                className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : editing ? (
                  "Save Changes"
                ) : (
                  "Add Service"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

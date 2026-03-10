import React, { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  ExternalLink,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const EMPTY = {
    title: "",
    description: "",
    image_url: "",
    external_link: "",
    whatsapp_message: "",
    is_active: true,
    sort_order: 0,
  };
  const [form, setForm] = useState(EMPTY);

  const load = () =>
    base44.entities.Service.filter({ category: "product" }, "sort_order").then(
      (d) => {
        setProducts(d);
        setLoading(false);
      },
    );
  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY);
    setOpen(true);
  };
  const openEdit = (p) => {
    setEditing(p);
    setForm(p);
    setOpen(true);
  };

  const save = async () => {
    setSaving(true);
    const data = { ...form, category: "product" };
    if (editing) {
      const updated = await base44.entities.Service.update(editing.id, data);
      setProducts((prev) =>
        prev.map((p) => (p.id === editing.id ? updated : p)),
      );
    } else {
      const created = await base44.entities.Service.create(data);
      setProducts((prev) => [...prev, created]);
    }
    setSaving(false);
    setOpen(false);
  };

  const remove = async (id) => {
    await base44.entities.Service.delete(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleActive = async (p) => {
    const updated = await base44.entities.Service.update(p.id, {
      is_active: !p.is_active,
    });
    setProducts((prev) => prev.map((x) => (x.id === p.id ? updated : x)));
  };

  return (
    <AdminLayout currentPage="AdminProducts">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Products
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {products.length} products (Amazon links)
          </p>
        </div>
        <Button
          onClick={openCreate}
          className="h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Product
        </Button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-2xl bg-muted animate-pulse"
              />
            ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg font-medium">No products yet</p>
          <Button
            onClick={openCreate}
            variant="outline"
            className="mt-4 rounded-xl"
          >
            Add First Product
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-card rounded-2xl border border-border/30 overflow-hidden shadow-sm ${!p.is_active ? "opacity-60" : ""}`}
            >
              <div className="relative aspect-square bg-muted">
                {p.image_url ? (
                  <img
                    src={p.image_url}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-4xl">
                    🛍️
                  </div>
                )}
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <button
                    onClick={() => toggleActive(p)}
                    className="w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
                  >
                    {p.is_active ? (
                      <Eye className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <EyeOff className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm truncate">
                  {p.title}
                </h3>
                {p.description && (
                  <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                    {p.description}
                  </p>
                )}
                {p.external_link && (
                  <a
                    href={p.external_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent mt-2 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" /> Amazon Link
                  </a>
                )}
                <div className="flex gap-2 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 rounded-lg text-xs"
                    onClick={() => openEdit(p)}
                  >
                    <Pencil className="w-3 h-3 mr-1" /> Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg text-muted-foreground hover:text-destructive"
                    onClick={() => remove(p.id)}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">
              {editing ? "Edit Product" : "Add Product"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <Label className="text-sm mb-1.5 block">Product Name *</Label>
              <Input
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                placeholder="Product name"
                className="h-11 rounded-xl"
              />
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">Description</Label>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
                placeholder="Short description..."
                className="rounded-xl resize-none"
                rows={3}
              />
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">Product Image URL</Label>
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
                Amazon Product Link
              </Label>
              <Input
                value={form.external_link}
                onChange={(e) =>
                  setForm((f) => ({ ...f, external_link: e.target.value }))
                }
                placeholder="https://amazon.com/..."
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
                  "Add Product"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

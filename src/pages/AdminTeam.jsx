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
  GripVertical,
  Instagram,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

const EMPTY = {
  name: "",
  role: "",
  bio: "",
  image_url: "",
  instagram_url: "",
  is_active: true,
  sort_order: 0,
};

export default function AdminTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  const load = () =>
    base44.entities.TeamMember.list("sort_order").then((d) => {
      setMembers(d);
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
  const openEdit = (m) => {
    setEditing(m);
    setForm(m);
    setOpen(true);
  };

  const save = async () => {
    setSaving(true);
    if (editing) {
      const updated = await base44.entities.TeamMember.update(editing.id, form);
      setMembers((prev) =>
        prev.map((m) => (m.id === editing.id ? updated : m)),
      );
    } else {
      const created = await base44.entities.TeamMember.create(form);
      setMembers((prev) => [...prev, created]);
    }
    setSaving(false);
    setOpen(false);
  };

  const remove = async (id) => {
    await base44.entities.TeamMember.delete(id);
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const toggleActive = async (m) => {
    const updated = await base44.entities.TeamMember.update(m.id, {
      is_active: !m.is_active,
    });
    setMembers((prev) => prev.map((x) => (x.id === m.id ? updated : x)));
  };

  return (
    <AdminLayout currentPage="AdminTeam">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Team Members
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {members.length} members
          </p>
        </div>
        <Button
          onClick={openCreate}
          className="h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Member
        </Button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-2xl bg-muted animate-pulse"
              />
            ))}
        </div>
      ) : members.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg font-medium">No team members yet</p>
          <p className="text-sm mt-1">
            Add your first team member to get started
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-card rounded-2xl border border-border/30 overflow-hidden shadow-sm transition-opacity ${!m.is_active ? "opacity-60" : ""}`}
            >
              <div className="relative h-48 bg-muted">
                {m.image_url ? (
                  <img
                    src={m.image_url}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary">
                    <span className="text-4xl font-serif font-semibold text-muted-foreground">
                      {m.name?.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => toggleActive(m)}
                    className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  >
                    {m.is_active ? (
                      <Eye className="w-4 h-4 text-green-600" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{m.name}</h3>
                    <p className="text-accent text-sm mt-0.5">{m.role}</p>
                  </div>
                </div>
                {m.bio && (
                  <p className="text-muted-foreground text-xs mt-2 line-clamp-2">
                    {m.bio}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-9 rounded-lg"
                    onClick={() => openEdit(m)}
                  >
                    <Pencil className="w-3.5 h-3.5 mr-1.5" /> Edit
                  </Button>
                  {m.instagram_url && (
                    <a
                      href={m.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-lg text-muted-foreground hover:text-accent"
                      >
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-lg text-muted-foreground hover:text-destructive"
                    onClick={() => remove(m.id)}
                  >
                    <Trash2 className="w-4 h-4" />
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
              {editing ? "Edit Team Member" : "Add Team Member"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm mb-1.5 block">Full Name *</Label>
                <Input
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Name"
                  className="h-11 rounded-xl"
                />
              </div>
              <div>
                <Label className="text-sm mb-1.5 block">Role / Title *</Label>
                <Input
                  value={form.role}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, role: e.target.value }))
                  }
                  placeholder="e.g. Lead Specialist"
                  className="h-11 rounded-xl"
                />
              </div>
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">Bio</Label>
              <Textarea
                value={form.bio}
                onChange={(e) =>
                  setForm((f) => ({ ...f, bio: e.target.value }))
                }
                placeholder="Short bio..."
                className="rounded-xl resize-none"
                rows={3}
              />
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">Photo URL</Label>
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
              <Label className="text-sm mb-1.5 block">Instagram URL</Label>
              <Input
                value={form.instagram_url}
                onChange={(e) =>
                  setForm((f) => ({ ...f, instagram_url: e.target.value }))
                }
                placeholder="https://instagram.com/..."
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
                disabled={saving || !form.name || !form.role}
                className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : editing ? (
                  "Save Changes"
                ) : (
                  "Add Member"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

import React, { useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Save,
  Globe,
  Phone,
  Instagram,
  MessageCircle,
  Star,
  ShoppingBag,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminSettings() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [general, setGeneral] = useState({
    businessName: "LocLuxe",
    tagline: "Professional Microlocs & Sisterlocks",
    address: "",
    bio: "Expert Microlocs & Sisterlocks installation, maintenance, and styling.",
  });

  const [contact, setContact] = useState({
    whatsappNumber: "1234567890",
    email: "hello@locluxe.com",
    phone: "(555) 000-0000",
  });

  const [social, setSocial] = useState({
    instagram: "@locluxe",
    instagramUrl: "https://instagram.com/locluxe",
    amazonStorefront: "https://amazon.com",
    googleBusinessUrl: "https://g.page/review",
  });

  const [integrations, setIntegrations] = useState({
    googleCalendarId: "",
    googleReviewsId: "",
    instagramAccessToken: "",
  });

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const Field = ({ label, children }) => (
    <div>
      <Label className="text-sm font-medium mb-1.5 block text-foreground/80">
        {label}
      </Label>
      {children}
    </div>
  );

  return (
    <AdminLayout currentPage="AdminSettings">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Site Settings
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Configure your website content and integrations
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={saving}
          className={`h-11 px-5 rounded-xl font-medium transition-colors ${saved ? "bg-green-600 hover:bg-green-600 text-white" : "bg-primary hover:bg-primary/90 text-primary-foreground"}`}
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : saved ? (
            <CheckCircle2 className="w-4 h-4 mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          {saved ? "Saved!" : saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-1 h-auto p-1 bg-muted rounded-xl w-full md:w-auto">
          <TabsTrigger
            value="general"
            className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm py-2.5"
          >
            <Globe className="w-4 h-4 mr-2" /> General
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm py-2.5"
          >
            <Phone className="w-4 h-4 mr-2" /> Contact
          </TabsTrigger>
          <TabsTrigger
            value="social"
            className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm py-2.5"
          >
            <Instagram className="w-4 h-4 mr-2" /> Social
          </TabsTrigger>
          <TabsTrigger
            value="integrations"
            className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm py-2.5"
          >
            <Star className="w-4 h-4 mr-2" /> Integrations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border/30 shadow-sm p-6 md:p-8 space-y-5 max-w-2xl"
          >
            <h3 className="font-semibold text-foreground text-base">
              Business Information
            </h3>
            <Field label="Business Name">
              <Input
                value={general.businessName}
                onChange={(e) =>
                  setGeneral((g) => ({ ...g, businessName: e.target.value }))
                }
                className="h-11 rounded-xl"
              />
            </Field>
            <Field label="Tagline">
              <Input
                value={general.tagline}
                onChange={(e) =>
                  setGeneral((g) => ({ ...g, tagline: e.target.value }))
                }
                className="h-11 rounded-xl"
              />
            </Field>
            <Field label="Business Address">
              <Input
                value={general.address}
                onChange={(e) =>
                  setGeneral((g) => ({ ...g, address: e.target.value }))
                }
                placeholder="123 Main St, City, State"
                className="h-11 rounded-xl"
              />
            </Field>
            <Field label="About / Bio">
              <Textarea
                value={general.bio}
                onChange={(e) =>
                  setGeneral((g) => ({ ...g, bio: e.target.value }))
                }
                className="rounded-xl resize-none"
                rows={4}
              />
            </Field>
          </motion.div>
        </TabsContent>

        <TabsContent value="contact">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border/30 shadow-sm p-6 md:p-8 space-y-5 max-w-2xl"
          >
            <h3 className="font-semibold text-foreground text-base">
              Contact Details
            </h3>
            <Field label="WhatsApp Number (digits only)">
              <div className="relative">
                <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={contact.whatsappNumber}
                  onChange={(e) =>
                    setContact((c) => ({
                      ...c,
                      whatsappNumber: e.target.value,
                    }))
                  }
                  placeholder="1234567890"
                  className="h-11 pl-9 rounded-xl"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Include country code, no spaces or dashes
              </p>
            </Field>
            <Field label="Contact Email">
              <Input
                type="email"
                value={contact.email}
                onChange={(e) =>
                  setContact((c) => ({ ...c, email: e.target.value }))
                }
                className="h-11 rounded-xl"
              />
            </Field>
            <Field label="Phone Number">
              <Input
                value={contact.phone}
                onChange={(e) =>
                  setContact((c) => ({ ...c, phone: e.target.value }))
                }
                className="h-11 rounded-xl"
              />
            </Field>
          </motion.div>
        </TabsContent>

        <TabsContent value="social">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border/30 shadow-sm p-6 md:p-8 space-y-5 max-w-2xl"
          >
            <h3 className="font-semibold text-foreground text-base">
              Social & Links
            </h3>
            <Field label="Instagram Handle">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                  @
                </span>
                <Input
                  value={social.instagram.replace("@", "")}
                  onChange={(e) =>
                    setSocial((s) => ({
                      ...s,
                      instagram: "@" + e.target.value,
                    }))
                  }
                  className="h-11 pl-7 rounded-xl"
                />
              </div>
            </Field>
            <Field label="Instagram Profile URL">
              <Input
                value={social.instagramUrl}
                onChange={(e) =>
                  setSocial((s) => ({ ...s, instagramUrl: e.target.value }))
                }
                placeholder="https://instagram.com/..."
                className="h-11 rounded-xl"
              />
            </Field>
            <Field label="Amazon Storefront URL">
              <div className="relative">
                <ShoppingBag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={social.amazonStorefront}
                  onChange={(e) =>
                    setSocial((s) => ({
                      ...s,
                      amazonStorefront: e.target.value,
                    }))
                  }
                  className="h-11 pl-9 rounded-xl"
                />
              </div>
            </Field>
            <Field label="Google Business / Review Link">
              <div className="relative">
                <Star className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={social.googleBusinessUrl}
                  onChange={(e) =>
                    setSocial((s) => ({
                      ...s,
                      googleBusinessUrl: e.target.value,
                    }))
                  }
                  className="h-11 pl-9 rounded-xl"
                />
              </div>
            </Field>
          </motion.div>
        </TabsContent>

        <TabsContent value="integrations">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border/30 shadow-sm p-6 md:p-8 space-y-5 max-w-2xl"
          >
            <h3 className="font-semibold text-foreground text-base">
              Third-Party Integrations
            </h3>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
              <p className="text-sm text-foreground/80 font-medium">
                ℹ️ Integration Keys
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                These keys connect your website to external services. Handle
                with care.
              </p>
            </div>

            <Field label="Google Calendar ID">
              <Input
                value={integrations.googleCalendarId}
                onChange={(e) =>
                  setIntegrations((i) => ({
                    ...i,
                    googleCalendarId: e.target.value,
                  }))
                }
                placeholder="yourname@gmail.com"
                className="h-11 rounded-xl font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Used for paid booking calendar embed
              </p>
            </Field>
            <Field label="Google Reviews Place ID">
              <Input
                value={integrations.googleReviewsId}
                onChange={(e) =>
                  setIntegrations((i) => ({
                    ...i,
                    googleReviewsId: e.target.value,
                  }))
                }
                placeholder="ChIJ..."
                className="h-11 rounded-xl font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Find this in your Google Business profile
              </p>
            </Field>
            <Field label="Instagram Access Token">
              <Input
                value={integrations.instagramAccessToken}
                onChange={(e) =>
                  setIntegrations((i) => ({
                    ...i,
                    instagramAccessToken: e.target.value,
                  }))
                }
                placeholder="IGQVJ..."
                className="h-11 rounded-xl font-mono text-sm"
                type="password"
              />
              <p className="text-xs text-muted-foreground mt-1">
                For live Instagram feed embed
              </p>
            </Field>
          </motion.div>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}

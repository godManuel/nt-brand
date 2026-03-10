import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <span className="font-serif text-8xl font-bold text-accent/20">
          404
        </span>
        <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mt-3 text-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link to={createPageUrl("Home")}>
            <Button className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

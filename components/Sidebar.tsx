"use client";

import React from "react";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 p-6 flex-col h-full">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">
            Saas<span className="text-primary">Starter</span>
          </h1>
        </div>
      </div>
      <div className="space-y-1">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              "text-sm group flex p-3 w-full justify-start cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-lg transition",
              pathname === item.href ? "bg-accent" : "bg-transparent"
            )}
          >
            <div className="flex items-center flex-1">
              <item.icon className={cn("h-5 w-5 mr-3 text-primary")} />
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import UserNav from "./UserNav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="flex items-center p-6">
      <MobileNav />
      <div className="flex w-full gap-x-5 justify-end">
        <ThemeToggle />
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;

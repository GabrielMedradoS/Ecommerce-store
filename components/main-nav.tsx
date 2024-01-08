"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
  isOpen?: boolean;
}

export default function MainNav({ data, isOpen }: MainNavProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  // flex flex-col space-y-6
  return (
    <nav
      className={cn(
        "mx-6 md:flex items-center space-x-4 lg:space-x-6",
        isOpen ? "space-x-0 flex flex-col space-y-6" : "hidden"
      )}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black dark:hover:text-[var(--muted)] dark:text-[hsl(var(--muted-foreground))]",
            route.active
              ? "text-black dark:text-[var(--muted-foreground)]"
              : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "./button";
import { Fragment, useState } from "react";
import { Switch } from "@headlessui/react";

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);
  const { setTheme } = useTheme();

  return (
    <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked }) =>
        checked ? (
          /* Use the `checked` state to conditionally style the button. */
          <Button
            onClick={() => setTheme("light")}
            className="px-4 py-2 border-2 dark:border-[hsl(var(--border))]"
          >
            <Sun size={20} />
          </Button>
        ) : (
          <Button
            onClick={() => setTheme("dark")}
            className="px-4 py-2 border-2 dark:border-[hsl(var(--border))]"
          >
            <Moon size={20} />
          </Button>
        )
      }
    </Switch>
  );
}

"use client";

import { PanelLeftOpen } from "lucide-react";
import Button from "./ui/button";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import MainNav from "./main-nav";
import Container from "./ui/container";
import { Category } from "@/types";

interface NavBarMobileProps {
  categories: Category[];
}

export default function NavBarMobile({ categories }: NavBarMobileProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="px-5 py-2 border-2 dark:border-[hsl(var(--border))] md:hidden"
      >
        <PanelLeftOpen size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background when open de dialog */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog Position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-[hsl(var(--background))] py-4 pb-6 shadow-xl transition-all">
            <MainNav isOpen={open} data={categories} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

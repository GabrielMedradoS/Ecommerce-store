"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import { Color, Size } from "@/types";
import Filter from "./filter";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilters({ sizes, colors }: MobileFilterProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden border dark:border-[hsl(var(--border))]"
      >
        Filter <Plus size={20} />
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
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-[hsl(var(--background))] py-4 pb-6 shadow-xl ">
            {/* Close Button */}
            <div className="flex items-center justify-end px-4">
              <IconButton
                icon={<X size={20} className="dark:text-[hsl(var(--muted))]" />}
                onClick={onClose}
              />
            </div>

            {/* Render the filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

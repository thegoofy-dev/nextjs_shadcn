/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BellDot } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "02-01-2015",
      read: true
    },
    {
      text: "This is another notification",
      date: "02-01-2015",
      read: false
    },
  ]);
  return (
    <div className="border-b-2 rounded-b-2xl grid grid-cols-2 gap-2 p-4 border-amber-500">
      <CommandDemo />
      <div className="flex justify-end items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="relative" variant={"outline"} size={'lg'}>
            <div className={`absolute top-[14.5px] right-[17.9px] h-1 w-1 rounded-full ${notifications.find((x:any) => x.read ===true ) ? 'bg-amber-500' : 'bg-neutral-200'}`}></div>
            <BellDot />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="shadow-amber-200" align="end">
            {notifications.map((item: any, key: number) =>
              <DropdownMenuItem key={key} className="p-1 cursor-pointer hover:bg-amber-50 transition  flex items-start gap-2">
              <div className={`h-3 w-3 rounded-full my-[11px] ${item.read ? 'bg-amber-500' : 'bg-neutral-200'}`}></div>
              <div>
                <p>{item.text}</p>
                <p className="text-xs text-neutral-500">{item.date}</p>
              </div>
              </DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

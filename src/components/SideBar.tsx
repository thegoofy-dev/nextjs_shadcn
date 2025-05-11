/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

import UserItem from "./UserItem"
import { Cog, MessageSquareCode, Origami, PackageOpen, ScrollText, ShieldX } from "lucide-react"

const SideBar = () => {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: '/',
                    icon: <Origami />,
                    text: "Profile"
                },
                {
                    link: '/',
                    icon: <PackageOpen />,
                    text: "Inbox"
                },
                {
                    link: '/',
                    icon: <ScrollText />,
                    text: "Billing"
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: '/',
                    icon: <Cog />,
                    text: "General Settings"
                },
                {
                    link: '/',
                    icon: <MessageSquareCode />,
                    text: "Logs"
                },
                {
                    link: '/',
                    icon: <ShieldX />,
                    text: "Privacy"
                },
            ]
        },
    ]

    return (
        <div className="fixed flex flex-col gap-2 w-[300px] min-w-[300px] p-4 border-r-2 rounded-t-lg rounded-b-lg border-amber-500 min-h-screen">
            <div><UserItem /></div>
            <div className="mt-5 grow">
                <Command>
                    <CommandList >
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((option: any, optionKey: number) => (
                                    <CommandItem key={optionKey} className="cursor-pointer transition data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground hover:border-t-2 
                                    hover:border-l-2 hover:data-[selected=true]:text-amber-500 hover:border-amber-400 flex m-1 gap-3">
                                        {option.icon}
                                        {option.text}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>
            </div>
            <div /*className="border-amber-400 rounded-2xl border-2"*/>Settings/ Notifications</div>
        </div>
    )
}

export default SideBar

"use client"

import { Shell } from "lucide-react"

const UserItem = () => {
    return (
        <div className="flex items-center justify-evenly border-2 rounded-e-full border-amber-500 bg-amber-200 gap-3 px-3">
            <div className="avatar  rounded-r-full min-h-9 min-w-9 bg-amber-500 text-white font-[700] flex items-center justify-center border-2 border-white">GG</div>
            <div className="grow flex flex-col gap-[0.5px] text-amber-800">
                <div className="flex justify-evenly place-items-end">
                    <p>Goofy General</p>
                    <Shell  className=" mt-2 animate-spin" />
                </div>
                <p>codeGeneral@gmail.com</p>
            </div>
        </div>
    )
}

export default UserItem;

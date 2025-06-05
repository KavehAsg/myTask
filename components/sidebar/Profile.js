'use client'

// components
import ProfileMenu from "@/components/sidebar/ProfileMenu";

import { Dropdown, DropdownTrigger } from "@heroui/react";
import { Button } from "@heroui/react";


// icons
import { FaCaretUp, FaUserCircle } from "react-icons/fa";


export default function Profile({data}) {
    if (data === "error") {
        return (
            <div className="text-red-500">Error loading profile</div>
        )
    }
    
    if (data) {
        return (
            <Dropdown>
                <DropdownTrigger className="text-white">
                    <Button variant="bordered" className="flex justify-start gap-4 p-4 rounded-sm py-6 w-full">
                        <FaUserCircle className="text-lg" />
                        <div className="flex flex-col items-start justify-center">
                            <span className="text-white">{data.name}</span>
                            <span className="text-xs ">{data.role}</span>
                        </div>
                        <FaCaretUp className="ml-auto" />

                    </Button>
                </DropdownTrigger>
                <ProfileMenu />
            </Dropdown>
        )
    }
}

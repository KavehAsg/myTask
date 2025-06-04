// components
import ProfileMenu from "@/components/sidebar/ProfileMenu";

import { Dropdown, DropdownTrigger } from "@heroui/dropdown";
import { Button } from "@heroui/button";

// services - api
import { getProfile } from "@/services/getProfile"

// icons
import { FaCaretUp, FaUserCircle } from "react-icons/fa";


export default async function Profile() {

    const data = await getProfile();
    if (data === "error") {
        return (
            <div className="text-red-500">Error loading profile</div>
        )
    }
    if (!data) {
        return (
            <div className="text-yellow-500">No profile data available</div>
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

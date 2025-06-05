'use client'

import {
    Drawer,
    DrawerContent,
    DrawerBody,
    Button,
    DrawerHeader,
    useDisclosure,
} from "@heroui/react";
import { useLocale } from "next-intl";

import { CgMenu } from "react-icons/cg";
import Sidebar from "./Sidebar";

export default function SideDrawer({ menuData , profileData }) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const locale = useLocale();

    return (
        <div className="block xl:hidden">
            <Button isIconOnly onPress={onOpen} className="">
                <CgMenu />
            </Button>
            <Drawer placement={`${locale == "en" || locale == "de" ? "left" : "right"}`} isOpen={isOpen} size={"xs"} onClose={onClose} className="bg-gray-800">
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerBody>
                                <Sidebar menuData={menuData} profileData={profileData} onClose={onClose}/>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    )
}

"use client"
// components
import { Chip, Listbox, ListboxItem } from "@heroui/react";

// routing
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import * as Fa6Icons from "react-icons/fa6";

export default function MenuList({ data, onClose }) {

    const t = useTranslations('sideBar');

    const clickHandler = () => {
        if(!onClose) return;
        onClose()
    }

    if (data === "error") {
        return <div>Error loading menu data</div>;
    }

    if (data) {
        return (
            <Listbox aria-label="Listbox menu with icons" variant="faded" className="menuContainerScrollStyle w-full overflow-y-auto h-full">
                {data.map((item) => {
                    const IconComponent = Fa6Icons[item.icon];
                    return (
                        <ListboxItem className="w-full my-2 lg:my-0.5" key={item.id} textValue="item"
                            startContent={<IconComponent className="text-lg group" />}
                            endContent={item.notification ? <Chip size="sm" variant="dot" className="text-xs text-white group-hover:text-gray-900 mx-0.5">{item.notification}</Chip> : null}
                        >
                            <Link className="inline-block w-full" href={item.link} >
                                <span className="w-full h-full" onClick={clickHandler}>
                                    {t(item.label)}
                                </span>
                            </Link>
                        </ListboxItem>
                    )
                })}

            </Listbox>
        )

    }
}

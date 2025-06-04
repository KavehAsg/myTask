'use client';
import { useTransition } from "react";

// internationalization
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

// components
import { Select, SelectItem } from "@heroui/react";

// icons
import { MdOutlineGTranslate } from "react-icons/md";


const languages = [
    { key: "en", label: "English" },
    { key: "fa", label: "Persian" },
    { key: "de", label: "German" },
];

export default function LanguageSwitcher() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();

    function onSelectChange(event) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }


    return (
        <Select
            aria-label="Language Switcher"
            className="w-[5.5rem]"
            size="sm"
            defaultSelectedKeys={[locale]}
            startContent={<MdOutlineGTranslate className="navbarIcon shrink-0" />
            }
            disabled={isPending}
            onChange={onSelectChange}
        >
            {languages.map((language) => (
                <SelectItem key={language.key} className="shrink-0 m-2 !w-14" >{language.key}</SelectItem>
            ))}
        </Select>
    );
}

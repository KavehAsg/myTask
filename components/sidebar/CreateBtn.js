'use client'

// components
import { Button } from '@heroui/button';

// internationalization
import { useTranslations } from 'next-intl';

// icons
import { FaPlus } from "react-icons/fa6";


export default function CreateBtn() {
    const t =  useTranslations('sideBar');

    return (
        <Button type='button' className='w-full my-3 rounded-sm justify-start font-semibold text-base py-4'>
            <FaPlus className='mt-0.5' />
            <span>{t("create")}</span>
        </Button>
    )
}

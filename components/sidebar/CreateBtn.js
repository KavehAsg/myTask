// components
import { Button } from '@heroui/button';

// internationalization
import { getTranslations } from 'next-intl/server'

// icons
import { FaPlus } from "react-icons/fa6";


export default async function CreateBtn() {
    const t = await getTranslations('sideBar');
    return (
        <Button type='button' className='w-full my-3 rounded-sm justify-start font-semibold text-base py-4'>
            <FaPlus className='mt-0.5' />
            <span>{t("create")}</span>
        </Button>
    )
}

// components
import { Button } from '@heroui/button'
import { getTranslations } from 'next-intl/server';

//icons
import { FiUpload } from "react-icons/fi";


export default async function OrdersListHeader () {
    const t = await getTranslations("OrdersList");

    return (
        <div className='flex w-full justify-between mt-4'>
            <h2 className='text-2xl font-semibold'>{t("title")}</h2>

            <Button className='bg-white border rounded-sm border-black ml-auto mr-4' startContent={<FiUpload />
            }>{t("export")}</Button>
            <Button className='bg-gray-900 rounded-sm text-white'>{t("create")}</Button>
        </div>
    )
}

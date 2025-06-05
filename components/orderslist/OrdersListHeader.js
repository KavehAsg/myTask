// components
import { Button } from '@heroui/button'
import { getTranslations } from 'next-intl/server';

//icons
import { FiUpload } from "react-icons/fi";


export default async function OrdersListHeader() {
    const t = await getTranslations("OrdersList");

    return (
        <div className='flex flex-col sm:flex-row sm:items-center w-full justify-between mt-4'>
            <h2 className='text-xl lg:text-2xl font-semibold'>{t("title")}</h2>

            <div className='flex justify-between sm:justify-end sm:gap-4 w-full mt-2 '>
                <Button className='bg-white border rounded-sm border-black text-sm lg:text-base ' startContent={<FiUpload />
                }>{t("export")}</Button>
                <Button className='bg-gray-900 rounded-sm text-white text-sm lg:text-base'>{t("create")}</Button>
            </div>
        </div>
    )
}

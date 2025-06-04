// components
import OrderNavTools from '@/components/common/OrdersNavTools'
import OrderFeaturesCounter from '@/components/orderslist/OrderFeaturesCounter'
import OrdersListHeader from '@/components/orderslist/OrdersListHeader'
import OrdersTable from '@/components/orderslist/OrdersTable'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'use-intl'

// icons
import { BsSlashLg } from 'react-icons/bs'
import { FaCartShopping } from 'react-icons/fa6'
import { getTranslations } from 'next-intl/server'

export default async function page() {

  const t = await getTranslations("OrdersList");

  return (
    <div className='p-6'>
      <nav className='flex justify-between w-full'>
        <div className='flex gap- items-center text-gray-500 text-sm'>
          <FaCartShopping className='mt0.5' />
          <BsSlashLg className='mt-0.5' />
          <Link href={"/"}>{t("title")}</Link>
        </div>

        <OrderNavTools />
      </nav>

      <OrdersListHeader />

      <OrderFeaturesCounter />

      <OrdersTable />

    </div>
  )
}

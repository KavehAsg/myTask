'use client'
import { memo, useEffect, useState } from 'react'

// services - api
import getOrders2 from '@/services/getOrders2'

// components
import { Spinner } from '@heroui/react'
import { useTranslations } from 'next-intl'


function OrderFeaturesCounter() {

    const [error, setError] = useState(false)
    const t = useTranslations("OrdersList");

    const [isLoading, setIsLoading] = useState(true)
    const [ordersStateCounter, setOrdersStateCounter] = useState({
        pending: 0,
        processing: 0,
        shipped: 0,
        delivered: 0,
    })

    useEffect(() => {
        getOrders2().then((data) => {
            if (data == "error") {
                setError(true);
                return
            }
            setIsLoading(false)
            const counter = {
                pending: 0,
                processing: 0,
                shipped: 0,
                delivered: 0,
            };
            data.forEach(item => {
                if (counter.hasOwnProperty(item.status)) {
                    counter[item.status] += 1;
                }
            });
            setOrdersStateCounter(counter);
        });
    }, []);

    if (error) {
        return (
            <div className="text-red-500">Error loading status</div>
        )
    }

    if (isLoading) {
        return <Spinner color="default" labelColor="foreground" />
    }

    if (!isLoading) {
        return (
            <ul className='flex gap-4 justify-between mt-5 overflow-x-auto w-full max-w-full'>
                {Object.keys(ordersStateCounter).map((state) => {
                    return <li key={state} className='border border-black w-full p-2 md:py-6 md:pl-8 rtl:pr-8 flex justify-start items-center gap-4 min-w-48'>
                        <div className='square w-6 h-6 bg-slate-300'></div>

                        <div className='flex flex-col'>
                            <span className='text-2xl font-semibold'>{ordersStateCounter[state]}</span>
                            <span className='text-sm text-gray-500'>{t(state)}</span>
                        </div>
                    </li>
                })}
            </ul>
        )
    }
}

export default memo(OrderFeaturesCounter);
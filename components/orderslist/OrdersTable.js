// services
import getOrders from "@/services/getOrders";

// components
import { Tooltip } from "@heroui/tooltip";
import { getTranslations } from "next-intl/server";

// icons
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default async function OrdersTable() {

    const t = await getTranslations("OrdersList");

    const data = await getOrders();

    if (data) {
        return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-sm text-gray-500 bg-gray-50 font-light">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                                    <label htmlFor="checkbox-all-search" className="text-xs ml-2 rtl:mr-2">{t("orderId")}</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {t("date")}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {t("customer")}
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                            <th scope="col" className="px-6 py-3">
                                {t("price")}
                            </th>

                            <th scope="col" className="px-6 py-3">
                                {t("status")}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {t("action")}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((order) => <tr key={order.orderId} className="bg-white border-b  border-gray-200 hover:bg-gray-50">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2 " />
                                    <label htmlFor="checkbox-table-search-1" className="text-xs ml-2 rtl:mr-2">#{order.orderId}</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {order.order_date}
                            </th>
                            <td className="px-6 py-4">
                                {order.customer_name}
                            </td>
                            <td
                                className="px-6 py-4"
                            ></td>
                            <td className="px-6 py-4">
                                ${order.price}
                            </td>
                            <td className="px-6 py-4">
                                {order.status}
                            </td>
                            <td className="px-6 py-4">
                                <div className="relative flex items-center gap-2">
                                    <Tooltip content="Details">
                                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                            <FaRegEye />
                                        </span>
                                    </Tooltip>
                                    <Tooltip color="danger" content="Delete user">
                                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                            <MdDelete />
                                        </span>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        )
    }
}


import { getMenuListData } from '@/services/getMenuData'
import { getProfile } from '@/services/getProfile'
import React from 'react'
import Sidebar from './Sidebar';
import SideDrawer from './SideDrawer';

export default async function SideContainer() {

    const [menuData, profileData] = await Promise.all([
        getMenuListData(),
        getProfile(),
    ]);

    return (
        <aside className="xl:w-2/12 xl:h-full">
            <div className="w-full h-full hidden xl:block">
                <Sidebar menuData={menuData} profileData={profileData} />
            </div>

            <SideDrawer menuData={menuData} profileData={profileData} />
        </aside>
    )

}

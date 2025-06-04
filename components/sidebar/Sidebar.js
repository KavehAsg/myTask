// components
import Image from 'next/image';

import CreateBtn from '@/components/sidebar/CreateBtn';
import MenuList from '@/components/sidebar/MenuList';

// services - api
import { getMenuListData } from '@/services/getMenuData';

// routing
import { Link } from '@/i18n/navigation';

// logo
import Logo from "@/public/logo.webp";
import Profile from './Profile';

export default async function Sidebar() {

  const data = await getMenuListData();


  return (
    <div className='bg-gray-800 h-full text-white flex flex-col items-center p-4'>
      <Link href={"/"} >
        <Image alt='logo' src={Logo} className='w-24' />
      </Link>

      <CreateBtn />

      <MenuList data={data} />

      <Profile />
    </div>
  )
} 

'use client'

// components
import Image from 'next/image';

import CreateBtn from '@/components/sidebar/CreateBtn';
import MenuList from '@/components/sidebar/MenuList';

// routing
import { Link } from '@/i18n/navigation';

// logo
import Logo from "@/public/logo.webp";
import Profile from './Profile';

export default function Sidebar({menuData , profileData , onClose}) {

  return (
    <div className='bg-gray-800 w-full h-full text-white flex flex-col items-center p-4'>
      <Link href={"/"} >
        <Image alt='logo' src={Logo} className='w-24' />
      </Link>

      <CreateBtn />

      <MenuList data={menuData} onClose={onClose}/>

      <Profile data={profileData} />
    </div>
  )
} 

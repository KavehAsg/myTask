'use client';
import { useState } from 'react';

// components
import SearchInput from './SearchInput'
import LanguageSwitcher from './LanguageSwitcher';

import { Button } from '@heroui/react';

// icons
import { BsEnvelopeExclamation } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";



export default function OrderNavTools() {
  const [searchValue, setSearchValue] = useState('');



  return (
    <div className='flex items-center gap-3'>
      <SearchInput state={{ searchValue, setSearchValue }} />

      <Button size="sm" isIconOnly aria-label="search" className="navbarBtn" >
        <BsEnvelopeExclamation className="navbarIcon" />
      </Button>

      <Button size="sm" isIconOnly aria-label="search" className="navbarBtn" >
        <LuBellRing className='navbarIcon' />
      </Button>

      <LanguageSwitcher />
    </div>
  )
}

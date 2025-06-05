'use client'

import { Spinner } from '@heroui/react'
import React from 'react'

export default function loading() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
     <Spinner color="default" label="Loading" labelColor="foreground" />
    </div>
  )
}

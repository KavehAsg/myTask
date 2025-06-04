'use client'

import { Spinner } from '@heroui/react'
import React from 'react'

export default function loading() {
  return (
     <Spinner color="default" label="Loading" labelColor="foreground" />
  )
}

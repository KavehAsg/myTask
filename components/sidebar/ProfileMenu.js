'use client'

import { DropdownItem, DropdownMenu } from '@heroui/react'
import React from 'react'

export default function ProfileMenu() {
    return (
        <DropdownMenu >
            <DropdownItem textValue="profile">profile</DropdownItem>
            <DropdownItem key="copy">exit account</DropdownItem>
        </DropdownMenu>
    )
}

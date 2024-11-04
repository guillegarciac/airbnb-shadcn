import React from 'react'
import { Input } from "@/components/ui/input";

function NavSearch() {
  return (
    <Input type="text" placeholder="Find your next spot..." className='max-w-screen-md dark:bg-muted' />
  )
}

export default NavSearch
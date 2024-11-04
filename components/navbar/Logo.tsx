import React from 'react'
import { TbBrandAirbnb } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <TbBrandAirbnb className='w-6 h-6' />
      </Link>
    </Button>
  )
}

export default Logo;
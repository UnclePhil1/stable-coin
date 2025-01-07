"use client"
import Nav from '@/components/nav'
import ViewStablecoins from '@/components/ViewStableCoins'
import React from 'react'

function page() {
  return (
      <div className="bg-primary">
    <Nav />
    <ViewStablecoins />
  </div>
  )
}

export default page
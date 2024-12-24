'use client'
import React from 'react'
import { ContextProvider } from '@/context/ContextProvider'

function SolanaContext({children}: {children: React.ReactNode}) {
  return (
    <ContextProvider> {children} </ContextProvider>
  )
}

export default SolanaContext
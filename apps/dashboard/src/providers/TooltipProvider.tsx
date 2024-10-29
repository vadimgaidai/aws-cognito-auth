'use client'

import * as React from 'react'
import { TooltipProvider as TooltipProviderUi } from '@repo/ui'

interface ITooltipProviderProps {
  children: React.ReactNode
}

export const TooltipProvider = ({ children, ...props }: ITooltipProviderProps) => (
  <TooltipProviderUi {...props}>{children}</TooltipProviderUi>
)

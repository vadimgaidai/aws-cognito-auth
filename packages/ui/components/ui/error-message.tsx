'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { cn } from '@/utils'

interface IErrorMessage {
  message: string
  className?: string
}
export const ErrorMessage: FC<IErrorMessage> = ({ message, className }) => (
  <motion.p
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className={cn('text-sm text-red-500', className)}
  >
    {message}
  </motion.p>
)

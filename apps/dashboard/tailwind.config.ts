// tailwind config is required for editor support

import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'

const config: Pick<Config, 'content' | 'presets'> = {
  ...sharedConfig,
  content: [
    './pages/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/components/**/*.{ts,tsx}',
  ],
}

export default config

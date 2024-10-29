import type { Config } from 'tailwindcss'
// eslint-disable-next-line import/no-extraneous-dependencies
import sharedConfig from '@repo/tailwind-config'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  ...sharedConfig,
  content: ['./**/*.{ts,tsx}'],
}

export default config

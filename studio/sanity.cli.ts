/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */

import {defineCliConfig} from 'sanity/cli'

// const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '6iefog8i'
// const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const projectId = '6iefog8i'
const dataset = 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: 'studio-abed',
  // studioHost: process.env.SANITY_STUDIO_STUDIO_HOST || 'studio-abed', // Visit https://www.sanity.io/docs/environment-variables to learn more about using environment variables for local & production.
  autoUpdates: true,
})

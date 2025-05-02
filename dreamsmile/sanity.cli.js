import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '64jk2ach',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})

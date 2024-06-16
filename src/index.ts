import { handlePathnameChanges } from './utils/handle-pathname-changes'
import { defaultConfig } from './constants'
import { URLService } from '@oleksii-pavlov/url'

export { Config } from './types/config'
export * from './types/route'

export function createRouter(config = defaultConfig) {
  const urlServiceWithoutReloading = new URLService({})

  // subscribe on updates
  urlServiceWithoutReloading.onPathnameChange((pathname) => {
    handlePathnameChanges(config, pathname)
  })
    
  // initial render
  handlePathnameChanges(config, urlServiceWithoutReloading.getPathname())
}

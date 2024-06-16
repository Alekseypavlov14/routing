import { NOT_FOUND_PAGE } from '../constants'
import { Config } from '../types/config'

export function handlePathnameChanges(config: Config, pathname: string) {
  const activeRoute = config.routes.find(route => route.path === pathname)
  const notFoundRoute = config.routes.find(route => route.path === NOT_FOUND_PAGE)

  if (activeRoute) return activeRoute.callback()
  else if (notFoundRoute) return notFoundRoute.callback()
}

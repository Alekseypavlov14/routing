export interface Route {
  path: string
  callback: RouteCallback
}

export type RouteCallback = () => void

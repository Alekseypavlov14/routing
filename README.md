# @oleksii-pavlov/routing

A lightweight URL router for vanilla JavaScript and TypeScript applications.

## Installation

To install the package, run:

```bash
npm install @oleksii-pavlov/routing
```

## Usage

### Basic Example

This example demonstrates how to set up a basic router in a vanilla JavaScript application.

```javascript
import { createRouter } from '@oleksii-pavlov/routing'

createRouter({
  routes: [
    { path: '/', callback: () => console.log('Home Page') },
    { path: '/about', callback: () => console.log('About Page') },
    { path: '*', callback: () => console.log('Page Not Found') } // Not-found route
  ]
})
```

Surely, instead of console.log, you should provide function that prepares your page.

### Handling Pathname Changes

The `createRouter` function initializes the router and subscribes to pathname changes. It automatically handles the initial render based on the current URL.

### Not-Found Route

To handle undefined routes, you can specify a route with the path `'*'`. This callback will be executed when the URL does not match any defined route.

### API Interfaces

#### Config Interface

The `Config` interface defines the shape of the configuration object passed to `createRouter`.

```typescript
export interface Config {
  routes: Route[];
}
```

- `routes`: An array of `Route` objects defining the paths and their corresponding callbacks.

#### Route Interface

The `Route` interface defines each route object.

```typescript
export interface Route {
  path: string;
  callback: RouteCallback;
}
```

- `path`: A string representing the URL path.
- `callback`: A function to be executed when the URL path matches the specified route.

#### RouteCallback Type

The `RouteCallback` type defines the callback function signature.

```typescript
export type RouteCallback = () => void;
```

## Recommendations

To make your coding experience better, I recommend you to use ```@oleksii-pavlov/templates``` and ```@oleksii-pavlov/url``` packages. They contain helpful utils to work with html templates and URL. They are also made by me :)

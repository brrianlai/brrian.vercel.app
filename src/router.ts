import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { RootComponent } from './app/__root'
import { IndexComponent } from './app/index'

const rootRoute = createRootRoute({
	component: RootComponent,
	notFoundComponent: () => null,
})

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: IndexComponent,
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({ routeTree })

import { Outlet } from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'

import '../styles/main.css'

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

export function RootComponent() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Analytics />
		</>
	)
}

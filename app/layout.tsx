import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { Inter } from "next/font/google"

import '../scss/main.scss'

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Brian Lai',
	description: 'Bsc Biology from UBC'
}

export default function RootLayout({
	children,
	}: {
	children: React.ReactNode
	}) {
		return (
			<html lang="en" className={inter.className}>
				<body>
					<Header />
					{children}
					<Footer />
					<Analytics mode="production" />
				</body>
			</html>
		)
  }
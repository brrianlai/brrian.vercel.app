import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { Inter } from "next/font/google"

import '../scss/main.scss'

import dynamic from 'next/dynamic'

import Header from '../components/layouts/Header'

const Footer = dynamic(() => import('../components/layouts/Footer'))

const inter = Inter({ subsets: ['latin'], display: 'swap' })

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
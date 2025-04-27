import '../styles/styles.scss'

import Head from 'next/head'
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
	return (
		<div className={inter.className}>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='author' content='Brian Lai' />
				<meta name='description' content='Biology undergraduate student from UBC with an interest in web and app design' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
			</Head>
			<Component {...pageProps } />
			<Analytics />
		</div>
	)
}
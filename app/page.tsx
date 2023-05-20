import '/styles/main.css'

import Header from '../components/Header'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Header />
			<main className={inter.className}>
				<p>Kristie is a lapsap</p>
			</main>
		</>
	)
}

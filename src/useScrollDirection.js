import { useState, useEffect, useRef } from 'react'

export default function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState(null)
	const lastDirection = useRef(null)

	useEffect(() => {
		let lastScrollY = window.pageYOffset

		const update = () => {
			const scrollY = window.pageYOffset
			const direction = scrollY > lastScrollY ? 'down' : 'up'

			if (direction !== lastDirection.current && Math.abs(scrollY - lastScrollY) > 10) {
				lastDirection.current = direction
				setScrollDirection(direction)
			}

			lastScrollY = scrollY > 0 ? scrollY : 0
		}

		window.addEventListener('scroll', update)
		return () => window.removeEventListener('scroll', update)
	}, [])

	return scrollDirection
}

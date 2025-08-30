'use client'

import { useEffect } from 'react'
import { RiArrowUpLine } from 'react-icons/ri'
import smoothscroll from 'smoothscroll-polyfill'

const toTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

const ScrollToTop = () => {
	useEffect(() =>
		smoothscroll.polyfill()
	)
	
	return (
		<div className='icon icon-scrolltotop' onClick={toTop}>
			<RiArrowUpLine />
		</div>
	)
}

export default ScrollToTop

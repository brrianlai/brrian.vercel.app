
import { RiArrowUpLine } from 'react-icons/ri'

const toTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

const ScrollToTop = () => {
	return (
		<div className='icon icon-scrolltotop' onClick={toTop}>
			<RiArrowUpLine />
		</div>
	)
}

export default ScrollToTop

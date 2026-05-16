import { cubicBezier } from 'framer-motion'

export const fadeUpItem = {
	hidden: {
		opacity: 0,
		y: 10
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: cubicBezier(0.465, 0.183, 0.153, 0.946)
		}
	}
}

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
	hidden: {},
	show: {
		transition: { staggerChildren, delayChildren }
	}
})

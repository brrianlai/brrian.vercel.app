'use client'

import { motion } from 'framer-motion'

const container = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: [0.465, 0.183, 0.153, 0.946]
		}
	}
}

const FadeIn = ({ children }) => {
	return (
		<div>
			{children.map((child, index) => (
				<motion.div
					initial='hidden'
					key={index}
					variants={container}
					viewport={{ once: true }}
					whileInView='show'
				>
					{child}
				</motion.div>
			))}
		</div>
	)
}

export default FadeIn
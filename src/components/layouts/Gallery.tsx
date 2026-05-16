import { motion, cubicBezier } from 'framer-motion'

import img3461 from '../../gallery/IMG_3461.jpeg'
import img6432 from '../../gallery/IMG_6432.jpg'
import img3060 from '../../gallery/IMG_3060.jpg'
import img2675 from '../../gallery/IMG_2675.jpeg'
import img0539 from '../../gallery/IMG_0539.jpeg'
import img2455 from '../../gallery/IMG_2455.jpeg'
import img2472 from '../../gallery/IMG_2472.jpeg'
import img3994 from '../../gallery/IMG_3994.jpeg'

const columns = [
	[img3461, img6432, img3060, img2675],
	[img0539, img2455, img2472, img3994],
]

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: cubicBezier(0.465, 0.183, 0.153, 0.946)
		}
	}
}

export default function Gallery() {
	return (
		<section className='gallery'>
			{columns.map((col, colIndex) => (
				<div className='column' key={colIndex}>
					{col.map((image, index) => (
						<motion.div
							className='gallery-photo'
							key={index}
							variants={container}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
						>
							<img src={image} alt='Gallery photo' />
						</motion.div>
					))}
				</div>
			))}
		</section>
	)
}

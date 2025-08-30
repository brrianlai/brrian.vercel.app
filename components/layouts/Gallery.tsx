'use client'

import Image from 'next/image'
import { motion, cubicBezier } from 'framer-motion'

import img3461 from '../../src/gallery/IMG_3461.jpeg'
import img6432 from '../../src/gallery/IMG_6432.jpg'
import img3060 from '../../src/gallery/IMG_3060.jpg'
import img2675 from '../../src/gallery/IMG_2675.jpeg'
import img0539 from '../../src/gallery/IMG_0539.jpeg'
import img2455 from '../../src/gallery/IMG_2455.jpeg'
import img2472 from '../../src/gallery/IMG_2472.jpeg'
import img3994 from '../../src/gallery/IMG_3994.jpeg'

const galleryColumn1 = [img3461, img6432, img3060, img2675]

const galleryColumn2 = [img0539, img2455, img2472, img3994]

const container = {
	hidden: {
		opacity: 0,
	},
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
		<section className="gallery">
			<div className="column">
				{galleryColumn1.map((image, index) => (
					<motion.div
						className='gallery-photo'
						key={index}
						variants={container}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						<Image src={image} sizes='50vw' quality='90' alt='' />
					</motion.div>
				))}
			</div>
			<div className="column">
				{galleryColumn2.map((image, index) => (
					<motion.div
						className='gallery-photo'
						key={index}
						variants={container}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						<Image src={image} sizes='50vw' quality='90' alt='' />
					</motion.div>
				))}
			</div>
		</section>
	)
}
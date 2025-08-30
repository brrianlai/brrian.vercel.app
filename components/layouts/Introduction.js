'use client'

import Image from 'next/image'
import Button from '../Button'
import { motion } from 'framer-motion'
import Social from '../Social'
import profilePhoto from '../../src/profile.png'

import { RiMailLine } from 'react-icons/ri'

const Introduction = () => {
	return (
		<section className='introduction background-waves' data-align='center'>
			<motion.div
				className='column'
				initial='hidden'
				animate='show'
				variants={container}
			>
				<h3>BSc Biology from UBC</h3>

				<motion.div className='row' variants={item} data-gap='small'>
					<Button link='mailto:laibrian@student.ubc.ca' shape='round' size='large' background='light' outline='true'>
						<div className='icon'>
							<RiMailLine />
						</div>
						laibrian@student.ubc.ca
					</Button>
				</motion.div>

				<motion.div variants={item}>
					<Social />
				</motion.div>
			</motion.div>

			<div className='column'>
				<div className='profile'>
					<Image src={profilePhoto} sizes='(max-width: 960px) 180px, 280px' priority quality='90' alt='Profile photo'/>
				</div>
			</div>
		</section>
	)
}

const container = {
	hidden: {},
	show: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.1,
		}
	}
}

const item = {
	hidden: {
		opacity: 0,
		y: 10
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: [0.465, 0.183, 0.153, 0.946]
		},
		y: 0
	}
}

export default Introduction

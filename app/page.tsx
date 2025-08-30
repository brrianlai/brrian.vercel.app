'use client'

import { motion, cubicBezier } from 'framer-motion'
import dynamic from 'next/dynamic'

import Background from '../components/layouts/Background'
import Introduction from '../components/layouts/Introduction'
import FadeIn from '../components/FadeIn'

// Dynamically imported heavy components
const Contact = dynamic(() => import('../components/layouts/Contact'))
const Education = dynamic(() => import('../components/layouts/Education'))
const Projects = dynamic(() => import('../components/layouts/Projects'))
const WorkExperience = dynamic(() => import('../components/layouts/WorkExperience'))
const VolunteerExperience = dynamic(() => import('../components/layouts/VolunteerExperience'))
const Gallery = dynamic(() => import('../components/layouts/Gallery'))

// Framer Motion container variant
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
			ease: cubicBezier(0.465, 0.183, 0.153, 0.946),
		}
	}
}

export default function Page() {
	return (
		<div>
			<motion.div animate='show' initial='hidden' viewport={{ once: true }} variants={container}>
				<Introduction />
				<Background />
			</motion.div>

			<FadeIn>
				<Education />
				<Projects />
				<WorkExperience />
				<VolunteerExperience />
				<Contact />
				<Gallery />
			</FadeIn>
		</div>
	)
}
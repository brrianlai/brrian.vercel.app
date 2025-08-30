'use client'

import Card from '../Card'
import { motion, cubicBezier } from 'framer-motion'

import apollo from '../../src/projects/apollo.png'
import instagram from '../../src/projects/instagram.png'
import vsco from '../../src/projects/vsco.png'

const projects = [
	{
		name: 'Apollo app redesign',
		tags: ['Figma', 'iOS'],
		preview: apollo,
	},
	{
		name: 'Instagram app redesign',
		tags: ['Figma', 'iOS'],
		preview: instagram,
		link: 'https://www.figma.com/file/2hqVyvyJ8fHN0GHyGtSmBl/Instagram?node-id=0%3A1'
	},
	{
		name: 'VSCO app redesign',
		tags: ['Figma', 'iOS'],
		preview: vsco,
		link: 'https://www.figma.com/file/Vv281R8FFQ59r8wXaEzbOh/VSCO?node-id=0%3A1'
	}
]

const item = {
	hidden: {
		opacity: 0,
		y: 10
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: cubicBezier(0.465, 0.183, 0.153, 0.946)
		}
	}
}

const Projects = () => {
	return (
		<section>
			<h4>Projects</h4>
			
			<div className='grid' data-columns='3'>
				{projects.map((project) => (
					<motion.div
						initial='hidden'
						key={project.name}
						variants={item}
						viewport={{ once: true }}
						whileInView='show'
					>
						<Card
							title={project.name}
							tags={project.tags}
							image={project.preview}
							sizes='(max-width: 960px) 100vw, 33vw'
							{...(project.link && { link: project.link })}
						/>
					</motion.div>
				))}
			</div>
		</section>
	)
}

export default Projects

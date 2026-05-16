
import Card from '../Card'
import { motion } from 'framer-motion'
import { fadeUpItem } from '../motion'

import apollo from '../../projects/apollo.png'
import instagram from '../../projects/instagram.png'
import vsco from '../../projects/vsco.png'

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

const Projects = () => {
	return (
		<section>
			<h4>Projects</h4>
			
			<div className='grid columns-3'>
				{projects.map((project) => (
					<motion.div
						initial='hidden'
						key={project.name}
						variants={fadeUpItem}
						viewport={{ once: true }}
						whileInView='show'
					>
						<Card
							title={project.name}
							tags={project.tags}
							image={project.preview}
							{...(project.link && { link: project.link })}
						/>
					</motion.div>
				))}
			</div>
		</section>
	)
}

export default Projects

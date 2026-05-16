import { lazy, Suspense } from 'react'

import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'

const Contact = lazy(() => import('../components/layouts/Contact'))
const Education = lazy(() => import('../components/layouts/Education'))
const Projects = lazy(() => import('../components/layouts/Projects'))
const WorkExperience = lazy(() => import('../components/layouts/WorkExperience'))
const VolunteerExperience = lazy(() => import('../components/layouts/VolunteerExperience'))
const Gallery = lazy(() => import('../components/layouts/Gallery'))

export function IndexComponent() {
	return (
		<div>
			<Introduction />
			<Background />
			<Suspense>
				<Education />
				<Projects />
				<WorkExperience />
				<VolunteerExperience />
				<Contact />
				<Gallery />
			</Suspense>
		</div>
	)
}

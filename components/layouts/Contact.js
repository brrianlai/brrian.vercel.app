import Button from '../Button'
import { RiMailLine } from 'react-icons/ri'

const Contact = () => {
	return (
		<section className='background-dotted center large'>
			<h2>Contact</h2>
			<Button link='mailto:laibrian@student.ubc.ca' shape='round' size='large' background='dark'>
				<div className='icon'>
					<RiMailLine />
				</div>
				laibrian@student.ubc.ca
			</Button>
		</section>
	)
}

export default Contact
import Image from 'next/image'
import backgroundPhoto from '../../src/background.jpg'

const Background = () => {
	return (
		<div className='background'>
			<Image src={backgroundPhoto} fill sizes='100vw' quality='90' priority fetchPriority='high' alt='' />
		</div>
	)
}

export default Background
import Image from 'next/image'
import Tag from './Tag'

import { RiLink } from 'react-icons/ri'

const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children

const Card = ({ image, title, tags, sizes, link }) => {
	return (
		<div className='card'>
			<ConditionalWrapper
				condition={link}
				wrapper={children => <a href={link} alt={title} target='_blank' aria-label={title}>{children}</a>}
			>
				<Image
					src={image}
					alt={title}
					sizes={sizes}
					quality='90'
				/>
				<div className='card-content'>
					<h5>{title}</h5>
					{tags &&
						<div className='row gap-smaller'>
							{tags.map((tag, index) => (
								<Tag key={index}>{tag}</Tag>
							))}
							{link &&
								<div className='icon icon-card-link'>
									<RiLink />
								</div>
							}
						</div>
					}
				</div>
			</ConditionalWrapper>
		</div>
	)
}

export default Card
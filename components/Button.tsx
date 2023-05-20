import Icon from './Icon'

const backgrounds = [
	'dark',
	'light',
	'black',
	'white',
	'clay',
	'yellow',
	'mint',
	'purple',
	'tan',
	'brown',
	'red',
	'green',
	'blue',
	'purple',
	'clear'
]

const shapes = ['square', 'rounded', 'round']

const sizes = ['small', 'large']

const outlines = ['false', 'true']

const Button = ({ children, link, background, shape, size, outline, iconLeft, iconRight }) => {
	const checkBackground = backgrounds.includes(background) ? background : backgrounds[0]
	const checkShape = shapes.includes(shape) ? shape : shapes[0]
	const checkSize = sizes.includes(size) ? size : sizes[0]
	const checkOutline = outlines.includes(outline) ? outline : outlines[0]

	return (
		<a
			href={link}
			className='button'
			data-background={checkBackground}
			data-shape={checkShape}
			data-size={checkSize}
			data-outline={checkOutline}
		>
			{iconLeft && <Icon name={iconLeft} />}

			{children}

			{iconRight && <Icon name={iconRight} />}
		</a>
	);
}

export default Button

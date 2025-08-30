const backgrounds = ['dark','light','black','white','clay','yellow','mint','purple','tan','brown','red','green','blue','clear']
const shapes = ['square','rounded','round']
const sizes = ['small','large']

const checkValue = (value, allowed, defaultValue) =>
	allowed.includes(value) ? value : defaultValue

const Button = ({
	children,
	link = '#',
	background = 'dark',
	shape = 'square',
	size = 'small',
	outline = false,
	iconLeft,
	iconRight
}) => {
	const checkBackground = checkValue(background, backgrounds, 'dark')
	const checkShape = checkValue(shape, shapes, 'square')
	const checkSize = checkValue(size, sizes, 'small')
	const checkOutline = outline ? 'true' : 'false'

	return (
		<a
			href={link}
			className='button'
			data-background={checkBackground}
			data-shape={checkShape}
			data-size={checkSize}
			data-outline={checkOutline}
		>
			{iconLeft && <span className="icon-left">{iconLeft}</span>}
			{children}
			{iconRight && <span className="icon-right">{iconRight}</span>}
		</a>
  )
}

export default Button
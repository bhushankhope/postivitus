import './Button.scss'

const Button = ({label}) => {
  return (
    <button className='button-dark'>
      {label}
    </button>
  )
}

export default Button
import './class.scss'

type Props = {
  name: string;
  description?: string;
  image: string;
}

const Class = ({name, description, image}: Props) => {
  return (
    <li className='classlist__container'>
      <div className='overlayStyles'>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class
import './index.css'

const ImageItem = props => {
  const {itemDetails} = props
  const {imageUrl} = itemDetails
  return (
    <li>
      <img src={imageUrl} alt="match" className="each-item" />
    </li>
  )
}

export default ImageItem

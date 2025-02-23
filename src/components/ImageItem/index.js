import './index.css'

const ImageItem = props => {
  const {itemDetails, onCheckingImageSelection} = props
  const {imageUrl, id} = itemDetails

  const onClickImageItem = () => {
    onCheckingImageSelection(id)
  }

  return (
    <li>
      <img
        src={imageUrl}
        alt="match"
        className="each-item"
        onClick={onClickImageItem}
      />
    </li>
  )
}

export default ImageItem

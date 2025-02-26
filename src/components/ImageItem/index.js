import './index.css'

const ImageItem = props => {
  const {itemDetails, onCheckingImageSelection} = props
  const {imageUrl, id} = itemDetails

  // console.log(itemDetails)

  const onClickImageItem = () => {
    onCheckingImageSelection(id)
  }

  return (
    <li>
      <img
        src={imageUrl}
        alt="thumbnail"
        className="each-item"
        onClick={onClickImageItem}
      />
    </li>
  )
}

export default ImageItem

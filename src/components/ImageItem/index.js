import './index.css'

const ImageItem = props => {
  const {itemDetails, onCheckingImageSelection} = props
  const {thumbnailUrl, id} = itemDetails

  // console.log(itemDetails)

  const onClickImageItem = () => {
    onCheckingImageSelection(id)
  }

  return (
    <li>
      <buttton onClick={onClickImageItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="each-item" />
      </buttton>
    </li>
  )
}

export default ImageItem

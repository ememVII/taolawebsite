import styles from './Home.module.css'
import { useState } from 'react'
import { headerCover } from '../../utils/headerCover'
import Social from '../UI/Social/Social'

function Hero() {

  const [coverImage, setCoverImage] = useState('home/homePageCover.jpg')
  const [selectedImages, setSelectedImages] = useState(headerCover)
  
  const handleChangeCover = (img) => {
    setSelectedImages((prevImages) => {
      if(!prevImages.includes(coverImage)) {
        const filteredImages = prevImages.filter((e) => e !== img)
        return [...filteredImages, coverImage]
      }
      return prevImages
    })
    
    setCoverImage(img)
  }
  
  return (
    <section className="d-flex justify-content-center align-items-end">
      {/* <div className={`${styles.links}`}>
        <Social column dark iconSize={'fs-3'}/>
      </div> */}
      <div className={`${styles.heroImg} position-relative`}>
        <img src={`${coverImage}`} alt="interior design header" />
      </div>

      <div className={`${styles.swiperImgs} position-absolute`}>
        {selectedImages.map(img => (
        <img src={`${img}`} key={img} onClick={() => handleChangeCover(img)} />
      ))}
      </div>
    </section>
  )
}

export default Hero

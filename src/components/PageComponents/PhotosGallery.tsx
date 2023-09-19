import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import styles from '../PageContent/Page.module.scss'
import { FancyboxGallery } from '../FancyboxGallery'
import { Accordion } from '../ui/Accordion/Accordion'

interface IPhotosGalleryProps {
  component: any
}

const PhotosGallery: React.FC<IPhotosGalleryProps> = ({ component }) => {
  const componentBody = component.description
    .replaceAll('/uploads', `${process.env.API_URL}/uploads`)
    .replaceAll('<table>', `<div style="overflow-x: auto;"><table>`)
    .replaceAll('</table>', `</table></div>`)

  const accordionBody = component.authors.body
    .replaceAll('/uploads', `${process.env.API_URL}/uploads`)
    .replaceAll('<table>', `<div style="overflow-x: auto;"><table>`)
    .replaceAll('</table>', `</table></div>`)

  return (
    <div className="container">
      <div className={styles['books__wrapper']}>
        <FancyboxGallery className={'page-gallery'}>
          <a
            data-fancybox="gallery"
            href={`${process.env.API_URL}${component.main_photo.data.attributes.url}`}
            className={cn(styles['books__img'], 'gallery-item', 'hand-pointer', 'scale-icon')}
            style={{ maxWidth: '200px' }}
          >
            <Image
              src={`${process.env.API_URL}${component.main_photo.data.attributes.url}`}
              alt="gallery photo"
              width={200}
              height={250}
            />
          </a>
        </FancyboxGallery>

        <div>
          <div className={styles['books__desc']} dangerouslySetInnerHTML={{ __html: componentBody }} />
          <Accordion title={component.authors.title}>
            <div dangerouslySetInnerHTML={{ __html: accordionBody }} />
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default PhotosGallery

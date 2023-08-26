import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import styles from './Page.module.scss'
import panoramsStyles from './PanoramsComponent.module.scss'
import twoColImageStyles from './TwoColumnWithImage.module.scss'

import { FancyboxGallery } from '../FancyboxGallery'
import { Accordion } from '../ui/Accordion/Accordion'
import { PagePageComponentsDynamicZone } from '@/graphql/__generated__'

interface IPageContnetProps {
  colSize: string
  pageComponents: readonly PagePageComponentsDynamicZone[]
}

const PageContnet = ({ colSize, pageComponents }: IPageContnetProps) => {
  return (
    <div className={colSize}>
      {pageComponents.map((component: PagePageComponentsDynamicZone) => {
        if (component.component_type === 'body') {
          /* body */
          return (
            <div className={cn({ ['container']: colSize === 'col-12' })}>
              <div className={styles['page-conent']} dangerouslySetInnerHTML={{ __html: component.body }} />
            </div>
          )
          /* // body */
        } else if (component.component_type === 'two_col_with_image') {
          /* two_col_with_image */
          if (component.layout === 'text_image') {
            return (
              <div className={cn({ ['container']: colSize === 'col-12' })}>
                <div className={twoColImageStyles['wrapper']}>
                  <div
                    className={cn(twoColImageStyles['content'], twoColImageStyles['right-image'])}
                    dangerouslySetInnerHTML={{ __html: component.body }}
                  />
                  <div className={twoColImageStyles['image-box']}>
                    <img src={`${process.env.API_URL}${component.image.data.attributes.url}`} alt={'photo'} />
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className={cn({ ['container']: colSize === 'col-12' })}>
                <div className={twoColImageStyles['wrapper']}>
                  <div className={twoColImageStyles['image-box']}>
                    <img src={`${process.env.API_URL}${component.image.data.attributes.url}`} alt={'photo'} />
                  </div>
                  <div
                    className={cn(twoColImageStyles['content'], twoColImageStyles['left-image'])}
                    dangerouslySetInnerHTML={{ __html: component.body }}
                  />
                </div>
              </div>
            )
          }
          /* // two_col_with_image */
        } else if (component.component_type === 'panoramas') {
          /* panoramas */
          const isBg = component.withBackground

          return (
            <div className={panoramsStyles['wrapper']} style={isBg ? { backgroundColor: '#1d5d9b' } : {}}>
              <div className={cn({ ['container']: colSize === 'col-12' })}>
                {component.title && (
                  <h3
                    className={cn(panoramsStyles['title'], {
                      [panoramsStyles['with-backgrount']]: isBg,
                    })}
                  >
                    {component.title}
                  </h3>
                )}

                <div className={panoramsStyles['items']}>
                  {component.Panorams.map((el) => (
                    <div className={cn(panoramsStyles['item'], 'scale-photo-hover', 'scale-icon')}>
                      <img
                        className={panoramsStyles['panorama-img']}
                        src={`${process.env.API_URL}${el.poster.data.attributes.url}`}
                        alt="panorama"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
          /* // panoramas */
        } else if (component.component_type === 'accordion') {
          return (
            <div className={cn({ ['container']: colSize === 'col-12' })}>
              <Accordion title={component.title} defaultOpen={component.default_open}>
                <div dangerouslySetInnerHTML={{ __html: component.body }} />
              </Accordion>
            </div>
          )
        } else if (component.component_type === 'photos_gallery') {
          return (
            <div className={cn({ ['container']: colSize === 'col-12' })}>
              <div>
                {component.title && (
                  <h3 style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: component.title }} />
                )}
              </div>
              <div style={{ marginBottom: '40px' }}>
                <FancyboxGallery className={'page-gallery'}>
                  {component.images.data.map((el) => (
                    <a
                      key={el.id}
                      data-fancybox="gallery"
                      href={`${process.env.API_URL}${el.attributes.url}`}
                      className={cn('gallery-item', 'hand-pointer', 'scale-icon')}
                      style={{ maxWidth: '200px' }}
                    >
                      <Image
                        src={`${process.env.API_URL}${el.attributes.url}`}
                        alt="gallery photo"
                        width={150}
                        height={200}
                      />
                    </a>
                  ))}
                </FancyboxGallery>
              </div>
            </div>
          )
        }

        return <div style={{ color: 'red' }}>Unknown component!</div>
      })}
    </div>
  )
}

export default PageContnet

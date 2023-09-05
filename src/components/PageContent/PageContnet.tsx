import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Page.module.scss'
import personStyles from './PersonComponent.module.scss'
import panoramsStyles from './PanoramsComponent.module.scss'
import twoColImageStyles from './TwoColumnWithImage.module.scss'
import linkStyles from './ButtonLinkComponent.module.scss'

import { FancyboxGallery } from '../FancyboxGallery'
import { Accordion } from '../ui/Accordion/Accordion'
import { PagePageComponentsDynamicZone, UploadFileEntity, Worker, WorkerEntity } from '@/graphql/__generated__'
import PageCard from '../PageCard/PageCard'

interface IPageContnetProps {
  colSize: string
  cmkHead?: Worker
  cmkSlug?: string
  mainPhotoCol?: UploadFileEntity
  cmkTeachers?: readonly WorkerEntity[]
  pageComponents: readonly PagePageComponentsDynamicZone[]
}

const PageContnet = ({ colSize, pageComponents, mainPhotoCol, cmkHead, cmkTeachers, cmkSlug }: IPageContnetProps) => {
  const cmkHeadPhone = cmkHead?.phone
  const cmkHeadphoneWithoutSymbols = cmkHeadPhone
    ? cmkHeadPhone.replace('(', '').replace(')', '').replace('-', '').replace('_', '')
    : ''
  const cmkHeadLink = cmkHead ? `/structure/cmks/${cmkSlug}/${cmkHead.slug}` : '/'
  const teachersOnPage = 4
  const pagesCount = cmkTeachers ? Math.ceil(cmkTeachers.length / teachersOnPage) : 1

  const [teachersRange, setTeachersRange] = React.useState([0, teachersOnPage])
  const [currentPage, setCurrentPage] = React.useState(1)

  const handleChangeTeachersRange = (currentPage: number) => {
    setCurrentPage(currentPage)
    setTeachersRange((prev) => {
      return [currentPage * teachersOnPage - teachersOnPage, currentPage * teachersOnPage]
    })
  }

  return (
    <div className={colSize}>
      {mainPhotoCol && (
        <div className={'cmk-main-photo'}>
          <img src={`${process.env.API_URL}${mainPhotoCol.attributes.url}`} alt="main page photo" />
        </div>
      )}

      {cmkHead && (
        <div className={personStyles['wrapper']}>
          <Link href={cmkHeadLink} target="_blank">
            <div className={personStyles['photo']}>
              <img src={`${process.env.API_URL}${cmkHead.photo.data.attributes.url}`} />
            </div>
          </Link>

          <Link href={cmkHeadLink} target="_blank">
            <h5 className={personStyles['name']}>{cmkHead.name}</h5>
          </Link>

          <p className={personStyles['position']}>{cmkHead.position}</p>
          {cmkHead.phone && (
            <div>
              <a className={personStyles['tel']} href={`tel:${cmkHeadphoneWithoutSymbols}`}>
                {cmkHead.phone}
              </a>
            </div>
          )}
          {cmkHead.email && (
            <div>
              <a className={personStyles['email']} href={`mailto:${cmkHead.email}`}>
                {cmkHead.email}
              </a>
            </div>
          )}
        </div>
      )}

      {cmkTeachers && <div className={styles['cmk-teachers-title']}>Склад комісії</div>}

      {cmkTeachers &&
        cmkTeachers
          .filter((teacher) => teacher.attributes.name !== cmkHead?.name)
          .slice(teachersRange[0], teachersRange[1])
          .map((teacher) => {
            const nameArray = teacher.attributes.name.split(' ')
            const teacherLink = `/structure/cmks/${cmkSlug}/${teacher.attributes.slug}`

            return (
              <div className={styles['teacher-wrapper']}>
                <div className={styles['teacher-row']}>
                  <Link className={styles['teacher-photo']} href={teacherLink}>
                    <img src={`${process.env.API_URL}${teacher.attributes.photo.data.attributes.url}`} />
                  </Link>
                  <Link className={styles['teacher-name']} href={teacherLink}>
                    {nameArray.map((el) => {
                      if (!el.length) return
                      return (
                        <>
                          {el}
                          <br />
                        </>
                      )
                    })}
                  </Link>
                </div>
                <ul className={styles['teacher-lessons']}>
                  {teacher.attributes.lessons.data.map((lesson) => (
                    <li className={styles['teacher-lesson']}>«{lesson.attributes.name}»</li>
                  ))}
                </ul>
              </div>
            )
          })}

      {cmkTeachers && (
        <div className={styles['cmk-teacher-pagination']}>
          {Array(pagesCount)
            .fill(null)
            .map((el, index) => (
              <span
                className={cn(styles['cmk-teacher-page'], { [styles['active-page']]: currentPage === index + 1 })}
                onClick={() => handleChangeTeachersRange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
        </div>
      )}

      {/* {pageComponents.map((component: PagePageComponentsDynamicZone) => { */}
      {pageComponents.map((component: any) => {
        if (component.component_type === 'body') {
          const componentBody = component.body.replaceAll('/uploads', `${process.env.API_URL}/uploads`)

          /* body */
          return (
            <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
              <div className={styles['page-conent']} dangerouslySetInnerHTML={{ __html: componentBody }} />
            </div>
          )
          /* // body */
        } else if (component.component_type === 'two_col_with_image') {
          /* two_col_with_image */
          if (component.layout === 'text_image') {
            return (
              <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
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
              <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
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
            <div
              className={panoramsStyles['wrapper']}
              style={isBg ? { backgroundColor: '#1d5d9b' } : {}}
              key={component.id}
            >
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
            <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
              <Accordion title={component.title} defaultOpen={component.default_open}>
                <div dangerouslySetInnerHTML={{ __html: component.body }} />
              </Accordion>
            </div>
          )
        } else if (component.component_type === 'photos_gallery') {
          return (
            <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
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
        } else if (component.component_type === 'person') {
          const phone = component.worker.data.attributes.phone
          const phoneWithoutSymbols = phone
            ? phone.replace('(', '').replace(')', '').replace('-', '').replace('_', '')
            : ''

          const personLink = component.worker.data.attributes.cycle_commission.data
            ? `/structure/cmks/${component.worker.data.attributes.cycle_commission.data.attributes.slug}/${component.worker.data.attributes.slug}`
            : '/'

          return (
            <div className={personStyles['wrapper']}>
              <Link href={personLink} target="_blank">
                <div className={personStyles['photo']}>
                  <img src={`${process.env.API_URL}${component.worker.data.attributes.photo.data.attributes.url}`} />
                </div>
              </Link>

              <Link href={personLink} target="_blank">
                <h5 className={personStyles['name']}>{component.worker.data.attributes.name}</h5>
              </Link>

              <p className={personStyles['position']}>{component.worker.data.attributes.position}</p>
              {component.worker.data.attributes.phone && (
                <div>
                  <a className={personStyles['tel']} href={`tel:${phoneWithoutSymbols}`}>
                    {component.worker.data.attributes.phone}
                  </a>
                </div>
              )}
              <div>
                <a className={personStyles['email']} href={`mailto:${component.worker.data.attributes.email}`}>
                  {component.worker.data.attributes.email}
                </a>
              </div>
            </div>
          )
        } else if (component.component_type === 'button_link') {
          return (
            <Link href={component.link} className={linkStyles['link']} target="_blank">
              {component.text}
            </Link>
          )
        } else if (component.component_type === 'page_cards') {
          return (
            <div className="container">
              <div className={styles['page-cards-wrapper']}>
                {component.cards.map((card) => (
                  <PageCard id={card.id} slug={card.link} photo={card.photo.data.attributes.url} name={card.name} />
                ))}
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

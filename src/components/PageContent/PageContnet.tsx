// @ts-nocheck

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
import FullScreenFrame from '../FullScreenFrame/FullScreenFrame'

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

  React.useEffect(() => {
    setCurrentPage(1)
  }, [cmkTeachers])

  return (
    <div className={colSize}>
      {mainPhotoCol && (
        <div className={'cmk-main-photo'}>
          <Image
            src={`${process.env.API_URL}${mainPhotoCol.attributes.url}`}
            width={mainPhotoCol.attributes.width}
            height={mainPhotoCol.attributes.height}
            alt="main page photo"
          />
        </div>
      )}

      {cmkHead && (
        <div className={personStyles['wrapper']}>
          <Link href={cmkHeadLink} target="_blank">
            <div className={personStyles['photo']}>
              <Image
                src={`${process.env.API_URL}${cmkHead.photo.data.attributes.url}`}
                width={cmkHead.photo.data.attributes.width}
                height={cmkHead.photo.data.attributes.height}
              />
            </div>
          </Link>

          <div className={personStyles['info']}>
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
              <a className={personStyles['email']} href={`mailto:${cmkHead.email}`}>
                {cmkHead.email}
              </a>
            )}
          </div>
        </div>
      )}

      {cmkTeachers && <div className={styles['cmk-teachers-title']}>Склад комісії</div>}

      {cmkTeachers && (
        <div className={styles['teachers-list']}>
          {cmkTeachers
            .filter((teacher) => teacher.attributes.name !== cmkHead?.name)
            .slice(teachersRange[0], teachersRange[1])
            .map((teacher) => {
              const nameArray = teacher.attributes.name.split(' ')
              const teacherLink = `/structure/cmks/${cmkSlug}/${teacher.attributes.slug}`

              return (
                <div className={styles['teacher-wrapper']} key={teacher.id}>
                  <div className={styles['teacher-row']}>
                    <Link className={styles['teacher-photo']} href={teacherLink}>
                      <Image
                        src={`${process.env.API_URL}${teacher.attributes.photo.data.attributes.url}`}
                        width={teacher.attributes.photo.data.attributes.width || 150}
                        height={teacher.attributes.photo.data.attributes.height || 150}
                        alt="teacher photo"
                      />
                    </Link>
                    <Link className={styles['teacher-name']} href={teacherLink}>
                      {nameArray.map((el) => {
                        if (!el.length) return
                        return (
                          <React.Fragment key={el}>
                            {el}
                            <br />
                          </React.Fragment>
                        )
                      })}
                    </Link>
                  </div>
                  <ul className={styles['teacher-lessons']}>
                    {teacher.attributes.lessons.data.map((lesson) => (
                      <li className={styles['teacher-lesson']} key={lesson.id}>
                        «{lesson.attributes.name}»
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
        </div>
      )}

      {cmkTeachers && (
        <div className={styles['cmk-teacher-pagination']}>
          {Array(pagesCount)
            .fill(null)
            .map((el, index) => (
              <span
                className={cn(styles['cmk-teacher-page'], {
                  [styles['active-page']]: currentPage === index + 1,
                })}
                onClick={() => handleChangeTeachersRange(index + 1)}
                key={index}
              >
                {index + 1}
              </span>
            ))}
        </div>
      )}

      {/* {pageComponents.map((component: PagePageComponentsDynamicZone) => { */}
      {pageComponents.map((component: any) => {
        if (component.component_type === 'body') {
          const componentBody = component.body
            .replaceAll('/uploads', `${process.env.API_URL}/uploads`)
            .replaceAll('<table>', `<div style="overflow-x: auto;"><table>`)
            .replaceAll('</table>', `</table></div>`)

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
                    <Image
                      src={`${process.env.API_URL}${component.image.data.attributes.url}`}
                      width={component.image.data.attributes.width}
                      height={component.image.data.attributes.height}
                      alt={'photo'}
                    />
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
                <div className={twoColImageStyles['wrapper']}>
                  <div className={twoColImageStyles['image-box']}>
                    <Image
                      src={`${process.env.API_URL}${component.image.data.attributes.url}`}
                      width={component.image.data.attributes.width}
                      height={component.image.data.attributes.height}
                      alt={'photo'}
                    />
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

          const [isOpenFullScreen, setOpenFullScreen] = React.useState(false)
          const [frameUrl, setFrameUrl] = React.useState('')

          const handleOpenFullScreenFrame = (url: string) => {
            setFrameUrl(url)
            setOpenFullScreen(true)
          }

          return (
            <>
              <FullScreenFrame isOpenFullScreen={isOpenFullScreen} setOpenFullScreen={setOpenFullScreen}>
                <iframe frameBorder="0" width="90%" height="90%" src={frameUrl} allowFullScreen />
              </FullScreenFrame>

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
                    {component.panoramas.data.map((el) => (
                      <a
                        key={el.id}
                        className={cn(panoramsStyles['item'], 'scale-photo-hover', 'scale-icon')}
                        onClick={() => handleOpenFullScreenFrame(el.attributes.link)}
                      >
                        <Image
                          className={panoramsStyles['panorama-img']}
                          src={`${process.env.API_URL}${el.attributes.poster.data.attributes.url}`}
                          width={el.attributes.poster.data.attributes.width || 250}
                          height={el.attributes.poster.data.attributes.height || 250}
                          alt="panorama"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
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
                      className={cn(styles['photo-item'], 'gallery-item', 'hand-pointer', 'scale-icon')}
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
                  <Image
                    src={`${process.env.API_URL}${component.worker.data.attributes.photo.data.attributes.url}`}
                    width={component.worker.data.attributes.photo.data.attributes.width}
                    height={component.worker.data.attributes.photo.data.attributes.height}
                    alt={`worker photo`}
                  />
                </div>
              </Link>

              <div className={personStyles['info']}>
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
            </div>
          )
        } else if (component.component_type === 'button_link') {
          // const isNeedContainer =
          //   colSize === 'col-12' || colSize === 'col-7-12' || colSize === 'col-8-12' || colSize === 'col-9-12'
          const isNeedContainer = colSize === 'col-12'

          return (
            <div className={isNeedContainer ? 'container' : ''}>
              <Link href={component.link} className={linkStyles['link']} target="_blank">
                {component.text}
              </Link>
            </div>
          )
        } else if (component.component_type === 'page_cards') {
          return (
            <div className="container">
              <div className={styles['page-cards-wrapper']}>
                {component.cards.map((card) => (
                  <PageCard
                    key={card.id}
                    id={card.id}
                    slug={card.link}
                    photo={card.photo.data.attributes.url}
                    name={card.name}
                  />
                ))}
              </div>
            </div>
          )
        } else if (component.component_type === 'partners') {
          return (
            <div>
              <div className={styles['section-name']}>{component.title}</div>
              <div className={styles['partners-wrapper']}>
                {component.partners.data.map((el) => {
                  const partnerLink = el.attributes.presentation_link
                    ? el.attributes.presentation_link
                    : el.attributes.link

                  return (
                    <a
                      key={el.id}
                      className={styles['partner-item']}
                      title={el.attributes.name}
                      href={partnerLink}
                      target="_blank"
                    >
                      <Image
                        src={`${process.env.API_URL}${el.attributes.logo.data.attributes.url}`}
                        width={el.attributes.logo.data.attributes.width}
                        height={el.attributes.logo.data.attributes.height}
                        alt={el.attributes.logo.data.attributes.name}
                      />
                    </a>
                  )
                })}
              </div>
            </div>
          )
        } else if (component.component_type === 'full-size-person') {
          const componentBody = component.body
            .replaceAll('/uploads', `${process.env.API_URL}/uploads`)
            .replaceAll('<table>', `<div style="overflow-x: auto;"><table>`)
            .replaceAll('</table>', `</table></div>`)

          return (
            <div className="container">
              <div className={styles['full-size__wrapper']}>
                <FancyboxGallery className={'page-gallery'}>
                  <a
                    data-fancybox="gallery"
                    href={`${process.env.API_URL}${component.photo.data.attributes.url}`}
                    className={cn(styles['full-size__img'], 'gallery-item', 'hand-pointer', 'scale-icon')}
                    style={{ maxWidth: '200px' }}
                  >
                    <Image
                      src={`${process.env.API_URL}${component.photo.data.attributes.url}`}
                      alt="gallery photo"
                      width={200}
                      height={250}
                    />
                  </a>
                </FancyboxGallery>
                {/* <img src={`${process.env.API_URL}${component.photo.data.attributes.url}`} /> */}
                <div className={styles['full-size__content']}>
                  <h3 className={styles['full-size__title']}>{component.name}</h3>
                  <div className={styles['full-size__text']} dangerouslySetInnerHTML={{ __html: componentBody }} />
                </div>
              </div>
            </div>
          )
        } else if (component.component_type === 'education_books') {
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
        } else if (component.component_type === 'button_images') {
          return (
            <div className={styles['button-images__wrapper']}>
              {component.Components.map((el) => (
                <a className={styles['button-images__link']} href={el.link} key={el.id}>
                  <Image
                    className={styles['button-images__img']}
                    src={`${process.env.API_URL}${el.image.data.attributes.url}`}
                    width={el.image.data.attributes.width}
                    height={el.image.data.attributes.height}
                  />
                </a>
              ))}
            </div>
          )
        }

        return <div style={{ color: 'red' }}>Unknown component!</div>
      })}
    </div>
  )
}

export default PageContnet

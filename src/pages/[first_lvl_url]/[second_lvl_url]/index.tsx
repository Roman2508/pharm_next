import React from 'react'
import cn from 'classnames'
import { remark } from 'remark'
import html from 'remark-html'
import { GetServerSideProps, GetStaticProps } from 'next'

import styles from '../Page.module.scss'
import panoramsStyles from '../PanoramsComponent.module.scss'
import twoColImageStyles from '../TwoColumnWithImage.module.scss'

import { Layout } from '@/layouts/Layout'
import { GetHeaderQuery, PageEntity, gql } from '@/graphql/client'
import DynamicPageLayout from '@/utils/dynamicPageLayout'
import EditorJsRenderer from '@/components/EditorJsRenderer'
import { FancyboxGallery } from '@/components/FancyboxGallery'
import Image from 'next/image'
import PageContnet from '@/components/PageContent/PageContnet'

interface IAdministrationProps {
  headerData: GetHeaderQuery
  pageData: PageEntity
}

const Administration: React.FC<IAdministrationProps> = ({ headerData, pageData }) => {
  // const DLayout = DynamicPageLayout({
  //   layout: String(pageData.attributes.layout),
  //   pageContent: pageData.attributes.page_components,
  //   leftSidebar: pageData.attributes.left_sidebar,
  //   rightSidebar: pageData.attributes.right_sidebar,
  // })

  console.log(pageData.attributes)

  return (
    <Layout headerData={headerData} title={pageData.attributes.SEO.title}>
      <div className={styles['---']}>
        <h1 className={`${styles['page-title']} section-title`}>{pageData.attributes.title}</h1>

        {pageData.attributes.main_photo.data && (
          <div className="container">
            <div className={'main-photo-page'}>
              <img
                src={`${process.env.API_URL}${pageData.attributes.main_photo.data.attributes.url}`}
                alt="main page photo"
              />
            </div>
          </div>
        )}

        <div className={cn(styles['page-conent'])}>
          {String(pageData.attributes.layout) === 'col_1_8_3' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-1-12" pageComponents={pageData.attributes.left_sidebar} />
              <PageContnet colSize="col-8-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-3-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : String(pageData.attributes.layout) === 'col_2_7_4' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-2-12" pageComponents={pageData.attributes.left_sidebar} />
              <PageContnet colSize="col-7-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-4-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : String(pageData.attributes.layout) === 'col_8_4' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-8-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-4-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : String(pageData.attributes.layout) === 'col_9_3' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-9-12" pageComponents={pageData.attributes.page_components} />
              <PageContnet colSize="col-3-12" pageComponents={pageData.attributes.right_sidebar} />
            </div>
          ) : (
            <PageContnet colSize="col-12" pageComponents={pageData.attributes.page_components} />
          )}
        </div>
      </div>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const headerData = await gql.GetHeader()

    if (params && params.first_lvl_url && params.second_lvl_url) {
      const pageData = await gql.GetPage({ pageUrl: `/${params.first_lvl_url}/${params.second_lvl_url}` })

      if (pageData.pages.data[0]) {
        return {
          props: {
            headerData,
            pageData: pageData.pages.data[0],
          },
        }
      } else {
        return {
          props: {
            headerData: {},
            pageData: {},
          },
          redirect: {
            // redirect to notFonundPage
            destination: '/',
            permanent: false,
          },
        }
      }
    } else {
      return {
        props: {
          headerData: {},
          pageData: {},
        },
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    //
  } catch (error) {
    console.log(error, 'default page error')
    return { props: { headerData: {}, pageData: {} } }
  }
}

export default Administration

// {pageData.attributes.page_components.map((component) => {
//   if (component.component_type === 'body') {
//     /* body */
//     return (
//       <div className="container">
//         <div className={styles['page-conent']} dangerouslySetInnerHTML={{ __html: component.body }} />
//       </div>
//     )
//     /* // body */
//   } else if (component.component_type === 'two_col_with_image') {
//     /* two_col_with_image */
//     if (component.layout === 'text_image') {
//       return (
//         <div className="container">
//           <div className={twoColImageStyles['wrapper']}>
//             <div
//               className={cn(twoColImageStyles['content'], twoColImageStyles['right-image'])}
//               dangerouslySetInnerHTML={{ __html: component.body }}
//             />
//             <div className={twoColImageStyles['image-box']}>
//               <img src={`${process.env.API_URL}${component.image.data.attributes.url}`} alt={'photo'} />
//             </div>
//           </div>
//         </div>
//       )
//     } else {
//       return (
//         <div className="container">
//           <div className={twoColImageStyles['wrapper']}>
//             <div className={twoColImageStyles['image-box']}>
//               <img src={`${process.env.API_URL}${component.image.data.attributes.url}`} alt={'photo'} />
//             </div>
//             <div
//               className={cn(twoColImageStyles['content'], twoColImageStyles['left-image'])}
//               dangerouslySetInnerHTML={{ __html: component.body }}
//             />
//           </div>
//         </div>
//       )
//     }
//     /* // two_col_with_image */
//   } else if (component.component_type === 'panoramas') {
//     /* panoramas */
//     const isBg = component.withBackground

//     return (
//       <div className={panoramsStyles['wrapper']} style={isBg ? { backgroundColor: '#1d5d9b' } : {}}>
//         <div className="container">
//           {component.title && (
//             <h3
//               className={cn(panoramsStyles['title'], {
//                 [panoramsStyles['with-backgrount']]: isBg,
//               })}
//             >
//               {component.title}
//             </h3>
//           )}

//           <div className={panoramsStyles['items']}>
//             {component.Panorams.map((el) => (
//               <div className={cn(panoramsStyles['item'], 'scale-photo-hover', 'scale-icon')}>
//                 <img
//                   className={panoramsStyles['panorama-img']}
//                   src={`${process.env.API_URL}${el.poster.data.attributes.url}`}
//                   alt="panorama"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//     /* // panoramas */
//   } else if (component.component_type === 'accordion') {
//     return (
//       <div className="container">
//         <Accordion title={component.title} defaultOpen={component.default_open}>
//           <div dangerouslySetInnerHTML={{ __html: component.body }} />
//         </Accordion>
//       </div>
//     )
//   } else if (component.component_type === 'photos_gallery') {
//     return (
//       <div className="container">
//         <div>
//           {component.title && (
//             <h3 style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: component.title }} />
//           )}
//         </div>
//         <div style={{ marginBottom: '40px' }}>
//           <FancyboxGallery className={'page-gallery'}>
//             {component.images.data.map((el) => (
//               <a
//                 key={el.id}
//                 data-fancybox="gallery"
//                 href={`${process.env.API_URL}${el.attributes.url}`}
//                 className={cn('gallery-item', 'hand-pointer', 'scale-icon')}
//                 style={{ maxWidth: '200px' }}
//               >
//                 <Image
//                   src={`${process.env.API_URL}${el.attributes.url}`}
//                   alt="gallery photo"
//                   width={150}
//                   height={200}
//                 />
//               </a>
//             ))}
//           </FancyboxGallery>
//         </div>
//       </div>
//     )
//   }

//   return <div style={{ color: 'red' }}>Unknown component!</div>
// })}

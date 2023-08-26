import React from 'react'
import { OutputData } from '@editorjs/editorjs'

import tableStyles from './ui/Table/Table.module.scss'
import Image from 'next/image'

// const editorJsHtml = require('editorjs-html')

// const EditorJsToHtml = editorJsHtml()

type Props = {
  data: OutputData
}

// type ParsedContent = string | JSX.Element

const EditorJsRenderer = ({ data }: Props) => {
  //   const html = EditorJsToHtml.parse(data) as ParsedContent[]

  //   console.log(EditorJsToHtml)

  //   console.log(JSON.parse(data))

  return (
    <div key={data.time}>
      {/* {html.map((item, index) => {
        if (typeof item === 'string') {
          return <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
        }
        return item
      })} */}

      {(JSON.parse(data).blocks || []).map((item, index) => {
        console.log(item)

        if (item.type === 'header') {
          let Heading = `h${item.data.level}` as any

          return <Heading dangerouslySetInnerHTML={{ __html: item.data.text }} key={index}></Heading>
        }

        if (item.type === 'paragraph') {
          return <div dangerouslySetInnerHTML={{ __html: item.data.text }} key={index}></div>
        }

        if (item.type === 'table') {
          let isTableTead

          let tableBody = item.data.content.slice(1, item.data.content.lenth)

          if (item.data.withHeadings) {
            isTableTead = true
          }

          return (
            <table className={tableStyles['table']} suppressHydrationWarning={true}>
              <thead>
                {isTableTead && (
                  <tr>
                    {item.data.content[0].map((el: string) => (
                      <th dangerouslySetInnerHTML={{ __html: el }} key={index}></th>
                    ))}
                  </tr>
                )}
              </thead>

              <tbody>
                {tableBody.map((row: string[]) => (
                  <tr>
                    {row.map((el: string) => (
                      <td dangerouslySetInnerHTML={{ __html: el }} key={index}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )
          //   return <table dangerouslySetInnerHTML={{ __html: item.data.content }} key={index}></table>
        }

        if (item.type === 'list') {
          return (
            <ul>
              {item.data.items.map((el: string) => (
                <li dangerouslySetInnerHTML={{ __html: el }} key={index}></li>
              ))}
            </ul>
          )
        }

        if (item.type === 'image') {
          return (
            <Image
              src={`${process.env.API_URL}${item.data.file.url}`}
              width={item.data.file.width}
              height={item.data.file.height}
              alt={item.data.file.alt}
            />
          )
        }

        return (
          <div key={data.time} style={{ color: 'red' }}>
            Unknown block type!!!!
          </div>
        )
      })}
    </div>
  )
}

export default EditorJsRenderer

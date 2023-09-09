import React from "react"
import cn from "classnames"

import styles from "./Announcement.module.scss"
import Modal from "../Modal/Modal"
import { GetAdvertisementsQuery } from "@/graphql/__generated__"

const PrevArrow = ({ onClick }: any) => {
  return (
    <div className={styles["announcement__button-prev"]} onClick={onClick}>
      <svg width="30" viewBox="0 0 56 49" fill="none">
        <path
          d="M3 24.4286L24.4286 45.8571M3 24.4286L24.4286 3"
          stroke="#1d5d9b"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

const NextArrow = ({ onClick }: any) => {
  return (
    <div className={styles["announcement__button-next"]} onClick={onClick}>
      <svg width="30" viewBox="0 0 56 49" fill="none">
        <path
          d="M53 24.4286M53 24.4286L31.5714 3.00004M53 24.4286L31.5714 45.8572"
          stroke="#1d5d9b"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

interface IAnnouncementProps {
  advertisments: GetAdvertisementsQuery
}

const Announcement: React.FC<IAnnouncementProps> = ({ advertisments }) => {
  if (!advertisments || !advertisments.advertisements) {
    return
  }

  const modalRef = React.useRef(null)

  const [activeSlide, setActiveSlide] = React.useState(1)

  const [isOpenModal, setOpenModal] = React.useState(false)
  const [modalData, setModalData] = React.useState<{
    title: string
    body: string
  }>({ title: "", body: "" })

  React.useEffect(() => {
    if (advertisments && advertisments.advertisements.data[0]) {
      setModalData({
        title: advertisments.advertisements.data[0].attributes.title,
        body: advertisments.advertisements.data[0].attributes.body,
      })
    }
  }, [advertisments])

  const handleOpenAddModal = (data: string) => {
    const modalBody = advertisments.advertisements.data.find(
      (el) => el.attributes.title === data
    )

    setModalData({
      title: data,
      body: String(modalBody?.attributes.body) || "",
    })
    setOpenModal(true)
  }

  const showNextSlide = () => {
    setActiveSlide((prev) => prev + 1)

    if (activeSlide >= advertisments.advertisements.data.length) {
      setActiveSlide(1)
      setModalData({
        title: advertisments.advertisements.data[0].attributes.title,
        body: advertisments.advertisements.data[0].attributes.body,
      })
    } else {
      setModalData({
        title: advertisments.advertisements.data[activeSlide].attributes.title,
        body: advertisments.advertisements.data[activeSlide].attributes.body,
      })
    }
  }

  const showPrevSlide = () => {
    setActiveSlide((prev) => prev - 1)

    if (activeSlide <= 1) {
      setActiveSlide(() => advertisments.advertisements.data.length)
      const index = advertisments.advertisements.data.length - 1
      console.log("if", index)
      setModalData({
        title: advertisments.advertisements.data[index].attributes.title,
        body: advertisments.advertisements.data[index].attributes.body,
      })
    } else {
      console.log(activeSlide - 1, "else")
      setModalData({
        title:
          advertisments.advertisements.data[activeSlide - 2].attributes.title,
        body: advertisments.advertisements.data[activeSlide - 2].attributes
          .body,
      })
    }
  }

  return (
    <>
      <Modal
        ref={modalRef}
        isShow={isOpenModal}
        setIsShow={setOpenModal}
        modalTitle={modalData.title}
        modalBody={modalData.body}
      />

      <div className={styles["announcement"]}>
        <div className={styles["container"]}>
          <div className={styles["announcement__inner"]}>
            <div className={cn(styles["announcement__title"])}>Увага!</div>

            <div className={styles["announcement__content"]}>
              {/* slider */}
              <PrevArrow onClick={showPrevSlide} />
              <div
                className={styles["announcement__slider-item"]}
                onClick={() => handleOpenAddModal(modalData.title)}
              >
                {modalData.title}
              </div>
              <NextArrow onClick={showNextSlide} />
              {/* slider */}

              <div className={styles["announcement__slider-pagination"]}>
                <span>{activeSlide}</span>
                <span>/</span>
                <span>{advertisments.advertisements.data.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Announcement

import React, { useEffect, useRef, useState } from 'react'
import { Swiper, Toast,Image } from 'antd-mobile'
import { obtainSwiper } from '../../api/swiper'
// import { SwiperRef } from 'antd-mobile/es/components/swiper'

// import styles from './demo1.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
        <div
            // className={styles.content}
            style={{ background: color }}
            onClick={() => {
                Toast.show(`你点击了卡片 ${index + 1}`)
            }}
        >
            {index + 1}
        </div>
    </Swiper.Item>
))

export default () => {
    const [list, setList] = useState([])

    useEffect(() => {
        obtainSwiper((res) => {
            console.log(res.data.body)
            setList(res.data.body)
        })
    }, [])

    return (
        <>
            <Swiper autoplay loop>
                {list.map(
                    x => {
                        return (
                            <Swiper.Item key={x.id}>
                                <Image src={'http://localhost:8080' +x.imgSrc}>
                                </Image>
                            </Swiper.Item>
                        )
                    }
                )}
            </Swiper>
        </>
    )
}
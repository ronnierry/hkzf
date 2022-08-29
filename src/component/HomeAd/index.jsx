import React, { useEffect, useRef, useState } from 'react'
import { Swiper, Toast, Image } from 'antd-mobile'
import { obtainSwiper } from '../../api/swiper'
// import { SwiperRef } from 'antd-mobile/es/components/swiper'

// import styles from './demo1.less'
export default () => {
    const [list, setList] = useState([])

    useEffect(() => {
        obtainSwiper((res) => {
            setList(res.data.body)
        })
    }, [])

    return (
        <>{list.length > 0 ? (
            <Swiper autoplay loop>
                {list.map(
                    x => {
                        return (
                            <Swiper.Item key={x.id}>
                                <Image src={'http://localhost:8080' + x.imgSrc}>
                                </Image>
                            </Swiper.Item>
                        )
                    }
                )}
            </Swiper>
        ) : undefined}

        </>
    )
}
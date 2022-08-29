import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import My from "../My";
import News from "../News";
import './index.css'


import React, { useState, useEffect } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
// import { DemoBlock } from 'demos'
import {
    AppOutline,
    MessageOutline,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'


const Bottom = (props) => {
    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/todo',
            title: '待办',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/news',
            title: '消息',
            icon: <MessageOutline />,
        },
        {
            key: '/my',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    // const history = useHistory()
    const { changeNavBarTitle } = props;
    const location = useLocation()
    const { pathname } = location

    const navigate = useNavigate()
    // const [activeKey,setActiveKey] =  useState("")

    const setRouteActive = (value) => {
        //   history.push(value)
        navigate(value)
        changeNavBarTitleInBottom(value)
        // setActiveKey(value)
    }

    const changeNavBarTitleInBottom = (path) => {
        console.log(path);
        if (path) {
            let tab = tabs.find(x => {
                return x.key === path;
            })
            if (tab) {
                changeNavBarTitle(tab.title)
            }

        }
    }

    useEffect(() => {
        changeNavBarTitleInBottom(pathname)
    }, [])

    return (
        <>
            <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </>
    )
}

export default function Home() {
    const [title, setTitle] = useState("")

    const changeNavBarTitle = (title) => {
        setTitle(title)
    }
    return (
        <div className='home'>
            <NavBar className='home-top' >{title}</NavBar>
            <div className='home-body'>
                <Routes >
                    <Route path="news" element={<News></News>}></Route>
                    <Route path="my" element={<My></My>}></Route>
                </Routes>
            </div>
            <Bottom className='home-bottom' changeNavBarTitle={changeNavBarTitle}></Bottom>
        </div>
    )
}
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
import Main from "../Main";

const tabs = [
    {
        key: '/home/main',
        title: '首页',
        icon: <AppOutline />,
    },
    {
        key: '/home/todo',
        title: '找房',
        icon: <UnorderedListOutline />,
    },
    {
        key: '/home/news',
        title: '消息',
        icon: <MessageOutline />,
    },
    {
        key: '/home/my',
        title: '我的',
        icon: <UserOutline />,
    },
]

const Bottom = () => {
    // const history = useHistory()
    // const { changeNavBarTitle } = props;
    const location = useLocation()
    const { pathname } = location

    const navigate = useNavigate()
    // const [activeKey,setActiveKey] =  useState("")

    const setRouteActive = (value) => {
        //   history.push(value)
        navigate(value)
        // changeNavBarTitleInBottom(value)
        // setActiveKey(value)
    }



    // useEffect(() => {
    //     changeNavBarTitleInBottom(pathname)
    // }, [])

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
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    // const [showTopNarBar,setShowTopNarBar] = useState(false)

    const changeNavBarTitle = (title) => {
        setTitle(title)
    }

    const location = useLocation()
    const { pathname } = location

    let showTopNarBar = null;
    if (pathname !== '/home/main') {
        showTopNarBar = (
            <div className='home-top'>
                <NavBar onBack={()=>{
                    navigate(-1)
                }}>{title}</NavBar>
            </div>)
    }

    const changeNavBarTitleInBottom = (path) => {
        if (path) {
            let tab = tabs.find(x => {
                return x.key === path;
            })
            if (tab) {
                setTitle(tab.title)
            }

        }
    }

    useEffect(()=>{
        changeNavBarTitleInBottom(pathname)
    },[pathname])

    return (
        <div className='home'>
            {showTopNarBar}
            <div className='home-body'>
                <Routes >
                    <Route path="main" element={<Main></Main>}></Route>
                    <Route path="news" element={<News></News>}></Route>
                    <Route path="my" element={<My></My>}></Route>
                </Routes>
            </div>
            <Bottom className='home-bottom' changeNavBarTitle={changeNavBarTitle}></Bottom>
        </div>
    )
}
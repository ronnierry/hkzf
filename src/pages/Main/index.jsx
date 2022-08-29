import { AutoCenter, Button, Card, Grid, Image, Space } from "antd-mobile";
import HomeAd from "../../component/HomeAd";
import nav1 from "../../assets/images/nav-1.png";
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"
import { useNavigate } from "react-router-dom";


const navList = [
    {
        title: '整租',
        imgSrc: nav1,
        path: "/home/todo"
    },
    {
        title: '合租',
        imgSrc: nav2,
        path: "/home/todo"
    },
    {
        title: '地图找房',
        imgSrc: nav3,
        path: "/1"
    },
    {
        title: '去出租',
        imgSrc: nav4,
        path: "/1"
    }
]

function NavListRender(props) {
    const navigate = useNavigate()

    const recordHandlerOnClick = (path) => {
        navigate(path)
    }

    const { navList } = props;
    return navList.map(record => {
        return (
            <Grid.Item key={record.title}>
                <div onClick={() => recordHandlerOnClick(record.path)} key={record.title}>
                    <Image src={record.imgSrc} ></Image>
                    <AutoCenter>{record.title}</AutoCenter>
                </div>
            </Grid.Item>

        )
    })
}

export default function Main() {
    return (
        <div>
            <div className='home-swiper'>
                <HomeAd ></HomeAd>
            </div>
            <div>
                <Card>
                    <Grid columns={4} gap={10}>
                        <NavListRender navList={navList}></NavListRender>
                    </Grid>
                </Card>
            </div>
        </div>
    )
}
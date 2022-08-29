import { AutoCenter, Button, Card, Grid, Image, Space } from "antd-mobile";
import HomeAd from "../../component/HomeAd";
import nav1 from "../../assets/images/nav-1.png";
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"


const navList = [
    {
        title: '整租',
        imgSrc: nav1
    },
    {
        title: '合租',
        imgSrc: nav2
    },
    {
        title: '地图找房',
        imgSrc: nav3
    },
    {
        title: '去出租',
        imgSrc: nav4
    }
]

function NavListRender(props) {
    const { navList } = props;
    return navList.map(x => {
        return (
            <Grid.Item>
                <div key={x.title}>
                    <Image src={x.imgSrc} ></Image>
                    <AutoCenter>{x.title}</AutoCenter>
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
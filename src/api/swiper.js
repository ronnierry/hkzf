import axios from "axios";

const obtainSwiper = (resHandler) => {
    axios.get('http://localhost:8080/home/swiper', {
    }).then(res =>
        resHandler(res)
    )
}

export {obtainSwiper};


import { Routes,Route } from "react-router-dom";
import My from "../My";
import News from "../News";

export default function Home() {
    return (
        <div>
            home
            <Routes>
                <Route path="/news" element={<News></News>}></Route>
                <Route path="/my" element={<My></My>}></Route>
            </Routes>

        </div>
    )
}
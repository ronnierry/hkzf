import { Button } from 'antd-mobile'
import { BrowserRouter as Router,Routes,Route,Link, Navigate  } from 'react-router-dom';
import CityList from './pages/CityList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/city-list'>选择城市</Link></li>
        </ul> */}
        <Routes>
          <Route path='/home/*' element={<Home></Home>}></Route>
          <Route path='/city-list' element={<CityList></CityList>}></Route>
          {/* 重定向到首页 */}
          <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Button } from 'antd-mobile'
import { BrowserRouter as Router,Routes,Route,Link  } from 'react-router-dom';
import CityList from './pages/CityList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Button>1</Button>
      <Router>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/city-list'>选择城市</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/city-list' element={<CityList></CityList>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {
  //Router é o apelido para oBrowserRouter
  BrowserRouter as Router,
  Routes,
  Route,
}from  'react-router-dom'

import {Home} from './pages/home'
import {Login} from './pages/login'
import {Feed} from './pages/feed'
import {SignUp} from './pages/signUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;

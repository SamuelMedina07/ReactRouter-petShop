import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Error404 from './pages/Error404'
import Header from './components/Header';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {

  return (
    <>
<Router>
  <Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/sobre' element={<Sobre/>} />
  <Route path='*' element= {<Error404/>} />
</Routes>
</Router>
    </>
  );
}

export default App;

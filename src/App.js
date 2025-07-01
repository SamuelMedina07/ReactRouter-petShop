import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import './pages/Home'
import Home from './pages/Home';
import './pages/Sobre'
import Sobre from './pages/Sobre';

function App() {

  const location = window.location.pathname
  console.log(location)

  const Router = () => location === "/" ? <Home /> : <Sobre />;

/* const Router = () => {
    if(location === "/"){
      return <Home/>}
    else {
      return <Sobre/>}
  } */
  return (
    <>
<Router/>
    </>
  );
}

export default App;

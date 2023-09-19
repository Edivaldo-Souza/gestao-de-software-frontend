import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/telaLogin'
import Cadastro from './pages/Cadastro';
import TelaPrincipal from './pages/TelaPrincipal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/principal' element={<TelaPrincipal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

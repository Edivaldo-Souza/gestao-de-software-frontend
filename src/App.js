import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/telaLogin'
import Cadastro from './pages/telaCadastro';
import TelaPrincipal from './pages/TelaPrincipal';
import TelaInicial from './pages/telaInicial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route index element={<TelaInicial/>}/>
          <Route path='/' element={<TelaInicial/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/principal' element={<TelaPrincipal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

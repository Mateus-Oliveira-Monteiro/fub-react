import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Vagas from './Pages/Vagas/Vagas';
import Home from './Pages/Home/Home';
import Perfil from './Pages/Perfil/Perfil';
import Notificacoes from './Pages/Notificacoes/Notificacoes';
import MaisInfo from './Pages/Mais_info/Mais_info';
import Anunciar from './Pages/Anunciar/Anunciar';
import Candidatos from './Pages/Candidatos/Candidatos';
import Contratado from './Pages/Contratado/Contratado';
import BicosSolicitados from './Pages/BicosSolicitados/BicosSolicitados';
import Candidatar from './Pages/Candidatar/Candidatar';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login';
import Registrar from './Pages/Registrar';
import {Avaliacao} from "./Pages/Avaliacao/Avaliacao";
import Cupom from './Pages/Cupom';
import {useReloadLogin} from "./Hooks/useReloadLogin";
import EditPerfil from "./Pages/EditPerfil";

function App() {

    useReloadLogin();

    return (
      <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Login />}/>
                <Route path="/registrar" element={<Registrar />} />
                <Route path={'/home'} element={<Home />}/>
                <Route path="/vagas" element={<Vagas />}/>
                <Route path="/notificacoes" element={<Notificacoes />}/>
                <Route path="/perfil" element={<Perfil />}/>
                <Route path={'/perfil/:id'} element={<Perfil />} />
                <Route path={'/perfil/edit/:id'} element={<EditPerfil />} />
                <Route path="vagas/mais_info/:id" element={<MaisInfo />}/>
                <Route path="/anunciar" element={<Anunciar />}/>
                <Route path="/candidatos/:id" element={<Candidatos />}/>
                <Route path="/contratado" element={<Contratado />}/>
                <Route path="/bicos_solicitados" element={<BicosSolicitados />}/>
                <Route path="/candidatar" element={<Candidatar />}/>
                <Route path="/avaliacao" element={<Avaliacao />}/>
                <Route path="/cupom/:id" element={<Cupom />}/>
            </Routes>
      </BrowserRouter>
    );
}

export default App;

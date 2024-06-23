import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBase from "./pages/PaginaBase";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";
import PaginaInicial from "./pages/PaginaInicial";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function AppRoutes(){
 return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
            <Route index element={<PaginaInicial />} />
            <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<PaginaBaseFormulario />}>
                <Route path="/login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro/>} />
            </Route>
        </Routes>
        </BrowserRouter>
 )

}

export default AppRoutes;
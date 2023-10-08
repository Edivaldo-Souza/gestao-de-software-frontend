import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import './style.css';

function TelaInicial() {

    useEffect(()=>{
        document.title = `Home: dev4U()`;
    },[])

    const navigate = useNavigate();

    const redirectToLogin = () => {
        navigate("/login");
    }

    return(
        <div>
        <div className="upper-bar">
                <Link to=''></Link>
                <button onClick={redirectToLogin} className="red-btn">Fazer Login</button>
            </div>
            <div className="demandas-section">
                {/* Conteúdo da página principal aqui */}
            </div>
        <div className="principal-section">
            <h1>Quem somos?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pretium neque. Pellentesque laoreet vel lacus eget tristique. Morbi laoreet nisi quis diam malesuada viverra. Aliquam in ex eu mi venenatis rhoncus. Donec laoreet arcu eros, at interdum massa pharetra id. Sed vehicula et magna in tincidunt. Integer vel dapibus metus, eu faucibus dui.
Integer sed nibh sit amet urna vulputate mollis. Nam aliquet aliquam blandit. Sed pharetra interdum vestibulum. Nulla quis sapien non mauris efficitur laoreet. Suspendisse fermentum volutpat arcu, eget porta lorem pulvinar sit amet. Integer a turpis nunc. </p>
            <h1>Mais coisas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pretium neque. Pellentesque laoreet vel lacus eget tristique. Morbi laoreet nisi quis diam malesuada viverra. Aliquam in ex eu mi venenatis rhoncus. Donec laoreet arcu eros, at interdum massa pharetra id. Sed vehicula et magna in tincidunt. Integer vel dapibus metus, eu faucibus dui.
Integer sed nibh sit amet urna vulputate mollis. Nam aliquet aliquam blandit. Sed pharetra interdum vestibulum. Nulla quis sapien non mauris efficitur laoreet. Suspendisse fermentum volutpat arcu, eget porta lorem pulvinar sit amet. Integer a turpis nunc. </p>
        </div>
    </div>
    );
}

export default TelaInicial
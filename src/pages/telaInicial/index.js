import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import './style.css';

function TelaInicial() {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("home");

    const redirectToLogin = () => {
        navigate("/login");
    }

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        switch (tabName) {
            case "Home":
                navigate("/");
                break;
            case "Feedback":
                navigate("/feedback");
                break;
            case "Fale conosco":
                navigate("/help");
            break;
            default:
                break;
        }
    };

    return(
        <div>
        <div className="upper-bar">
                <div className="tabs">
                    <div
                        className={`tab ${activeTab === "home" ? "active" : ""}`}
                        onClick={() => handleTabClick("home")}
                    >
                        Home
                    </div>
                    <div
                        className={`tab ${activeTab === "outraTela" ? "active" : ""}`}
                        onClick={() => handleTabClick("outraTela")}
                    >
                        Outra Tela
                    </div>
                    
                </div>
                <button onClick={redirectToLogin} className="red-btn">Fazer Login</button>
            </div>
            <div className="demandas-section">
                {/* Conteúdo da página principal aqui */}
            </div>
        <div className="demandas-section">
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
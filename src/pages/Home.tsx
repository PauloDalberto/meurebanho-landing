import "../styles/utility.css";
import HeroRectangleOne from "../assets/images/rectangleOne.svg";

import "../styles/hero.css";
import Button from "../components/Button";

export default function Home() {
    return (
        <section id="hero" className="home-container">
            <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" className="big-rectangle"/>
            <div className="container hero-infos">
                <p className="desktop-only">Olá, venha conhecer a</p>
                <h1 className="title">
                    Solução ideal para o produtor rural
                </h1>
                <p>
                    O Aplicativo necessário para gestão reproducional e controle de animais.
                </p>
                <div className="container-buttons">
                    <span>
                        <Button text="Cadastre-se" />
                    </span>
                    <span className="desktop-only">
                        <Button text="Veja mais" secondary />
                    </span>
                </div>
            </div>
        </section>
    );
}

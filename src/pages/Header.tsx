import { useState } from "react";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="container py-sm">
      <nav className="flex items-center header">
        <img src={'./meu-rebanho.svg'} alt="Logo Meu Rebanho" className="logo" width={200} height={90} />

        <div className="tab-nav">
          <ul className="flex gap-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#solution">Soluções</a>
            </li>
            <li>
              <a href="#testimonials">Depoimentos</a>
            </li>
            <li>
              <a href="#pricing">Preços</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>

        <div className="buttons flex items-center ml-lg gap-2">
          <a className="reverse-color " href="">
            Login
          </a>
          <Button text="Cadastre-se" />
        </div>

        <div className="mobile-menu">
          {showMobileMenu ? (
            <div className="mobile-menu-content">
              <div className="container flex">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#solution">Soluções</a>
                  </li>
                  <li>
                    <a href="#testimonials">Depoimentos</a>
                  </li>
                  <li>
                    <a href="#pricing">Preços</a>
                  </li>
                  <li>
                    <a href="#contact">Contato</a>
                  </li>
                  <li>
                    <a className="reverse-color" href="#">
                      Login
                    </a>
                  </li>
                </ul>
                <span
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="btn-wrapper"
                >
                  <img
                    src={Close}
                    alt="ícone fechar menu"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>
          ) : (
            <span
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="btn-wrapper"
            >
              <img src={Menu} alt="ícone menu" width={24} height={24} />
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}

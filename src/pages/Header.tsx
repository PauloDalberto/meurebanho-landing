import { useState } from "react";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import Nav from "../components/Nav";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="container py-sm">
      <nav className="flex items-center header">
        <img src={'./meu-rebanho.svg'} alt="Logo Meu Rebanho" className="logo" width={200} height={90} />

        <div className="tab-nav">
          <Nav horizontal/>
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
                <Nav mobile/>
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

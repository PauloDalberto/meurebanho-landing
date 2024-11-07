import { CheckIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import '../styles/plans.css';

export default function Plans(){
  return(
    <section className="plans-container" id="plans">
      <header className="plans-header">
        <h3>Planos e preços</h3>
        <h1>Nossos planos</h1>
      </header>

      <section className="plans-cards">
        <div className="price-card">
          <span>
            <h3>Basico</h3>
            <p>Baixe o ferramenta e comece a utilizar agora mesmo!</p>
          </span>

          <div className="price-button">
            <h1>Grátis</h1>
            <Button text="Baixe agora" secondary />
          </div>

          <hr />

          <div className="benefits">
            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Com anúncios</p>
            </div>

            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Até 10 produtos por dia</p>
            </div>

            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Utilize sem limitação</p>
            </div>
          </div>
        </div>

        <div className="price-card premium">
          <p className="decoration-plans">
            1 mês grátis
          </p>

          <span>
            <h3>Premium</h3>
            <p>Para quem deseja utilizar nossa ferramenta sem limitações!</p>
          </span>

          <div className="price-button">
            <h1>R$ 99,90 <p>/mês</p></h1>
            <Button text="Baixe agora" />
          </div>

          <hr />

          <div className="benefits">
            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Sem interrupção de anúncios</p>
            </div>

            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Utilize quantas vezes quiser</p>
            </div>

            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Utilize todos os produtos disponíveis na plataforma</p>
            </div>
          </div>
        </div>



        <div className="price-card">
          <span>
            <h3>Empresarial</h3>
            <p>Utilize nossa soiução na sua empresa. Aprimore seu fluxo.</p>
          </span>

          <div className="price-button">
            <h1>R$ 59,90 <p>/mês</p></h1>
            <Button text="Baixe agora" secondary/>
          </div>

          <hr />

          <div className="benefits">
            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Com anúncios</p>
            </div>

            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Até 10 produtos por dia</p>
            </div>

            <div className="benefits-content">
              <CheckIcon className="benefits-icon"/>
              <p>Utilize sem limitação</p>
            </div>
          </div>
        </div>

      </section>
    </section>
  )
}
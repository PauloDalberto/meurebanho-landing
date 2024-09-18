import '../styles/footer.css';

export default function Footer(){
  return(
    <footer className='footer'>
      <div className='social-medias'>
        <h2>Contate-nos</h2>
        <div className="medias">
          <img src="./facebook.svg" alt="facebook" />
          <img src="./instagram.svg" alt="instagram" />
          <img src="./youtube.svg" alt="youtube" />
        </div>
      </div>

      <div className='all-features'>
      <div className="features">
          <h2>Navegação</h2>
          <div className='features-itens'>
            <span>Sobre nós</span>
            <span>Faça parte do time</span>
            <span>Blog</span>
          </div>
        </div>
        <div className="features">
          <h2>Empresa</h2>
          <div className='features-itens'>
            <span>Sobre nós</span>
            <span>Faça parte do time</span>
            <span>Blog</span>
          </div>
        </div>
        <div className="features">
          <h2>Funcionalidades</h2>
          <div className='features-itens'>
            <span>Marketing</span>
            <span>Análise de propriedade</span>
            <span>Boot discord</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
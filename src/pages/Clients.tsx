import '../styles/clients.css';

export default function Clients(){
  return(
    <section className='clients-container' id='testimonials'>
      <div className='clients'>
        <div className='clients-text'>
          <span>Conselho de quem já adquiriu</span>
          <h2>Cada cliente é especial</h2>
          <p>Cada cliente é especial e traz uma história única. Reconhecer essa individualidade é essencial para criar experiências personalizadas e resolver conflitos. Ao focar nas necessidades específicas de cada pessoa, as empresas podem construir relacionamentos duradouros e aumentar a lealdade, transformando cada interação em uma oportunidade valiosa.</p>
        </div>

        <div className='clients-card'>
          <div className='card-content'>
            <img src="./ft1.png" alt="foto do cliente" className='client-picture'/>
            <p>"Surpreendente em todos os aspectos! A qualidade é de primeira, e o produto cumpre exatamente o que promete. Valeu cada centavo e certamente voltarei a comprar."</p>
            <img src="./4stars.svg" alt="classificação 4 estrelas" className='client-starts'/>
            <div>
              <span>Joao Silva</span>
              <p>Empresário</p>
            </div>
          </div>
          <div className='card-content'>
            <img src="./ft2.png" alt="foto do cliente" className='client-picture'/>
            <p>"Estou extremamente satisfeito com o produto! A qualidade é realmente impressionante, supera todas as expectativas. Não só é funcional, mas também durável. Recomendo para quem busca algo de confiança."</p>
            <img src="./5stars.svg" alt="classificação 5 estrelas" className='client-starts'/>
            <div>
              <span>Idemar</span>
              <p>Agricultor e Plestrante</p>
            </div>
          </div>
          <div className='card-content'>
            <img src="./ft3.png" alt="foto do cliente" className='client-picture'/>
            <p>"Produto de excelente qualidade, entrega rápida e atendimento impecável. Dá para perceber o cuidado com os detalhes. Com certeza, farei novas compras no futuro!"</p>
            <img src="./5stars.svg" alt="classificação 5 estrelas" className='client-starts'/>
            <div>
              <span>Genório Santos</span>
              <p>Empresário</p>
            </div>
          </div>
          <div className='card-content'>
            <img src="./ft4.png" alt="foto do cliente" className='client-picture'/>
            <p>"A qualidade é excepcional! O produto chegou em perfeito estado e tem um acabamento impecável. Fiquei muito feliz com a minha compra e recomendo para todos que procuram algo de alto nível."</p>
            <img src="./5stars.svg" alt="classificação 5 estrelas" className='client-starts'/>
            <div>
              <span>Vitor Lisboa</span>
              <p>Peão</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
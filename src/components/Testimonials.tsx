import '../styles/testimonials.css'

export default function Testimonials(){
  return(
    <div className='clients-card'>
      <div className='card-content'>
        <img src="./ft1.png" alt="foto do cliente" className='client-picture'/>
        <p>"Estou extremamente satisfeito com o aplicativo! Ele facilita muito a gestão do meu rebanho e a interface é intuitiva. Supera todas as expectativas e recomendo para quem busca eficiência no manejo diário."</p>
        <img src="./4stars.svg" alt="classificação 4 estrelas" className='client-starts'/>
        <div>
          <span>Joao Silva</span>
          <p>Empresário</p>
        </div>
      </div>

      <div className='card-content'>
        <img src="./ft2.png" alt="foto do cliente" className='client-picture'/>
        <p>"Aplicativo de excelente qualidade, rápido e muito útil no controle do rebanho. Dá para ver o cuidado com os detalhes e a precisão dos dados. Com certeza, continuarei usando e recomendando!"</p>
        <img src="./5stars.svg" alt="classificação 5 estrelas" className='client-starts'/>
        <div>
          <span>Idemar</span>
          <p>Agricultor e Plestrante</p>
        </div>
      </div>

      <div className='card-content'>
        <img src="./ft3.png" alt="foto do cliente" className='client-picture'/>
        <p>"O aplicativo é excepcional! Ele me ajuda a acompanhar a saúde e produção do gado com muita facilidade. Fiquei muito satisfeito com a funcionalidade e recomendo para todos que trabalham no setor."</p>
        <img src="./5stars.svg" alt="classificação 5 estrelas" className='client-starts'/>
        <div>
          <span>Genório Santos</span>
          <p>Empresário</p>
        </div>
      </div>

      <div className='card-content'>
        <img src="./ft4.png" alt="foto do cliente" className='client-picture'/>
        <p>"Surpreendente em todos os aspectos! O controle do gado ficou muito mais organizado. O app é fácil de usar e atende perfeitamente às minhas necessidades. Valeu cada centavo e recomendo a todos!"</p>
        <img src="./5stars.svg" alt="classificação 5 estrelas" className='client-starts'/>
        <div>
          <span>Vitor Lisboa</span>
          <p>Peão</p>
        </div>
      </div>
      
    </div>
  )
}
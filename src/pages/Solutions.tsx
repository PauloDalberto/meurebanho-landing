import '../styles/solutions.css';
import Card from '../components/Card';

export default function Solutions(){
  return(
    <section className="card-container" id='solution'>
      <div className='card-texts'>
        <span>Soluções</span>
        <h1>Para a sua gestão de gado leiteiro</h1>
        <p>Tecnologia é o que resume o futuro! A <span>AgroRural</span> atua no ramo de gado leiteiro com o objetivo de trazer inovação, facilidade e a melhor experiência para o produtor rural.</p>
      </div>

      <Card />
    </section>
  )
}
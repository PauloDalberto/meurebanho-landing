import { CheckCircleIcon } from '@heroicons/react/24/outline'
import '../styles/solutions.css';

export default function Card(){
  return(
    <section className="card-container" id='solution'>
      <div className='card-texts'>
        <span>Soluções</span>
        <h1>Para a sua gestão de gado leiteiro</h1>
        <p>Tecnologia é o que resume o futuro! A <span>AgroRural</span> atua no ramo de gado leiteiro com o objetivo de trazer inovação, facilidade e a melhor experiência para o produtor rural.</p>
      </div>

      <div className="card">
        <div className='product'>
          <CheckCircleIcon className='icon' />
          <h3>Melhor tecnologia</h3>
          <p>Utilizamos as mais recentes inovações para garantir alta performance, segurança e eficiência. Nossas soluções tecnológicas são desenvolvidas para otimizar seus processos e oferecer uma experiência adaptada às necessidades do seu negócio.</p>
        </div>
        <div className='product'>
          <CheckCircleIcon className='icon'/>
          <h3>Maior confiabilidade</h3>
          <p>Nossa infraestrutura robusta garante máxima disponibilidade e estabilidade. Com sistemas altamente seguros e eficientes, oferecemos uma operação confiável para que você possa focar no que realmente importa..</p>
        </div>
        <div className='product'>
          <CheckCircleIcon className='icon'/>
          <h3>Melhor suporte</h3>
          <p>Nossa equipe de especialistas está sempre pronta para ajudar. Oferecemos suporte técnico personalizado e eficiente, garantindo soluções rápidas e eficazes para qualquer desafio que você enfrentar.</p>
        </div>
      </div>
    </section>
  )
}
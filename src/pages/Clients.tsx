import Testimonials from '../components/Testimonials';
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

        <Testimonials />
      </div>
    </section>
  )
}
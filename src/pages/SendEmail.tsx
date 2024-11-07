import Button from '../components/Button'
import '../styles/sendEmail.css'

export default function SendEmail(){
  return(
    <div className='sendEmail-container'>
      <div className='sendEmail-header'>
        <span>Envie sua dúvida</span>
        <h1>Entre em contato</h1>
        <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos.Estamos à disposição para responder.</p>
      </div>

      <div className='inputs'>
        <input type="text" placeholder='Seu Melhor Email'/>
        <input placeholder='Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?'/>
        <Button text='Enviar'/>
      </div>
    </div>
  )
}
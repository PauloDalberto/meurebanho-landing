import { useState } from 'react';
import Button from '../components/Button';
import '../styles/sendEmail.css';

export default function SendEmail() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const body = JSON.stringify({
      toMail: email,
      content: message,
    });
  
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`,
        },
        body: body,
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro ao enviar e-mail:', errorText);
      } else {
        console.log('E-mail enviado com sucesso!');
      }
  
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
  

  return (
    <div className='sendEmail-container' id='sendEmail'>
      <div className='sendEmail-header'>
        <span>Envie sua dúvida</span>
        <h1>Entre em contato</h1>
        <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.</p>
      </div>

      <form className='inputs' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Seu Melhor Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder='Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button text='Enviar' type="submit" />
      </form>
    </div>
  );
}

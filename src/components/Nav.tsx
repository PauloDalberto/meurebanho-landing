import '../styles/nav.css'

interface INavProps {
  horizontal?: boolean
  mobile?: boolean
}

export default function Nav({ horizontal, mobile }: INavProps){
  return(
    <ul className={horizontal ? "horizontal" : "vertical"}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#solution">Soluções</a>
      </li>
      <li>
        <a href="#testimonials">Depoimentos</a>
      </li>
      <li>
        <a href="#footer">Contato</a>
      </li>
      <li>
        <a href="#plans">Planos</a>
      </li>
      {mobile && 
        <li>
          <a className="reverse-color" href="#">
            Login
          </a>
        </li>
      }
    </ul>
  )
}
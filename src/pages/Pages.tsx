import Solutions from "./Solutions";
import Clients from "./Clients";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Plans from "./Plans";

export default function Pages(){
  return(
    <>
      <Header />    
      <Home />
      <Solutions />
      <Clients />
      <Plans />
      <Footer />
    </>
  )
}
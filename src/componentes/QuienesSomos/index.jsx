import "./quienesSomos.css"
import Fondo1 from "../../assets/img/pincel.png"
function QuienesSomos() {
    return (
  <section className="about-services" id="cursos">
    <div className="contenedor">
      <h2 className="titulo">CONOCE DE NUESTROS CURSOS ONLINE</h2>
      <div className="servicio-cont">
        <div className="servicio-ind">
          <p>Este curso es Completo porque cubre el total del viaje del ilustrador
                            frente al miedo y el bloqueo creativo. Es perfecto tanto para
                            gente con 0 , un poco, o mucha experiencia.
                            
                            La experiencia
                            no importa cuando creamos desde el corazón.
                            Conviértete en un ilustrador sin miedos y re-enamóra</p>
          <img src={Fondo1} alt=""/>
        </div>
      </div>
    </div>
  </section>
    );
  }
  
  export default QuienesSomos;
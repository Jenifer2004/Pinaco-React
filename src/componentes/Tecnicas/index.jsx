import "./tecnicas.css"
import acuarela from "../../assets/img/acuarelas.png"
import vinilo from "../../assets/img/vinilos.png"

function Tecnicas() {
    return(
        <section className="contenedor tecnicas" id="acerca">
            <p>En Pinaco utilizamos principalmente dos técnicas de pintura,<br />acuarela 
            y vinilos, porque son recursivas, de fácil acceso, además<br />son económicas; 
            con estas podrás hacer tus propias obras de arte.</p>
            <h2 className="titulo">TÉCNICAS</h2>
            <div className="contenedor-tecnicas">
                <div className="contenido-textos">
                    <img src={acuarela} className="tamaño1"/> 
                    <img src={vinilo} className="tamaño2"/>        
                </div>
            </div>
        </section>
    );
}
export default Tecnicas;
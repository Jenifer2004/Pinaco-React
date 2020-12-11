import "./metodologias.css"
import mano from "../../assets/img/pinceles.png"


function Metodologias() {
    return(
        <section className="contenedor metodologias" id="acerca">
            <h2 className="titulo">METODOLOGÍA</h2>
            <div className="contenedor-metodologias">
                <div className="contenido-textos">
                    <p>Te acompañamos a expresar y comunicar por medio de la pintura tu 
                        pasión por el arte;<br />en Pinaco irás subiendo de nivel a medida 
                        escoger cual de las dos técnicas principales de pintura te gusta más.</p>
                    <button 
                    data-toggle="modal"
                    data-target="#registro"
                    className="btnMetodología"
                    >Ingresar</button>
                    <img src={mano} className="tamaño1"/>         
                </div>
            </div>
        </section>
    );
}
export default Metodologias;
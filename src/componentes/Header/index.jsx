import "./header.css"
import logo_header from "../../assets/img/logoHeader.png"


function Header() {
    return(
    <header id="inicio">
        <div className="toggle">
        </div>
        <div><img src={logo_header}  className="logo"/></div>
        <nav>
            <div className="items">
                <a href="#tecnicas">Técnicas</a>
                <a href="#metologia">Metodología</a>
                <a href="#quienesomos">¿Quienes somos?</a>
                <a href="#conocenos">Conócenos</a>
                <a href="#museo">Museo</a>
            </div>
        </nav>
    <section className="textos-header">
<h1 className="pintura">PINTURA</h1>
<h1 className="paratodos">PARA TODOS</h1>
    </section>
    </header>
    );
}

export default Header;
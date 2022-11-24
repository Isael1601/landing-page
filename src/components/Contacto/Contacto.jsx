import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import {Row, Col} from "react-bootstrap";

const Contacto = () => {
    return(
        <>
        <NavBar />

        <div className="info">
                <h3 className="text-center m-5 mt-2">Te mereces un alto nivel de atención por parte de un Otorrinolaringólogo de vanguardia, por lo que el Dr. Jorge Treviño Garza especialista en padecimiento de los oídos esta para servite.</h3>
                <h4 className="text-center m-5">Contactanos</h4>
                <Row>
                    <Col className="text-center m-5 mt-0">
                        <h5>Agenda una consulta por whatsapp al número 8115448285 o mediante una llamada al  8183475220 nuestro correo: jorgetrega@gmail.com Lunes a Sábado 9:00 a 19:00 hrs.</h5>
                    </Col>
                    <Col className="text-center m-5 mt-0">
                        <h5>Visítanos para que seas atendido con la atención que te mereces en Centro de Especialidades Médicas 1er piso consultorio 126 José Benítez No 2704 Colonia obispado Monterrey NL CP 64060</h5>
                    </Col>
                </Row>
            </div>

        <Footer />
        
        </>
    )
};

export default Contacto;
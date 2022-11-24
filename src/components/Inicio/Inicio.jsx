import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Row, Col } from "react-bootstrap";
import "../Inicio/inicio.scss";

const Inicio = () => {
    return(
        <>
            <NavBar />

            <div className="jumbotron">
                <h1 className="text-center"><b>Dr. Jorge Treviño Garza</b></h1>
                <p className="text-center">Médico Otorrinolaringólogo en Monterrey <br/> cuenta con especialidad en Cirugía Plástica Facial,<br/>es un médico que constantemente se actualiza<br/>con el fin de mejorar sus servicios a los pacientes.
                </p>
            </div>

            <div className="servicios">
                <h3>Servicios medicos</h3>
                <ul>
                    <li>Consulta</li>
                    <li>Radiofrecuencia de Cornetes</li>
                    <li>Cirugía endoscópica para sinusitis</li>
                    <li>Cirugía de Tabique nasal</li>
                    <li>Endoscopia Nasal</li>
                    <li>Otorrinolaringología Pediátrica</li>
                </ul>
            </div>

            <div className="info">
                <h2 className="text-center m-5 mt-2">Te mereces un alto nivel de atención por parte de un Otorrinolaringólogo de vanguardia, por lo que el Dr. Jorge Treviño Garza especialista en padecimiento de los oídos esta para servite.</h2>
                <h3 className="text-center m-5">Contactanos</h3>
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

export default Inicio;
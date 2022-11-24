import { Row, Col, Card} from 'react-bootstrap';
import Medico from '../assets/medico.svg';
import '../Footer/footer.scss';

const Footer = () => {
    return(
        <Row xs={1} md={3} className="footer">
            <Col>
                <Card.Img className='marca' src={Medico} alt='medico' />            
            </Col>

            <Col className='text-center m-0'>
                <Card.Title>Dr. Jorge Treviño, médico Otorrinolaringólogo, es ahora uno de los médicos más importantes en su campo gracias a su contribución a la investigación y la prevención.</Card.Title>
            </Col>

            <Col className='redes'>
            <Card.Title className='conoceme'>Da clic para contactarnos y para saber más sobre él</Card.Title>
                <Card.Link id="red" className="fa-brands fa-facebook"  href="#"></Card.Link>
                <Card.Link id="red"  className="fa-brands fa-linkedin"  href="#"></Card.Link>
                <Card.Link id="red"  className="fa-brands fa-whatsapp"  href="#"></Card.Link>
            </Col>
            
        </Row>
);
    
};

export default Footer;
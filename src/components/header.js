
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import logo from './logo-lytex.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
  return (
    <div className='header-doc-lytex'>
      <Row>
        <Col xs lg="3" className='content-logo-lytex'><img src={logo} className="lytex-logo" alt="logo" /></Col>
        <Col xs lg="3"></Col>
        <Col xs lg="6">
            <Nav defaultActiveKey="/home" as="ul" className='content-nav-menu'>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Lytex Pagamentos</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Sobre a Lytex</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Documentação</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Login</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
      </Row>
      <style jsx>{`
        .header-doc-lytex {
            background: #004cff;
        }
        .content-logo-lytex.col-lg-3.col {
            padding: 10px 10px 10px 48px;
        }
        ul.content-nav-menu.nav > li a {
            color: white;
            font-size: 15px;
            font-weight: 600;
        }
        .col-lg-6.col {
            display: flex;
            align-content: center;
            align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Header;


/*

<img src="https://pay.lytex.com.br/assets/media/logos/lytex_logo_white.svg" alt="description of image" />
<img src={logo} className="App-logo" alt="logo" />
*/
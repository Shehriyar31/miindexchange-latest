import { Container, Row, Col, Button } from 'react-bootstrap';
import CustomCursor from '../CustomCursor';

function NotFound() {
  return (
    <>
      <CustomCursor />
      <div className="error-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={6} md={8} className="text-center">
            <div className="error-content">
              <div className="error-404">
                <span className="error-number">4</span>
                <span className="error-number">0</span>
                <span className="error-number">4</span>
              </div>
              
              <h1 className="error-title">Page Not Found</h1>
              
              <p className="error-message">
                Sorry, the page you are looking for doesn't exist or has been moved.
              </p>
              
              <div className="error-actions">
                <Button 
                  className="btn-primary-custom me-3"
                  onClick={() => window.location.href = '/'}
                >
                  <i className="bi bi-house me-2"></i>
                  Go Home
                </Button>
                
                <Button 
                  className="btn-outline-light"
                  onClick={() => window.history.back()}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Go Back
                </Button>
              </div>
              
              <div className="error-contact">
                <p>Need help finding something?</p>
                <Button 
                  className="get-account-btn"
                  onClick={() => window.open('https://wa.me/923061823657?text=Hi, I need help navigating 1MindExch website', '_blank')}
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Contact Support
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default NotFound;
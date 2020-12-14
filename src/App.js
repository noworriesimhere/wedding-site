import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <>
      <main className='py-3 vh-100 text-center d-flex flex-column justify-content-center'>
        <Container>
          <h1 className='hero--title'>Our Wedding</h1>
        </Container>
      </main>
      <Header />
      <Footer />
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './css/App.css';
import HomeScreen from './screens/HomeScreen';
import RsvpScreen from './screens/RsvpScreen';
import ZoomScreen from './screens/ZoomScreen';
import CommentScreen from './screens/ZoomScreen';

function App() {
  return (
    <Router>
      <main className='py-3'>
        <Hero />
        <Header />
        <Container>
          <Route path='/zoom' component={ZoomScreen} />
          <Route path='/rsvp' component={RsvpScreen} />
          <Route path='/comments/:id' component={CommentScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './css/App.css';
import HomeScreen from './screens/HomeScreen';
import GuestbookScreen from './screens/GuestbookScreen';
import ZoomScreen from './screens/ZoomScreen';
import CommentScreen from './screens/CommentScreen';
import OurstoryScreen from './screens/OurstoryScreen';

function App() {
  return (
    <Router>
      <Hero />
      <div className='vh-100 d-flex flex-column justify-content-between'>
        <Header />
        <Container>
          <Route path='/our-story' component={OurstoryScreen} />
          <Route path='/watch-live' component={ZoomScreen} />
          <Route path='/guestbook' component={GuestbookScreen} />
          <Route path='/comments/:id' component={CommentScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

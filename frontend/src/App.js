import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components//hero/Hero';
import './App.css';
import HomeScreen from './screens/home/HomeScreen';
import GuestbookScreen from './screens/guestbook/GuestbookScreen';
import ZoomScreen from './screens/zoom/ZoomScreen';
import CommentScreen from './screens/comment/CommentScreen';
import OurstoryScreen from './screens/ourstory/OurstoryScreen';
import RsvpScreen from './screens/rsvp/RsvpScreen';

function App() {
  return (
    <Router>
      <Hero />
      <div className='vh-100 d-flex flex-column justify-content-between'>
        <Header />
        <Container>
          <Route path='/rsvp' component={RsvpScreen} />
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


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './MyComponents/Footer/Footer';
import Header from './MyComponents/Header/Header';
import AboutPage from './Pages/AboutPage';
import CheckDiets from './Pages/CheckDiets';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/checkdiets" element={<CheckDiets/>}/>
        </Routes>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;

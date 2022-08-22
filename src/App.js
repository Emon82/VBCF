import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Footer from './Component/Footer/footer';
import Header from './Component/Header/header';
import Home from './Component/Home/Home';
import MeetTheTeam from './Component/MeetTheTeam/MeetTheTeam';
import PostDetails from './Component/PostDetails/PostDetails';
import Program from './Component/Program/Program';
import WhatWeDo from './Component/What_we_do/WhatWeDo';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <div class="mainContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Program" element={<Program />} />
            <Route path="/postDetails/:id" element={<PostDetails />} />
            <Route path="/what_we_do" element={<WhatWeDo />} />
            <Route path="/about" element={<About />} />
            <Route path='/meettheteam' element={<MeetTheTeam />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
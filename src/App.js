// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Contact from './pages/Contact';
// import HomePage from './pages/HomePage';
// import './style.css';

// const App = () => {
//   return (
    
//     <Router>
//       <Routes>
//         <Route exact path="/">
//           <HomePage />
//         </Route>
//         <Route exact path="/contact">
//           <Contact />
//         </Route>
//         {/* <Route exact path="/details">
//           <HomePage />
//         </Route> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
import Contact from "./Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
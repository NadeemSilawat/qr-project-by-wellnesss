import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Groups21 from './components/student/Groups21';
import Groupoa6 from './components/student/Groupoa6';
import Groupdcf from './components/student/Groupdcf';
import GroupArc from './components/student/GroupArc';
import Groupkcz from './components/student/Groupkcz';
import Groupyxi from './components/student/Groupyxi';
import Group23v from './components/student/Group23v';
import GroupkcB from './components/student/GroupkcB';
import Grouptmk from './components/faculty/Grouptmk';
import Groupsrk from './components/faculty/Groupsrk';
import GroupBlt from './components/faculty/GroupBlt';
import GroupTbg from './components/faculty/GroupTbg';
import Group2gb from './components/faculty/Group2gb';
import GroupSrx from './components/faculty/GroupSrx';
import Groupclb from './components/faculty/Groupclb';


import Footer from './components/Footer';

// const styles = {
//   navbar: {
//     display: 'flex',
//     gap: '20px',
//     padding: '2px',
//     backgroundColor: '#4CAF50',
//     backgroundImage:
//       "url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop')",
//   },
//   link: {
//     color:
//       "url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop')",
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
//   pageContent: {
//     padding: '20px',
//   },
// };

function App() {
  return (
    <ErrorBoundary>

      <Navbar />
      <Router>
        {/* Navigation hidden but routes still work */}
        <nav className="">
          {[  
            { name: 'Group 21', path: '/Groups21' },
            { name: 'Group OA6', path: '/Groupoa6' },
            { name: 'Group DCF', path: '/Groupdcf' },
            { name: 'Group Arc', path: '/GroupArc' },
            { name: 'Group KCZ', path: '/Groupkcz' },
            { name: 'Group YXI', path: '/Groupyxi' },
            { name: 'Group 23V', path: '/Group23v' },
            { name: 'Group KCB', path: '/GroupkcB' },
            { name: 'Group TMK', path: '/Grouptmk' },
            { name: 'Group SRK', path: '/Groupsrk' },
            { name: 'Group BLT', path: '/GroupBlt' },
            { name: 'Group TBG', path: '/GroupTbg' },
            { name: 'Group 2GB', path: '/Group2gb' },
            { name: 'Group SRX', path: '/GroupSrx' },
            { name: 'Club', path: '/Groupclb' },
          ].map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="
                text-white font-semibold px-3 py-1 rounded-lg
                transition
                text-xs sm:text-sm md:text-base
                shadow-sm
              "
              style={{
                textDecoration: 'none',
              }}
            >
              {route.name}
            </Link>
          ))}
        </nav>
        <Routes>
          <Route path="/" element={<Groups21 />} />
          <Route path="/Groups21" element={<Groups21 />} />
          <Route path="/Groupoa6" element={<Groupoa6 />} />
          <Route path="/Groupdcf" element={<Groupdcf />} />
          <Route path="/GroupArc" element={<GroupArc />} />
          <Route path="/Groupkcz" element={<Groupkcz />} />
          <Route path="/Groupyxi" element={<Groupyxi />} />
          <Route path="/Group23v" element={<Group23v />} />
          <Route path="/GroupkcB" element={<GroupkcB />} />
          <Route path="/Grouptmk" element={<Grouptmk />} />
          <Route path="/Groupsrk" element={<Groupsrk />} />
          <Route path="/GroupBlt" element={<GroupBlt />} />
          <Route path="/GroupTbg" element={<GroupTbg />} />
          <Route path="/Group2gb" element={<Group2gb />} />
          <Route path="/GroupSrx" element={<GroupSrx />} />
          <Route path="/Groupclb" element={<Groupclb />} />
        </Routes>
      </Router>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;

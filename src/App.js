import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Userlist from './component/userlist/Userlist';
import Interest from './component/interests/Interest';
import Timing from './component/Timimg/Timing';
import Admin_Page from './component/login/Admin_Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Admin_Page />} />
          <Route path="/user" element={<Userlist />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/timing" element={<Timing />} />
          {/* <Route path="/report" element={<Report />} />
          <Route path="/review" element={<Reviews />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

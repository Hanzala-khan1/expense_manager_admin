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
import Budget from './component/Budget/Budget'
import Transaction from './component/transaction/Transaction';
import Currency_type from './component/Currency_type/Currency_type' 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Admin_Page />} />
          <Route path="/user" element={<Userlist />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/timing" element={<Timing />} />
          <Route path="/budget" element={<Budget />} />
          <Route path='/transaction' element={<Transaction />} />
          <Route path='/currency' element={<Currency_type />} />
          {/* <Route path="/report" element={<Report />} />
          <Route path="/review" element={<Reviews />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

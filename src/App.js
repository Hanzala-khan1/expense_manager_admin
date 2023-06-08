import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Userlist from './component/userlist/Userlist';
import Interest from './component/Categories/Interest';
// import Timing from './component/Timimg/Timing';
import Admin_Page from './component/login/Admin_Page';
import Budget from './component/Budget/Budget'
import Transaction from './component/transaction/Transaction';
import Currency_type from './component/Currency_type/Currency_type'
function App() {

  // Get user object from local storage
  // const user = JSON.parse(localStorage.getItem('user'));
  const ProtectedRoute = ({ children }) => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const user = storedUser;

    if (!user) {
      return <Navigate to="/" />;
    }
    return children;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin_Page />} />
          <Route path="/user" element={
            <ProtectedRoute>
              <Userlist />
            </ProtectedRoute>
          } />
          <Route path="/interest" element={
            <ProtectedRoute>
              <Interest />
            </ProtectedRoute>
          } />
          {/* <Route path="/timing" element={<Timing />} /> */}
          <Route path="/budget" element={
            <ProtectedRoute>
              <Budget />
            </ProtectedRoute>
          } />
          <Route path='/transaction' element={
            <ProtectedRoute>
              <Transaction />
            </ProtectedRoute>
          } />
          <Route path='/currency' element={
            <ProtectedRoute>
              <Currency_type />
            </ProtectedRoute>
          } />
          {/* <Route path="/report" element={<Report />} />
          <Route path="/review" element={<Reviews />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

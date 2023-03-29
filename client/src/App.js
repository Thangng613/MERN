import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import './App.css'
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/login' Component={(props) => <Auth {...props} authRoute='login' />} />
          <Route exact path='/register' Component={props => <Auth {...props} authRoute='register' />} />
          <Route path='/dashboard' Component={Dashboard} />
        </Routes>
      </Router>

    </AuthContextProvider>
  )
}

export default App;

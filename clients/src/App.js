import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/layout/Landing';
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import Auth from './views/Auth';
import ProtectedRoute from './components/routing/ProtectedRoute';
import About from './views/About';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/login' Component={(props) => <Auth {...props} authRoute='login' />} />
          <Route exact path='/register' Component={props => <Auth {...props} authRoute='register' />} />
          <Route path='/' element={<ProtectedRoute />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </Router>

    </AuthContextProvider>
  )
}

export default App;

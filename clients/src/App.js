import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/layout/Landing';
import AuthContextProvider from './contexts/AuthContext';
// import Dashboard from './views/Dashboard';
import Auth from './views/Auth';
import ProtectedRoute from './components/routing/ProtectedRoute';
import About from './views/About';
import PostContextProvider from './contexts/PostContext';
import Layout from './views/Layout';
import MenuContextProvider from './contexts/MenuContext';

function App() {
  return (
    <AuthContextProvider>
      <MenuContextProvider>
        <PostContextProvider>
          <Router>
            <Routes>
              <Route exact path='/home' element={<Landing />} />
              <Route exact path='/login' Component={(props) => <Auth {...props} authRoute='login' />} />
              <Route exact path='/register' Component={props => <Auth {...props} authRoute='register' />} />
              <Route path='/' element={<ProtectedRoute />} >
                <Route path='/dashboard' element={<Layout />} />
                <Route path='/about' element={<About />} />
              </Route>
            </Routes>
          </Router>
        </PostContextProvider>
      </MenuContextProvider>
    </AuthContextProvider>
  )
}

export default App;

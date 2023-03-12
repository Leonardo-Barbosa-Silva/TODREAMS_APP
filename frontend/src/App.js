import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import ErrorPage from './pages/Error'


export default function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/home' element={<Dashboard />} />
            <Route exact path='/*' element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

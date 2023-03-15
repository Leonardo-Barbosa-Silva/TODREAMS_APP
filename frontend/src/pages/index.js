import { Routes, Route } from "react-router-dom";
import Main from './Main'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import ErrorPage from './Error'



export default function indexRoutes() {

    return (
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/home' element={<Dashboard />} />
            <Route exact path='/*' element={<ErrorPage />} />
        </Routes>
    )
}
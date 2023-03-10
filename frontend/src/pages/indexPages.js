import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'



export default function indexPages() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/home' element={<Dashboard />}/>
            </Routes>
        </>
    )
}
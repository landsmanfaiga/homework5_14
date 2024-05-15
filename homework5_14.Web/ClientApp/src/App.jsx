import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import AddBookmark from './Pages/AddBookmark';
import MyBookmarks from './Pages/MyBookmarks';
import { UserContextComponent } from './UserContext';
const App = () => {
    return (
        <UserContextComponent>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/addbookmark' element={<AddBookmark />} />
                <Route path='/mybookmarks' element={<MyBookmarks /> } />
            </Routes>
            </Layout>
        </UserContextComponent>
    );
}

export default App;
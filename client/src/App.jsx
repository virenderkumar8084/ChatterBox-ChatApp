import React, {lazy, Suspense, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loaders';
import axios from "axios";
import { server } from "./constants/config";
import {userExists, userNotExists} from "./redux/reducers/auth"
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from 'react-hot-toast';
import {SocketProvider} from "./socket.jsx"
// dynamic import
const Home = lazy(() => import('./pages/Home'));   
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));   
const Groups = lazy(() => import('./pages/Groups'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const ChatManagement = lazy(() => import('./pages/admin/ChatManagement'));
const MessageManagement = lazy(() => import('./pages/admin/MessageManagement'));
const UserManagement= lazy(() => import('./pages/admin/UserManagement'));

const App = () => {
  const {user, loader} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${server}/api/v1/user/me`, {withCredentials: true}).then(({data}) => dispatch(userExists(data.user))).catch((err) => dispatch(userNotExists()));
  }, [dispatch])
  return loader ? <LayoutLoader/> : (
    <Router>
      {/* <span>Header</span> */}
      <Suspense fallback={<div><LayoutLoader></LayoutLoader></div>}>
        <Routes>
          <Route element={<SocketProvider><ProtectRoute user={user} /></SocketProvider>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/chat/:chatId' element={<Chat/>}></Route>
            <Route path='/group' element={<Groups />}></Route>
          </Route>
          <Route path='/login' element={<ProtectRoute user={!user} redirect='/'><Login /></ProtectRoute>}></Route>
          <Route path='/admin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/admin/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/admin/users' element={<UserManagement></UserManagement>}></Route>
          <Route path='/admin/chats' element={<ChatManagement></ChatManagement>}></Route>
          <Route path='/admin/messages' element={<MessageManagement></MessageManagement>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Suspense>
      <Toaster position="bottom-center"/>
    </Router>
  )
}

export default App

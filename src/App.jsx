import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Upload from './pages/upload'
import LandingPage from './pages/landingPage'
import Login from './pages/login'
import Password from './pages/password'
import LogOutAccount from './components/dashboard/logoutAccount'

function App() {

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage />} />
        <Route path='admin/login' element={<Login />} />
        <Route path='admin/dashboard' element={<Upload />} />
        <Route path='admin/change-password' element={<Password />} />
        <Route path='admin/logout' element={<LogOutAccount />} />
      </Route>
      <Route path='*' element={<img className='w-100' style={{height: "100vh"}} src="https://cdn.dribbble.com/users/3692521/screenshots/7955415/downloads/404-01.png" />} />
    </Routes>
  )
}

export default App

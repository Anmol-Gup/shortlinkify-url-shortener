import './App.css'
import Home from './components/Home'
import MyUrls from './components/MyUrls'
import Login from './components/Login'
import RedirectUrl from './components/RedirectUrl'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GenerateUrl from './components/GenerateUrl'
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from './firebase'
import Error from './components/Error'
import Loader from './components/Loader'

function App() {

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, user => {
      (user) ? setUser(user) : setUser(null)
      setIsLoading(false)
      
      return () => unsubscribe()
    })
  }, [])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/url' element={<GenerateUrl user={user} />} />
        <Route path='/url/:shortId' element={<RedirectUrl user={user} />} />
        <Route path='/myurls' element={<MyUrls user={user} />} />
        <Route path='/login' element={<Login user={user} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import Header from './Header'
import UrlForm from './UrlForm'
import Footer from './Footer'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'

const GenerateUrl = ({ user }) => {

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    
    useEffect(() => {
        document.title = 'Generate URL-ShorLinkfy'
    }, [])

    return (<div className='min-h-screen flex flex-col'>
        <Header user={user} />
        <UrlForm user={user} />
        <Footer />
    </div>)
}
export default GenerateUrl
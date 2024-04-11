import Header from "./Header"
import Footer from './Footer'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {app} from '../firebase'
import { Navigate } from 'react-router-dom'
import { useEffect } from "react";

const Login = ({user}) => {
    
    if(user){
        return <Navigate to='/url'></Navigate>
    }

    useEffect(()=>{
        document.title='Login-ShortLinkfy'
    },[])

    const auth=getAuth(app)
    const LoginWithGoogle = async() => {
        try{
            const provider=new GoogleAuthProvider()
            const result=await signInWithPopup(auth,provider)
            return <Navigate to='/url'></Navigate>
        }
        catch(error){
            console.log(error.message)
        }

    }

    return (<div className="min-h-screen flex flex-col">
        <Header />
        <section className="flex-grow flex justify-evenly items-center sm:flex-row flex-col-reverse">
            <div className="mt-[-6rem] sm:mt-0 login flex justify-center items-center flex md:basis-2/4">
                <button type="button" onClick={LoginWithGoogle} className='shadow-lg text-1xl font-semibold flex items-center tracking-widest rounded-full bg-white p-3 border-solid border-black	border-2'>
                    <FcGoogle className="mr-2 text-2xl" />
                    Login With Google
                </button>
            </div>
            <div className="image px-6 md:basis-2/4 flex justify-evenly items-center">
                <img src="login.svg" alt="login" className="lg:w-[30rem] sm:w-80 w-96" />
            </div>
        </section>
        <Footer />
    </div>)
}
export default Login
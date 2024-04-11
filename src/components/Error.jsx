import { NavLink } from "react-router-dom"

const Error=()=>{
    return(<section className="flex justify-center items-center flex-col gap-10 h-screen">
        <img src="error.svg" alt="404 error" className="w-72 md:w-96" />
        <NavLink to='/' className='underline text-sky-500'>Go back to Home</NavLink>
    </section>)
}
export default Error
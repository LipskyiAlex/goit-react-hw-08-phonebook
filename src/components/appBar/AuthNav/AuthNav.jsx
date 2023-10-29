import { NavLink } from "react-router-dom"

export const AuthNav = () => {


    return (

        <>

         <NavLink to='/login'>Sign In</NavLink>
            <NavLink to='/register'>Sign Up</NavLink>
        </> 

    )
}
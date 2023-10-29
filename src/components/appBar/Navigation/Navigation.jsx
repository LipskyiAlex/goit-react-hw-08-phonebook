import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "redux/auth"

export const Navigation = () => {


    const isLogged = useSelector(selectIsLoggedIn);

     return (

        <div>
             <NavLink to='/'>Home</NavLink>
          {isLogged &&<NavLink to='/contacts'>Contacts</NavLink> }

        </div>
     )
}
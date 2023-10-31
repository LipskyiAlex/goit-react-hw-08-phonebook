import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth";
import { Link } from '@mui/material';

export const Navigation = () => {

   
    const isLogged = useSelector(selectIsLoggedIn);

     return (

        <div>
         <Link component={NavLink} to='/' underline='hover' color='inherit' sx={{mr:2, fontSize:'20px'}}>Home</Link>
          {isLogged &&<Link component={NavLink} to='/contacts' underline='hover' color='inherit' sx={{fontSize:'20px'}}>Contacts</Link> }
          
        </div>
     )
}
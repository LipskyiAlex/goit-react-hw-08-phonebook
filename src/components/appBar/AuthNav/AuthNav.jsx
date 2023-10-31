
import { NavLink } from "react-router-dom"
import { Link } from '@mui/material';

export const AuthNav = () => {
  
    return (
        <>
          <Link component={NavLink} to='/login' underline='hover' color='inherit' sx={{mr:2,fontSize:'20px'}}>Sign In</Link>
          <Link component={NavLink} to='/register' underline='hover' color='inherit' sx={{fontSize:'20px'}}>Sign Up</Link>
        </> 

    )
}

// import { NavLink } from 'react-router-dom';


// export const Nav = () => {

//     return <>

//         <NavLink to='/home'> Home </NavLink>
//         <NavLink to='/login'> log in </NavLink>
//         <NavLink to='/allApartments'> all Apartments </NavLink>
//         <NavLink to='/cities'> cities </NavLink>
//         <NavLink to='/categories'> categories </NavLink>
//         <NavLink to='/addApart'> add apartment </NavLink>

//     </>

// }

import { NavLink } from 'react-router-dom';
import '../App.css'; // Ensure to import the CSS file
import { useSelector } from 'react-redux';

export const Nav = () => {

    const currentAdver = useSelector(s => s.currentAdvertiser)

    return (
        <nav>
            <img src="/a.png"></img>
            <NavLink to='/home'> Home </NavLink>
            <NavLink to='/login'> Log In </NavLink>
            <NavLink to='/allApartments'> All Apartments </NavLink>
            <NavLink to='/cities'> Cities </NavLink>
            <NavLink to='/categories'> Categories </NavLink>
            {currentAdver._id && <NavLink to='/addApart'> Add Apartment </NavLink>}
        </nav>
    );
}



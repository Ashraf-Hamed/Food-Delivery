import { jwtDecode } from 'jwt-decode';
import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Profile() {

  let decodedToken  = jwtDecode(localStorage.getItem('userToken'))

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Profile Page" />
      </Helmet>
   
      <table className="table table-bordered table-striped mt-3 w-50 mx-auto">
      <thead>
        <tr>
          <th scope="row">
            Name
          </th>
          <td scope="col" className='fw-bold'> <span className="text-main">{decodedToken.name.toUpperCase()}😎</span></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row ">
          Role :  
          </th>
          <td scope="col" className='fw-bold'> <span className="mx-2 text-main">{decodedToken.role.toUpperCase()}🧑‍💻</span></td>
        </tr>

        <tr>
          <th scope="row">
          
          UserID : 
         
          </th>
          <td scope="col">
          <span className="text-main mx-2 fw-bold">{decodedToken.id.toUpperCase()}📱</span>
          </td>
        </tr>


    
      </tbody>
    </table>

    <Link
            to="/"
            className="btn btn-danger px-3 py-2 btn  fw-bold rounded-2 w-25 mx-auto d-block my-5 "
          >
            Back Home 
          </Link>

     
     
    </>
  );
}

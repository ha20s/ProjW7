import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { useState  , useEffect} from 'react'
import Video from './Video'

function SignIn() {

    const navigate = useNavigate();

    const url = "https://66e7e6a5b17821a9d9da6f39.mockapi.io/login"

    const [user, setUser] = useState({
        name: '',
        email : '',
        pass: ''
    })

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
          alert("Please enter a valid email address");
          return false;
        } 
        return true;
      };

      const validatePass = (pass) => {
        if (pass.length < 8) {
            alert("Please enter more the 8 char");
            return false; 
        } return true ;
      };

    const submit = () => {

        if (!user.name || !user.email || !user.pass) {
            alert("All fields are required!");
            return;
          }

        if(!validateEmail(user.email) || !validatePass(user.pass)){
            return ;
        }



        fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              pass: user.pass,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => 
                console.log(json))
            navigate("/nav");

    }
    


  return (
    <div className='bg-gradient-to-r from-red-50 to-red-200 w-full min-h-screen flex flex-col justify-center items-center '>
    
    <div className=' shadow-xl border-4  rounded-xl lg:w-[50%] w-[80%] sm:w-[70%] p-10 bg-white '>
        <p className=' text-center mb-10 text-2xl '>Welcome in TWQ Videos</p>
        <label htmlFor="">Name:</label>
        <input type="text" value={user.name} className='mb-5 p-2 border-2 rounded w-full ' placeholder='Enter Name'
        onChange={(e)=> {setUser({...user , name: e.target.value})}}/>

        <label htmlFor="" >User Name:</label>
        <input type="text" value={user.email} className='mb-5 p-2 border-2 rounded w-full ' placeholder='Enter Email'
        onChange={e => {setUser({...user , email: e.target.value})}}/>

        <label htmlFor="" >Password:</label>
        <input  value={user.pass}  type="password" className='p-2 border-2 rounded w-full mb-5' placeholder='Enter Password'
        onChange={e => {setUser({...user, pass: e.target.value})}} />

        <button className='border-2 p-2 rounded w-full border-[#FF0000] mb-2 hover:bg-[#FF0000] hover:text-white'
        onClick={submit}>Sign Up</button>
        <Link to="/login" className='text-center  hover:underline '>Already Have Account? Log In </Link>
    </div>
</div>
  )
}


export default SignIn



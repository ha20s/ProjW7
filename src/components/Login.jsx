import {React , useEffect , useState } from 'react'
import { Link , useNavigate} from "react-router-dom";


function Login() {
    const url = "https://66e7e6a5b17821a9d9da6f39.mockapi.io/login"

    useEffect(()=>{
     fetch(url)
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
  setUser(json)
    });
        
    }, [])

const [info, setInfo] = useState({
    email: '',
    pass: '',
})

const [user , setUser] = useState([])

const navigate = useNavigate()

const submit = () => {

    if (!info.email || !info.pass){
        alert ('the fields are required!')
        return;
    }

    if (user.find(user => user.email === info.email && user.pass === info.pass)){
        navigate("/nav")
    } else {
        alert("check the information")
    }


}

  return (
<div className='bg-gradient-to-r from-red-50 to-red-200 w-full min-h-screen flex flex-col justify-center items-center '>
    
    <div className=' shadow-xl border-4  rounded-xl lg:w-[40%] w-[80%] sm:w-[60%] p-10 bg-white '>
        <p className=' text-center mb-10 text-2xl '>Welcome Back in TWQ Videos</p>
        <label htmlFor="" className=' '>Email:</label>
        <input type="text" className='mb-5 p-2 border-2 rounded w-full ' placeholder='Enter Email'
        value={info.email} onChange={(e) => {setInfo ({...info , email: e.target.value})}}/>

        <label htmlFor="" className=''>Password:</label>
        <input type="password" className='p-2 border-2 rounded w-full mb-5' placeholder='Enter Password'
        value={info.pass} onChange={ e => {setInfo ({...info , pass: e.target.value})}} />

        <button className='border-2 p-2 rounded w-full border-[#FF0000] mb-2 hover:bg-[#FF0000] hover:text-white'
        onClick={submit}>Login</button>

        <Link to="/sign" className='text-center  hover:underline '>Don't Have Account? Sign Up </Link>

    </div>
</div>

  )
}

export default Login
import React ,{useEffect, useRef,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const url = `https://detection-server.azurewebsites.net/`
const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        password: "",
        repassword: "",
      });
      const [errorMessage,setErrorMessage] = useState({})
    
      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser((preve) => {
          return {
            ...preve,
            [name]: value.trim(),
          }
        })
      }
    
      const handleRegister = async(e) => {
        e.preventDefault();
        const { email, password, fname, lname, mobile, repassword } = user;
        if (email && password && fname && lname && mobile && password) {
            if (password === repassword) {
              // "http://localhost:8080/register"
               await axios.post(`https://detection-server.azurewebsites.net/register`,user)
              .then((res)=>{
                // setErrorMessage(res)
                alert(res.data.message)
                navigate("/login")
              }) 
              // await fetch(`https://detection-server.azurewebsites.net/register`,{
              //   method : "post",
              //   body : user
              // }).then(res => res.json())
              // .then((data)=>{
              //   console.log(data)
              //   alert(data.data.message)
              //   navigate("/login")

              // })
            }
            else {
              alert("Check Your Password")
            }
        }
        else {
          alert("Enter the Required Fields")
        }
      }

      
     
  return (
    <div>
      <form>
        <label htmlFor='fname'>First Name</label>
        <input type="text" placeholder="First Name" id="fname" name='fname' onChange={handleOnChange} value={user.fname} />

        <label htmlFor='lname'>Last Name</label>
        <input type="text" placeholder="Enter the last" id="lname" name='lname' onChange={handleOnChange} value={user.lname} />

        <label htmlFor='email'>Email Id</label>
        <input type="text" placeholder="Enter the email" id="email" name='email' onChange={handleOnChange} value={user.email} />

        <label htmlFor='Mobile'>Mobile</label>
        <input type="text" placeholder="Enter the Mobile" id="Mobile" name="mobile" onChange={handleOnChange} value={user.mobile} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter the password' name="password" onChange={handleOnChange} value={user.password} />

        <label htmlFor="repassword">Password</label>
        <input type="password" id="repassword" placeholder='Enter the re-password' name='repassword' onChange={handleOnChange} value={user.repassword} />

        <button className='btn' onClick={handleRegister}>Register</button>
        <p className='or'>OR</p>
        <button className="btn" onClick={()=>navigate("/login")}>login</button>
      </form>
    </div>
  )
}

export default Register
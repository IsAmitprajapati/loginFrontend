import React, {useRef,useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const Login = ({setUserLoginSetup}) => {
    const checkEmail = useRef()
    const navigate = useNavigate()

    const [user,setUser] = useState(
      {
        email : "",
        password : "",
      }
    );
    const [errorMessage,setErrorMessage] = useState({})
  
    const handleOnChange = (e)=>{
      const {name,value} = e.target;
        setUser((preve)=>{
          return{
            ...preve,
            [name] : value
          }
        })
  
    }
    
    const handleOnSubmit = async(e) =>{
      e.preventDefault();
      if(checkEmail.current.value){
      }
      else{
        checkEmail.current.focus();
      }
      const {email,password} = user;
      await axios.post("https://detection-server.azurewebsites.net/login/",user)
      .then((res) => {
        setUserLoginSetup(res.data.user)
        alert(res.data.message)
        setErrorMessage(res.user)
        // navigate("/")
        navigate("/");
        // history.push("/login") 
    })
  
      
    }
  return (
    <div>
        <form>
        <label htmlFor="lemail">Email Id</label>
        <input 
          type="email" 
          placeholder="Enter the Email Id" 
          id='lemail' 
          onChange={handleOnChange}
          name="email"
          value={user.email}
          ref={checkEmail}
          />
        
        <label htmlFor='lpassword'>Password</label>
        <input 
          type="password" 
          placeholder="Enter the Password" 
          id="lpassword" 
          onChange={handleOnChange}
          name="password"
          value={user.password}

          />

        <button className="btn" onClick={handleOnSubmit}>Login</button>
                <p className='or'>OR</p>
        <button className="btn" onClick={()=>navigate("/register")}>Register</button>
        </form>
    </div>
  )
}

// Login.propTypes = {}

export default Login
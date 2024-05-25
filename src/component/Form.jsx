import React from 'react'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



 const Form =()=>{
   const initialVal = {
      firstname:"", 
      secondname:"" , 
      username:"", 
      email: "" , 
      password: "" ,
      phoneno:"",
      country: "" , 
      city: "" ,  
      aadharno: "" ,
      panno: "" 
     } ; 
    const [formval , setformval] = useState(initialVal) ; 
    const [errors , setformerror] = useState({}) ;  
   
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();
  
      
     
  
  
    const handleChange = (e) => { 
        const {name , value} = e.target ; 
        setformval({
          ...formval, [name]: value
          
        }); 
        // console.log(formval);
    }
  
    const handleSubmit= (e)=>{
        e.preventDefault() ;
        const validationErrors = validate(formval);
        setformerror(validate(formval))
        if (Object.keys(validationErrors).length === 0) {
          navigate('/details', { state: formval });
        }
       
        
    }
  
  
    const validate =(values) => { 
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.firstname)  errors.firstname = "First name is required" ; 
      if(!values.secondname)  errors.secondname = "Last name is required" ; 
      if(!values.username)  errors.username = "User name is required" ; 
      if(!values.email)  errors.email = "Email  is required" ; 
      else if(!regex.test(values.email)) errors.email = "please enter a valid email" ; 
  
  
      if(!values.password) errors.password = "password is requried" ; 
      // else if(!values.password.length <4) errors.password = "password length is not less than 4";
      // else if(!values.password.length >10) errors.password = "password length is not greater than 10";
  
      if(!values.phoneno) errors.phoneno = "phone number  is required"  ;
      if(!values.country) errors.country = "country  is required"  ;
      if(!values.city) errors.city = "city is required"  ;
      if(!values.aadharno) errors.aadharno = "Aadhar number is required"  ;
      
      if(!values.panno) errors.panno = "pancard number is required"  ;
      
      return errors ; 
      
    }
  
  
    
    
  
  
  
  
  
  
  
  
    return (
      <>
        <div className=" to-slate-700  min-cnt pb-10 flex min-h-screen justify-center align-center ">
        
  
          <div className="  bg-white relative overflow-auto child-cnt mt-16  text-base ">
            <div className="  m-5 p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="">FirstName:</label>
                  <input
                    className='shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"'
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formval.firstname}
                    onChange={handleChange}
                  />
                    <span>{errors.firstname}</span>
                </div>
  
                <div className="req-fields mb-3">
                  <label className="">SecondName:</label>
                  <input
                    className='shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"'
                    type="text"
                    name="secondname"
                    placeholder="Secondname"
                    value={formval.secondname}
                    onChange={handleChange}
                  />
                   <span>{errors.secondname}</span>
                </div>
  
                <div className="req-fields mb-3">
                  <label className="pr-12" htmlFor="">
                    UserName:
                  </label>
                  <input
                    className='shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"'
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formval.username}
                    onChange={handleChange}
                  />
                   <span>{errors.username}</span>
                </div>
  
                <div className="req-fields mb-3">
                  <label className="mr-24" htmlFor="">
                    Email:
                  </label>
                  <input
                    className='shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"'
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formval.email}
                    onChange={handleChange}
                  />
                   <span>{errors.email}</span>
                </div>
  
                <div className="req-fields mb-3">
                  <label className="pr-5" htmlFor="">
                    Password:
                  </label>
                  <input
                    className='shadow appearance-none border rounded 
               py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"'
              type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formval.password}
                    onChange={handleChange}
                  />
                   <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
          </button>
                   <span>{errors.password}</span>
                </div>
  
                <div className="req-fields mb-3">
                  <label className="pr-5" htmlFor="">
                    phoneNo:
                  </label>
                  <input
                    className='shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"'
                    type="text"
                    name="phoneno"
                    placeholder="Phoneno"
                    value={formval.phoneno}
                    onChange={handleChange}
                  />
                   <span>{errors.phoneno}</span>
                </div>
  
                <div className="req-fields mb-3">
                  <label className="pr-5" htmlFor="">
                    Country
                  </label>
                  <select
                    className=" block appearance-none w-full
                     bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 
                     rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    name="country"
                    value={formval.country}
                    onChange={handleChange}
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </select>
                  <span>{errors.country}</span>
                </div>
  
                <div className="req-fields mb-3">
                  <label  htmlFor="">
                    CityName:
                  </label>
                  <select
                    className="block appearance-none w-full bg-white border
                     border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 
                     rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    name="city"
                    value={formval.city}
                    onChange={handleChange}
                  >
                    if{formval.country === "India"  && <>
                  <option value=""></option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                  </>}
                  if{formval.country === "USA" && <> 
                  <option value=""></option>
                  <option value="New York">New York</option>
                  <option value="California">California</option>
                  </>}
                  </select>
                  <span>{errors.city }</span>
                </div>
  
                <div className="req-fields mb-3">
                  <label className="pr-5" htmlFor="">
                    AadharNo:
                  </label>
                  <input
                    className='shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"'
                    type="text"
                    name="aadharno"
                    placeholder="aadharno"
                    value={formval.aadharno}
                    onChange={handleChange}
                  />
                   <span>{errors.aadharno}</span>
                </div>
  
                <div className="req-fields mb-5">
                  <label className="pr-5" htmlFor="">
                    PancardNo:
                  </label>
                  <input
                    className='shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"'
                    type="text"
                    name="panno"
                    placeholder="Panno"
                    value={formval.panno}
                    onChange={handleChange}
                  />
                   <span>{errors.panno}</span>
                </div>
                <button
                  type="submit"
                  className="btn_submit 
            rounded-lg  text-3xl font-light
            bg-gradient-to-br from-slate-300 to-slate-800  text-white w-72"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
export default Form

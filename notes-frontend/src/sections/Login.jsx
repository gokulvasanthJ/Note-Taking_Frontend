import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  NavLink, useLocation, useNavigate } from 'react-router-dom'
import { logIn } from '../Redux/AuthReducer/action'
import { LOGIN_FAILURE, LOGIN_SUCCESSFUL } from '../Redux/AuthReducer/actionTypes'
import Navbar from './Navbar'
import { motion } from 'framer-motion' 
import "./Login.css"
import Glass from './Glass'


const Login = () => {

  const[loginState,setLoginState]=useState({email:"",password:""})
  const dispatch=useDispatch()
  const location=useLocation()
  const toast=useToast()
  const Navigate=useNavigate()

  const comingFrom=location.state?.from?.pathname || "/notes"
 
  const handleChange=(e)=>{

    const {name,value}=e.target 
    setLoginState({...loginState,[name]:value})

 }
 const handleClick=()=>{

  dispatch(logIn(loginState)).then((res)=>{
    if(res.type===LOGIN_SUCCESSFUL){
       toast({
        title: "Login Successful",
        description: "Welcome to notes section. Start writing your notes",
        status: 'success',
        duration: 8000,
        isClosable: true,
        position:"top"
       })
       Navigate(comingFrom)
    }else if(res.type===LOGIN_FAILURE){
      toast({
        title: "Login failed",
        description: "Please try after some time with correct credentials.",
        status: 'error',
        duration: 8000,
        isClosable: true,
        position:"top"
       })
    }
  })

 }
  

  return (
    <motion.div 
     initial={{width:0}}
     animate={{width:"100%"}}
     exit={{x:window.innerWidth,transition:{duration:0.5}}}
    >
      <Navbar/>
      <Glass bgimg={"https://img.freepik.com/free-photo/black-cubes-background-abstract_1123-401.jpg?t=st=1700375371~exp=1700378971~hmac=65955c65e0f4ee0a168d932283a1941b617df25929f072a5169d9a14662a77cc&w=360"}>
      <Text fontSize={"4xl"}>LOGIN</Text>
        <Input width={"350px"} mt="5%" name="email" onChange={handleChange} placeholder="type your email" />
        <Input width={"350px"} type="password" mt="5%" name="password" onChange={handleChange} placeholder="type your Password" />
        <Button size={"lg"} colorScheme="green" onClick={handleClick} display={"block"} m={"auto"} mt="3%">LOGIN</Button>

        <Box mt={"4%"} >
        <NavLink to={"/signup"}><Text fontSize={"large"} color="Highlight">SignUp</Text></NavLink>
        </Box>
      </Glass>
    </motion.div>
  )
}

export default Login
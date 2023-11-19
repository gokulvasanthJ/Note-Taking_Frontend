import { Box } from '@chakra-ui/react'
import React from 'react'
// import NoteInput from '../components/NoteInput'
import NoteList from '../components/NoteList'
import Navbar from './Navbar'
import { motion } from 'framer-motion' 
import NoteInputModal from '../components/NoteInputModal'
// import notesPic from "../assets/notesbg.jpg"
import { useSelector } from 'react-redux'

const NotesApp = () => {


  const notesData=useSelector((store)=>store.appReducer.notesData)

  return (
    <motion.div
     initial={{width:0}}
     animate={{width:"100%"}}
     exit={{x:window.innerWidth,transition:{duration:0.5}}}>
      <Navbar/>
    <Box  backgroundImage={"https://img.freepik.com/free-photo/young-adult-studying-indoors-holding-book-pen-generated-by-ai_188544-54248.jpg?t=st=1700408471~exp=1700412071~hmac=169b664b47ed7d940d334f775beb2e76b131c0841bae42189c7d2bd2c6b8bfae&w=996"} backgroundSize="cover" height={notesData.length>4?"auto":"100vh"} mt={"2%"} width={"100%"} >
   
        <NoteInputModal/>
        <NoteList/>
    </Box>
    </motion.div>
  )
}

export default NotesApp
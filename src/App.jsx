import React from 'react'
import { useState } from 'react'

const App = () => {
  const [task, setTask] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    const copyarr=[...allUsers,task]
    setAllUsers(copyarr)
    setTask('')
    
    
  }


  return (
    <div > 

      <form  className='p-5' onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        className='px-2 py-2 border-2 border-zinc-500'
        
        onChange={(e)=>{
            setTask(e.target.value)

        }}
        value={task}
        />
        
        <button className='px-10 py-3 bg-blue-500 ml-5 rounded-md' >Add</button>

      </form>
      
      <div className='px-4 bg-blue-400'>
          {allUsers.map(function(elem){
            return <h3>{elem}</h3>
          })}
        </div>
    </div>
  )
}

export default App
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEmployee = () => {
    var [users,setUsers] = useState([])

    useEffect(()=>{
 
        axios.get("http://localhost:3005/view")
 
        .then((res)=>{
 
            console.log(res.data)
 
            setUsers(res.data)
 
        })
 
        .catch(err=>console.log(err))
 
    },[])
 
    const deleteValue=(id)=>{
 
        console.log(id)
 
        axios.delete("http://localhost:3005/remove/"+id).
 
        then((response)=>{
 
          alert(response.data)
 
          window.location.reload(false)
 
        }).catch((err)=>console.log(err))
 
    }

  return (
    <div style={{paddingTop:"80px"}}>

<Table>

       <TableHead>

           <TableRow>

               <TableCell>Employee_Name</TableCell>

               <TableCell>Employee_Age</TableCell>

               <TableCell>Employee_Position</TableCell>

               <TableCell>Employee_Salary</TableCell>

           </TableRow>

       </TableHead>

       <TableBody>

           {users.map((val,i)=>{

               return(

                   <TableRow>

                       <TableCell>{val.ename}</TableCell>

                       <TableCell>{val.eage}</TableCell>

                       <TableCell>{val.eposition}</TableCell>

                       <TableCell>{val.esalary}</TableCell>

                       <TableCell>

                       <Button

                       size="small"

                       variant='contained'

                       color='warning'>

                       Update

                       </Button>

                       &nbsp; &nbsp;

                       <Button

                       onClick={()=>deleteValue(val._id)}

                       size="small"

                       variant='contained'

                       color='secondary'>

                       Delete

                       </Button>

                       </TableCell>

                   </TableRow>

               )

           })}

       </TableBody>

   </Table>
        
    </div>
  )
}

export default ViewEmployee
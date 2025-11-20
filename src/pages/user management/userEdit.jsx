import { useEffect, useState } from 'react'



import Select from '../../commonComponent/Select'
import InputFormElement from '../../commonComponent/InputFormElement'
import { useLocation } from 'react-router-dom'

const userData = [{
    label: "First Name",
    id: "firstName",
    type: "text",
      value:"a",
      onChange:"j",
    placeholder: "Enter Your Name",
    required: false
},
{
    label: "Last Name",
    id: "lastName",
    type: "text",
      value:"a",
      onChange:"j",
    placeholder: "Enter Your Name",
    required: false
},
{
    label: "E-mail",
    id: "email",
    type: "email",
       value:"a",
      onChange:"j",
    placeholder: "Enter Your Name",
    required: false
},

]

const SelectBox=[{
    label:"Select Role",
    id:"selectRoles",
    options:[{
        label:"Admin",
        value:"admin"
    },
    {
        label:"Read Only",
        value:"read-only"
    }, {
        label:"Customer",
        value:"customer"
    }]
}]






function UserEdit() {
    const [value, setValue] = useState("");
    const { state:{row} }=useLocation();
    console.log("the role is",row)
    
    useEffect(()=>{
      setValue(row)
    },[])

const data=userData.map((e)=>{
    if(e.id==="firstName"){
        e.value=value.firstName
    }
    if(e.id==="lastName"){
        e.value=value.lastName
    }
    if(e.id==="email"){
        e.value=value.email
    }
})
    console.log(value.roles)

   return (
        <div>
            <div className='text-[28px] font-bold indent-3 mt-4'>Add New User</div>
            <hr className='text-slate-400 mt-8'></hr>
            <div className=' m-auto w-[98%] min-h-[400px] mt-20 bg-white'>
                <form className=' w-[60%]  p-5 flex flex-wrap  gap-5'>
                    {userData.map((items) => (<InputFormElement userData={items} />))}
                    {SelectBox.map((selectData)=>(<Select selectData={selectData} selectedRole={value.roles} />))}
                </form>
            </div>
        </div>
    )
}

export default UserEdit
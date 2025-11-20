import Select from '../../commonComponent/Select'
import InputFormElement from '../../commonComponent/InputFormElement'

const userData = [{
    label: "First Name",
    id: 1,
    type: "text",
    //   value,
    //   onChange,
    placeholder: "Enter Your Name",
    required: false
},
{
    label: "Last Name",
    id: 2,
    type: "text",
    //   value,
    //   onChange,
    placeholder: "Enter Your Name",
    required: false
},
{
    label: "E-mail",
    id: 3,
    type: "email",
    //   value,
    //   onChange,
    placeholder: "Enter Your Name",
    required: false
},
{
    label: "Password",
    id: 4,
    type: "password",
    //   value,
    //   onChange,
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
        value:"read_only"
    }, {
        label:"Customer",
        value:"customer"
    }]
}]






function UserCreation() {
    console.log(userData)
    return (
        <div>
            <div className='text-[28px] font-bold indent-3 mt-4'>Add New User</div>
            <hr className='text-slate-400 mt-8'></hr>
            <div className=' m-auto w-[98%] min-h-[400px] mt-20 bg-white'>
                <form className=' w-[60%]  p-5 flex flex-wrap  gap-5'>
                    {userData.map((items) => (<InputFormElement userData={items} />))}
                    {SelectBox.map((selectData)=>(<Select selectData={selectData} />))}
                </form>
            </div>
        </div>
    )
}

export default UserCreation
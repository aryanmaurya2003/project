import { useEffect, useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const userData = [
  {
    label: "First Name",
    id: "firstName",
    type: "text",
    name: "firstName",
    placeholder: "Enter First Name",
    required: false,
  },
  {
    label: "Last Name",
    id: "lastName",
    type: "text",
    name: "lastName",
    placeholder: "Enter Last Name",
    required: false,
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    name: "email",
    placeholder: "Enter Email",
    required: false,
  },
];

const selectOptions = {
  label: "Select Role",
  id: "selectRoles",
  name: "roles",
  errorMessage: "Role is required",
  options: [
    { label: "Admin", value: "admin" },
    { label: "Read Only", value: "read-only" },
    { label: "Customer", value: "customer" },
  ],
};

function UserEdit() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roles: "",
  });
  
  const { state: { row } } = useLocation();

  useEffect(() => {
    setFormData({
      firstName: row.firstName || "",
      lastName: row.lastName || "",
      email: row.email || "",
      roles: row.roles || "",
    });
  }, [row]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated data:", formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: row.firstName || "",
      lastName: row.lastName || "",
      email: row.email || "",
      roles: row.roles || "",
    });
  };

  return (
    <div>
      <div className="text-[28px] font-bold indent-3 mt-4">Edit User</div>
      <hr className="text-slate-400 mt-8" />
      <div className="m-auto w-[98%] min-h-[310px] mt-20 bg-white">
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="flex flex-wrap w-[60%] gap-5">
            {userData.map((field) => (
              <div key={field.id}>
                <label className="font-medium" htmlFor={field.id}>
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={formData[field.name]}
                  name={field.name}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="block border h-12 indent-2 w-[350px] bg-white placeholder:text-[14px] rounded-md mt-1 focus:outline-none focus:border-2 focus:border-slate-400"
                />
              </div>
            ))}
            
            <div className="relative">
              <label htmlFor={selectOptions.id} className="font-medium">
                {selectOptions.label}
              </label>
              <select
                id={selectOptions.id}
                value={formData.roles}
                name={selectOptions.name}
                onChange={handleChange}
                className={`text-[14px] ${
                  formData.roles === "" ? "text-slate-400" : "text-black"
                } appearance-none w-[350px] border h-12 rounded-md block mt-1 indent-2 border-black focus:border focus:border-slate-400`}
              >
                <option value="">Not Selected</option>
                {selectOptions.options.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              <RiArrowDropDownLine className="pointer-events-none absolute top-[45px] scale-[4] w-3 h-3 right-4 text-slate-400" />
            </div>
          </div>

          <div className="flex gap-5 mt-8 lg:justify-end">
            <button
              type="button"
              onClick={handleReset}
              className="w-30 bg-[#195fe2] text-white px-4 py-2 rounded-md mt-5"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-30 bg-[#195fe2] text-white px-4 py-2 rounded-md mt-5 mr-20"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserEdit;

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { createUser } from "../../API/User.api";
import AssignList from "./AssignList";

const formFields = [
  {
    label: "First Name",
    id: 1,
    type: "text",
    name: "firstName",
    placeholder: "Enter First Name",
    errorMessage: "First Name is required",
    required: false,
  },
  {
    label: "Last Name",
    id: 2,
    type: "text",
    name: "lastName",
    placeholder: "Enter Last Name",
    errorMessage: "Last Name is required",
    required: false,
  },
  {
    label: "Email",
    id: 3,
    type: "email",
    name: "email",
    placeholder: "Enter Email",
    errorMessage: "Valid email is required",
    required: false,
  },

];

const roleOptions = {
  label: "Select Role",
  id: "selectRole",
  name: "role",
  errorMessage: "Please Select any Option",
  options: [
    { label: "Admin", value: "admin" },
    { label: "Read Only", value: "read_Only" },
    { label: "Customer", value: "customer" },
  ],
};

function UserCreation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.firstName.trim()) newErrors.firstName = true;
    if (!data.lastName.trim()) newErrors.lastName = true;
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = true;
    if (!data.role) newErrors.role = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      console.log("Form submitted:", formData);
      const response = await createUser(formData);
      console.log("User creation response:", response);
      if (response.status === 202) {
        alert("User Created Successfully");
      } else {
        alert("Error in User Creation");
      }
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    });
    setErrors({});
  };

  return (
    <div>
      <div className="text-[28px] font-bold indent-3 mt-4">Add New User</div>
      <hr className="text-slate-400 mt-8" />
      <div className="m-auto w-[98%] min-h-[400px] mt-20 bg-white">
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="flex flex-wrap w-[60%] gap-5">
            {formFields.map((field) => (
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
                  className={`block ${
                    errors[field.name] ? "border-red-600" : ""
                  } border h-12 indent-2 w-[350px] bg-white placeholder:text-[14px] rounded-md mt-1 focus:outline-none focus:border-2 focus:border-slate-400`}
                />
                {errors[field.name] && (
                  <span className="text-red-800">{field.errorMessage}</span>
                )}
              </div>
            ))}

            <div className="relative">
              <label htmlFor={roleOptions.id} className="font-medium">
                {roleOptions.label}
              </label>
              <select
                id={roleOptions.id}
                value={formData.role}
                name={roleOptions.name}
                onChange={handleChange}
                className={`text-[14px] ${
                  formData.role === "" ? "text-slate-400" : "text-black"
                } appearance-none w-[350px] border h-12 rounded-md block mt-1 indent-2 border-black focus:border-2 focus:border-slate-400`}
              >
                <option value="">Not Selected</option>
                {roleOptions.options.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              <RiArrowDropDownLine className="pointer-events-none absolute top-[45px] scale-[4] w-3 h-3 right-4 text-slate-400" />
              {errors.role && (
                <div className="text-red-600">{roleOptions.errorMessage}</div>
              )}
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
      {formData.role === "customer" ? <AssignList /> : ""}{" "}
    </div>
  );
}

export default UserCreation;

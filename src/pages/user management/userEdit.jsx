import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createUser, updateUser } from "../../API/User.api";
import AssignList from "./AssignList";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { formFields ,roleOptions} from "./userData";


function UserForm() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const [AssignedAccount, setAssignedAccounts] = useState([]);
  const navigate = useNavigate();
  const role = useSelector((state) => state.user.value.role);

  if (role != "admin") {
    navigate("/");
  }
  const location = useLocation();
  const { userId } = useParams();
  const isEdit = Boolean(userId || location.state?.row);

  const userData = useMemo(
    () => location.state?.row,
    [location.state?.row?.id]
  );

  useEffect(() => {
    if (isEdit && userData) {
      setFormData({
        id: userData.id || "",
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        role: userData.role || "",
      });
    }
  }, [isEdit, userData]);

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

    console.log("assined list is this--------", formData);
    if (validateForm(formData)) {
      let response;
      const newFormData = {
          formData: formData,
          assignedList: AssignedAccount,
        };
      if (isEdit) {
        response = await updateUser(newFormData);
      } else {
        response = await createUser(newFormData);
      }

      if (response.status === 200 || response.status === 202) {
        toast.success(response.data.message);
        navigate("/dashboard/user");
      } else if (response.status == 401) {
        
        navigate("/");
      } else {
        console.log("the data error", response);
        toast.error(
          response.response.data.message || response.error.message
        );
      }
    }
  };
  console.log("the edit is this",isEdit)

  return (
    <div>
      <div className="text-[28px] font-bold indent-3 mt-4">
        {isEdit ? "Edit User" : "Add New User"}
      </div>
      <hr className="text-slate-400 mt-8" />
      <div className="m-auto w-[98%] min-h-[310px] mt-20 bg-white">
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
                  disabled={field.id == "email" &&isEdit}
                  name={field.name}
                  onChange={handleChange}
                  maxLength={50}
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

          {formData.role === "customer" && (
            <AssignList
              setAssignedAccounts={setAssignedAccounts}
              userid={formData.id}
            />
          )}
          <div className="flex gap-5 mt-8 lg:justify-end">
            <button
              type="submit"
              className="w-30 bg-[#195fe2] text-white px-4 py-2 rounded-md mt-5 mr-20"
            >
              {isEdit ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;

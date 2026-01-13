const formFields = [
  {
    label: "First Name",
    id: "firstName",
    type: "text",
    name: "firstName",
    placeholder: "Enter First Name",
    errorMessage: "First Name is required",
    required: false,
  },
  {
    label: "Last Name",
    id: "lastName",
    type: "text",
    name: "lastName",
    placeholder: " Last Name",
    errorMessage: "Last Name is required",
    required: false,
  },
  {
    label: "Email",
    id: "email",
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





export { formFields, roleOptions };
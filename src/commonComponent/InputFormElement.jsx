
const InputFormElement = ({userData}) => {
  const {
    label,
    id,
    type,
    value,
    onChange,
    placeholder,
    required = false
  } = userData;
  console.log(label);
  return (
    <div className=" ">
      <label className="font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className=" block border h-12 indent-2 w-[350px] bg-white placeholder:text-[14px] rounded-md mt-1 focus:outline-none focus:border-2 focus:border-slate-400 "
      />
    </div>
  );
};

export default InputFormElement;
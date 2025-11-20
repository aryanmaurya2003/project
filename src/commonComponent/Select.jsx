import React, { useState, useEffect } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

function Select({ selectData, selectedRole }) {
    const { label, id, options } = selectData;

    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        const exists = options.some(opt => opt.value === selectedRole);

        if (exists) {
            setSelectedValue(selectedRole);
        } else {
            setSelectedValue(""); 
        }
    }, [selectedRole, options]);

    return (
        <div className="relative">
            <label htmlFor={id} className="font-medium">{label}</label>

            <select
                id={id}
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className={`text-[14px] ${selectedValue === "" ? "text-slate-400" : "text-black"} 
                appearance-none w-[350px] border h-12 rounded-md block mt-1 
                indent-2 border-black focus:border-2 focus:border-slate-400`}
            >
                <option value="">Not Selected</option>

                {options.map((item) => (
                    <option value={item.value} key={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>

            <RiArrowDropDownLine className="pointer-events-none absolute top-[45px] scale-[4] w-3 h-3 right-4 text-slate-400" />
        </div>
    );
}

export default Select;

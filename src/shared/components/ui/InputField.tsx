import type React from "react";


interface InputFieldProps {
  placeholder?: string;
  type?: string;
  value?:string;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ placeholder = "Escribe algo..", type = "text", value, onChange }: InputFieldProps) => {
  return <input type={type}
  value={value}
  onChange={onChange} 
  placeholder={placeholder} 
  className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-white outline-none " />;
}

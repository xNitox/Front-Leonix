import React, { useEffect, useState } from "react"
import { createStaff, getRoles } from "../services/apiRoles"
import { SectionTitle } from "../shared/components/ui/SectionTitle"
import { SubTitle } from "../shared/components/ui/SubTitle"
import { InputField } from "../shared/components/ui/InputField"


export const CreateRolOfStaff = () => {
  const [roles, setRoles] = useState<any[]>([]);

  useEffect(() => {
    const cargarRoles = async () => {
      const data = await getRoles();
      setRoles(data);
    }
    cargarRoles();
  }, [])

  const handleSubmit =async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{

      await createStaff(form);
    }catch(error){
      console.error('Ups algo salio mal', error);
      throw error;
    }
    
  };

  const [form, setForm] = useState({
    role: "",
    name: "",
    last_name: "",
    email: "",
    phone: "",
    rut: "",
    pin: ""
  })
  return (

    <div className="bg-cyan-950 w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-100 space-y-3 ">
        <SectionTitle titulo="Registra un nuevo personal:" />
        <form onSubmit={handleSubmit}>
          <SubTitle text="Seleccione un rol:" />
          <select className="w-full p-3 bg-cyan-900 text-white rounded-lg cursor-pointer" value={form.role} onChange={(e)=> setForm({...form, role: e.target.value})}>
            <option value="" disabled className="focus:ring-2 focus:ring-emerald-500">-- Seleccione un rol --</option>
            {
              roles.map((role, index) =>
                <option key={index} value={role.name} >{role.name}</option>

              )
            }
          </select>
          <SubTitle text="Nombre del cajero:" />
          <InputField value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          
          <SubTitle text="Apellido:" />
          <InputField value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
          
          <SubTitle text="Correo electronico:" />
          <InputField value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          
          <SubTitle text="Número de telefono:" />
          <InputField value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
          
          <SubTitle text="Rut:" />
          <InputField  value={form.rut} onChange={(e) => setForm({...form, rut: e.target.value})}/>
          
          <SubTitle text="Clave(6 digitos):" />
          <InputField value={form.pin} onChange={(e) => setForm({...form, pin: e.target.value})} />
        <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">Enviar</button>
        </form>


      </div>
    </div>
  )
}

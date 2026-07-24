import { useState } from "react";
import { Button } from "../shared/components/ui/Button"
import { InputField } from "../shared/components/ui/InputField"
import { SectionTitle } from "../shared/components/ui/SectionTitle"
import { SubTitle } from "../shared/components/ui/SubTitle"

import { registerBusiness } from "../services/registerBusiness";
import { getUserAuthID } from "../services/auth.services";
import axios from "axios";

//Servicio de registro del comercio, debe aparecer solo 1 vez, una vez que el owner se registre.



export const RegisterCommerce = () => {



const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
        await registerBusiness(form)

    }catch(error){
        if(axios.isAxiosError(error)){
            console.error("Ups, error al crear el comercio",{
                status: error.response?.status,
                message: error.response?.data?.message,
                detail: error.response?.data?.error,
            })
        } else{
            console.error("Error desconocido:", error)
        }throw error;
        }

}

const [form,setForm] = useState({
    
        id : getUserAuthID(),
        name_commerce: "",
        owner_name: "",
        owner_last_name: "",
        rut_commerce: "",
        phone:"",
        email:"",
        city:""
    }
)





    return (
        <div className="flex flex-col bg-cyan-950 min-h-screen w-full justify-center items-center ">
            <div className="w-full  max-w-md">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <SectionTitle titulo="Registrar Comercio" />
                    <SubTitle text="Nombre del comercio:" />
                    <InputField value={form.name_commerce} onChange={(e) => setForm({...form, name_commerce: e.target.value}) } />
                    <SubTitle text="Nombre del dueño:" />
                    <InputField value={form.owner_name} onChange={(e) => setForm({...form, owner_name: e.target.value})} />

                    <SubTitle text="Apellido del dueño" />
                    <InputField value={form.owner_last_name} onChange={(e)=> setForm({...form, owner_last_name: e.target.value})} />

                    <SubTitle text="Rut del comercio:" />
                    <InputField value={form.rut_commerce} onChange={(e) => setForm({...form, rut_commerce: e.target.value})} />

                    <SubTitle text="Numero de telefono:" />
                    <InputField value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />

                    <SubTitle text="Correo electronico:" />
                    <InputField value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />

                    <SubTitle text="Ciudad:" />
                    <InputField value={form.city} onChange={(e) => setForm({...form, city: e.target.value})} />
                    <Button texto="Registrar" ruta="" type="submit" />


                </form>
            </div>
        </div>
    )
}

import { Button } from "../ui/Button"
import { TittleApp } from "../ui/TittleApp"


export const HeaderAdminDashboard = () => {
    const B_STYLE = "w-full rounded-md border border-slate-600 bg-yellow-800 px-3 py-2 text-white outline-none";
  return (
      <div>
        <TittleApp/>
        <div>
          <Button texto="Agregar nuevo personal" ruta="../agregar-personal" style = {B_STYLE }/>
        </div>
    </div>
  )
}

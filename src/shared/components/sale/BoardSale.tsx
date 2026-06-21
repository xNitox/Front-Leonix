import { useEffect, useState } from "react";
import { getProductsSale, type ProductsSaleProps } from "../../../products/api/product.sale.api";

export const BoardSale = () => {
    /* array para no repetir los parrafo */
    
    const colummnas = ["Codigo", "Nombre Producto", "Cantidad", "Precio", "Ahorro"];
    const [products, setProducts] = useState<ProductsSaleProps[]>([]);
    useEffect(()=>{
        getProductsSale().then(setProducts);
    },[]);
    const total = products.reduce((sum, products) => sum + products.cantidad * products.precio, 0);
    const ahorro = products.reduce((sum,products)=>(products.ahorro ?? 0),0 );
    return (
        <div className="flex flex-col  bg-blue-100 h-[32rem]">
            <div className="grid grid-cols-5 w-full place-content-center place-items-center ml-10">
                {
                    colummnas.map((col: string, index: number) => (
                        <p key={index} className="text-[1rem] italic grid grid-cols-5 ">{col}</p>
                    ))
                }
            </div>
            {/*  Zona del Medio: Aquí es donde van "flex-1" y "overflow-y-auto" con su propio flex-col */}
            <div>
                {/* Aquí adentro harás el bucle de tus productos reales más adelante */}
                {products.map((product)=>
                <div key={product.codigo} className="grid grid-cols-5  bg-blue-300 border border-red-300 p-3 place-items-center w-full ">
                    <p>{product.codigo}</p>
                    <p>{product.nombreProducto}</p>
                    <p>{product.cantidad}</p>
                    <p>{product.precio}</p>
                    <p>{product.ahorro ?? 0}</p>
                </div>)}
                <p className="text-slate-500 italic text-sm"></p>
            </div>

            <div className="flex flex-row self-end mt-auto p-[2rem] gap-[2rem]" >
                <p>Total</p>
                <p>Total Ahorrado</p>
            </div>
        </div>
    )
}


export const Buttons = () => {
    const buttons = ['Buscar B', 'Anular venta F6', 'Consultar Precio C', 'Anular Producto F1', 'Cambiar Precio K', 'Cerrar Sesion F7', 'Pagar F3']

    return (
        <div className="w-full max-w-2xl mx-auto p-3">
            <div className="grid grid-cols-2 gap-3">
                {buttons.map((col: string, index: number) => (
                    <button
                        key={index}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {col}
                    </button>
                ))}
            </div>
        </div>
    )
}

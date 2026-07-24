# Registro del sistema

## Registro del owner

- Estado: login implementado
- Relevante para: autenticación y gestión del owner
- Archivo principal: [src/pages/Login.tsx](../src/pages/Login.tsx)
- Servicio relacionado: [src/services/auth.services.ts](../src/services/auth.services.ts)

Después de iniciar sesión, Supabase Auth entrega `data.user.id`. Ese UUID se guarda junto con los datos del usuario y se utiliza para identificar al owner.

## Registro del comercio del owner

- Estado: flujo implementado y en pruebas
- Relevante para: creación del comercio asociado al owner
- Archivo principal: [src/pages/RegisterCommerce.tsx](../src/pages/RegisterCommerce.tsx)
- Servicio asociado: [src/services/registerBusiness.ts](../src/services/registerBusiness.ts)
- Endpoint: `POST /api/registerCommerce`
- Controlador del backend: [Back/src/controllers/registerBusinessController.ts](../../Back/src/controllers/registerBusinessController.ts)
- Ruta del backend: [Back/src/routes/registerBussiness.route.ts](../../Back/src/routes/registerBussiness.route.ts)

El owner debe iniciar sesión antes de registrar el comercio. El formulario obtiene el ID del usuario autenticado y lo envía como `commerce.id`. En el esquema actual, `commerce.id` referencia a `auth.users(id)`, por lo que un owner solo puede registrar un comercio con ese ID.

El comercio debe registrarse una sola vez. Si se intenta insertar nuevamente el mismo ID, Supabase devuelve un conflicto por la clave primaria.

## Registro del staff

- Estado: formulario y endpoint implementados
- Relevante para: creación de personal asociado a un comercio
- Archivo principal: [src/pages/CreateRolOfStaff.tsx](../src/pages/CreateRolOfStaff.tsx)
- Servicio asociado: [src/services/apiRoles.ts](../src/services/apiRoles.ts)
- Endpoint: `POST /api/CreateStaff`

El staff necesita un `commerce_id` válido que corresponda a un comercio existente.

## Pendientes

- Enviar `commerce_id` desde el formulario de staff.
- Mostrar mensajes de éxito y error en la interfaz.
- Manejar conflictos de registros duplicados con estado HTTP `409`.


# TP React: App de Formulario

-- Esta aplicación de React combina un temporizador que cuenta los segundos transcurridos desde que se carga la página.
-- Al renderizar la página se carga la lista de usuarios que se encuentra en src/data/db.json.

## Características

- **Temporizador**: Muestra los segundos transcurridos desde que se cargó la página.
- **Formulario de Carga de Datos**: Permite al usuario ingresar datos que se guardan en un servidor JSON.
- **Persistencia de Datos**: Se utiliza axios para interactuar con el json-server, guardando, eliminando, actualizando y recuperando datos.

## Requisitos

- Node.js y npm instalados en tu máquina.

```
node --v
```

- json-server para simular una API REST.

```
npm install -g json-server
```

## Instalación

```
git clone https://github.com/JSDRAKE/app-formulario-numen.git
```

```
cd app-formulario-numen
```

```
npm install
```

## Ejecución

Para ejecutar correctamente primeros debes de levantar el json-server:

```
json-server src/data/db -p 5050
```

Esto iniciará un json-server en http://localhost:5050.

Luego ejecutas la aplicacion de React:

```
npm run dev
```

La aplicación se abrirá en http://localhost:5173.

## Uso

1 - Temporizador: El temporizador comienza automáticamente cuando se carga la página y muestra los segundos transcurridos en la interfaz.

2 - Formulario de Carga de Datos: Ingrese los datos en el formulario. Asegúrese de completar todos los campos requeridos antes de enviar.

3 - Lista de Usuarios: Al cargar la página se mostrara la lista de Usuarios existente en el servidor JSON

4 - Guardar y Mostrar Datos: Al enviar el formulario, los datos se guardarán en el servidor JSON y se mostrarán en la lista de la interfaz. La lista se actualizará automáticamente después de cada envío.

## Tecnologías utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Axios: Cliente HTTP para hacer solicitudes al servidor JSON.
- json-server: Servidor JSON para simular una API REST.

## Licencia

Este proyecto está bajo la Licencia MIT.

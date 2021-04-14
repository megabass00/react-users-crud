# Descripción

Login + Gestión de usuarios con React

## Usuario de pruebas

Para poder hacer login/registro es necesario usar un email de prueba. La contraseña que se introduzca no importa ni para hacer login ni para registrarse. El email que se debe usar es **eve.holt@reqres.in**.

## Formato del código

Para asegurar la calidad del codigo y evitar errores se ha hecho uso de las librerías **ESLint** y **Prettier**, configurandolas de manera optima para su uso con React. También se ha instalado **Lint Staged** y **Husky** para poder lanzar scripts antes de poder subir commits al repositorio, en este caso se ejecutará ESLint y todos los test que haya en el proyecto para comprobar que todo esta correcto.

## Scripts

Se han añadido varios scripts para facilitar el desarrollo:

- _lint_: ejecuta ESLint y arregla posibles errores
- _prettify_: ejecuta Prettier y formatea el código del proyecto
- _prettier:check_: ejecuta Prettier e informa de los archivos que no tienen un formato correcto
- _test_: ejecuta los test del proyecto y termina la ejecución (usado por Husky)
- _test:watch_: ejecuta los test del proyecto y mantiene un _watcher_ para volver a ejecutarlos cuando detecte un cambio (usado para desarrollar)

## Redux

Para el uso de Redux se ha añadido el middleware **Redux Thunk** que permite despachar acciones asíncronas como llamar a una API y actualizar el estado.

## Estilos

El estilado gráfico del proyecto se ha realizado con **Styled Components**, obviando introducir un preprocesador (SASS/LESS) ya que sería mezclar dos conceptos diferentes.

## Formularios

Para la gestión de formularios ya que son sencillos se ha usado **React Hook Form** dado que es más ligera que **Formik**.

## Testing

Se han implementado tests tanto para componentes como para el uso de Redux comprobando acciones y funciones reductoras.

## Librerias usadas

Hay varias librerías que se han instalado para dar características extra al proyecto:

- prop-types: evita errores a la hora de programar y asegura la consistencia del código
- react-content-loader: usada para generar los placeholders de la precarga del listado
- eslint-plugin-testing-library: configura ESLint para seguir las mejores practicas y anticipar errores comunes al programar tests
- fetch-mock: necesaria para poder mockear llamadas
- node-fetch: dependencia necesaria para poder ejecutar _fetch-mock_
- redux-mock-store: permite programar test de acciones asíncronas
- redux-devtools-extension: permite ver de forma amigable el contexto de Redux de la aplicación en el _devtools_ del navegador

## TODO

Por falta de tiempo han quedado pendientes los siguientes puntos:

- implementación de _theming_ para usuarios logueados que permita al usuario cambiar de tema y darle un valor añadido al proyecto
- implementar la librería _react-lazyload_ para la precarga de imágenes
- añadir más tests

# 🚀 Prueba LaLiga

Me he centrado en desarrollar siguiendo las prácticas que suelo utilizar en mi día a día e intentando extender en la medida que el tiempo me lo ha permitido las funcionalidades establecidas en el documento. He intentado implementar de la manera más correcta la lógica interna del problema propuesto, con la estructura de carpetas que normalmente uso para proyectos de React, como por ejemplo la separación de componentes y de páginas.

Como añadido a las funcionalidades propuestas se ha implementado un formulario de registro que permite _crear_ un nuevo usuario. La API no permite crear nuevos usuarios, pero sí permite registrar emails que ya existan en la base de datos, devolviendo un token que permite autorizar al usuario mientras usa la aplicación.

La carga de las páginas se ha hecho mediante _lazy load_ permitiendo mostrar una precarga sencilla para mejorar la experiencia del usuario. Todas las imágenes usadas estan en formato SVG lo que permite estilarlas desde el código y optimizar su carga.

Para el desarrollo se ha usado la rama _develop_ y al finalizar se mergeó la rama _main_ con todos los cambios. El historial de _git_ está más o menos estructurado por las fases del desarrollo dejando en cada _commit_ una versión estable.

## Instalación

Para clonar este repositorío necesitarás tener instalado en el ordenador [Git](https://git-scm.com/) y [Node.js](https://nodejs.org/en/download/) el cual ya viene con _npm_ instalado. Aparte de _npm_ también puedes gestionar las dependencias con [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable). Una vez tengas estas aplicaciones abre un terminal y sigue las instrucciones de abajo:

```
# Clonar este repositorio
git clone https://github.com/megabass00/react-users-crud

# Instalar las dependencias (yarn o npm)
yarn
npm i

# Levantar el proyecto
yarn start
npm start
```

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

El estilado gráfico del proyecto se ha realizado con **Styled Components**, obviando introducir un preprocesador (SASS/LESS) ya que sería mezclar dos conceptos diferentes. Se han establecido 3 breackpoints para que la aplicación sea _responsive_ y se pueda visualizar correctamente tanto en dispositivos móviles (teléfonos y tabletas) como en navegadores de escritorio con la filosofía **mobile-first**. Para la inyección de estilos globales se ha usado _createGlobalStyle_ de **Styled Components** pero para inyectar las fuentes se ha usado _App.css_ porque si no las fuentes son inyectadas en cada _render_.

## Temas

Se ha añadido la funcionalidad que permita al usuario cambiar de tema, aplicándole a la UI un aspecto diferente y de esta forma darle un valor añadido al proyecto. Para cambiar de tema hay que hacer clic en el logo de la barra de navegación y hay dos disponibles: _dark_ y _light_.

## Formularios

Para la gestión de formularios ya que son sencillos se ha usado **React Hook Form** dado que es más ligera que **Formik**.

## Testing

Se han implementado tests a modo de demostación tanto para componentes como para el uso de Redux comprobando acciones y funciones reductoras.

## Librerias usadas

Hay varias librerías que se han instalado para dar características extra al proyecto:

- prop-types: evita errores a la hora de programar y asegura la consistencia del código
- react-content-loader: usada para generar los placeholders de la precarga del listado
- eslint-plugin-testing-library: configura ESLint para seguir las mejores practicas y anticipar errores comunes al programar tests
- fetch-mock: necesaria para poder mockear llamadas
- node-fetch: dependencia necesaria para poder ejecutar _fetch-mock_
- redux-mock-store: permite programar test de acciones asíncronas
- redux-devtools-extension: permite ver de forma amigable el contexto de Redux de la aplicación en el _devtools_ del navegador

## ToDo

Por falta de tiempo han quedado pendientes los siguientes puntos 😊:

- implementar la librería _react-lazyload_ para la precarga de imágenes
- añadir más tests

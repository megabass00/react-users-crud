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

## Estilos

El estilado gráfico del proyecto se ha realizado con **Styled Components**, obviando introducir un preprocesador (SASS/LESS) ya que sería mezclar dos conceptos diferentes.

## Multitema

## Testing

## Librerias usadas

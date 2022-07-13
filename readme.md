# Sprint 5 

## Nivel 1
### Ejercicio 1  
Crear la pantalla principal que mostrará los chistes al usuario/a.  
- Al entrar no mostrará chistes. Aparecerá el título y el botón de siguiente chiste.  
- Al apretar el botón "siguiente chiste" se hará fetch a la API de chistes y se mostrará por consola el chiste en cuestión.  

*No es necesario maquetar la web, primero haremos que funcione y luego aplicamos los estilos.*  
*Utilizar promises o async/await para esperar la respuesta de la API.*
*Antes de utilizar una API en el código es recomendable utilizar Postman para provar la API.*

### Ejercicio 2  
Realiza una primera aproximación a la maquetación. Coloca cada elemento en su sitio.  
El objetivo es que el usurio/a pueda ir viendo los chistes y que pida nuevos.  

### Ejercicio 3  
La empresa necesita saber el nivel de aceptación de los chistes para saber cuándo los empeleados están de mejor humor y cuántos chistes se consumen de media.  
- Generar un array llamado reportJokes en el que iremos guardando toda la información requerida.
- Los campos son:
* joke:"...",
* score: 1,  
* date: ...
- La fecha se guardará en formato ISO.
- El campo score tiene un rango del 1 al 3, siendo 1 la peor puntuación. Hay que implementar tres botones entre el chiste y el botón para caragar el siguiente chiste para que el usuario pueda puntuar.  
- Con la puntuación hay que ir utilizando el array reportJokes.  
- Mostar por consola el contenido del array es suficiente.


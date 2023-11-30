Vamos a crear un ejemplo sencillo que utilice una API pública para obtener datos y mostrarlos en una página web.

En este ejemplo, usaremos la API de GitHub para obtener información sobre un usuario y sus repositorios públicos.


Este código hace lo siguiente:

Escucha el evento de envío del formulario.
Captura el valor del nombre de usuario ingresado.
Hace una solicitud a la API de GitHub utilizando fetch.
Procesa la respuesta y muestra la información del usuario en el DOM.

En la aplicación que acabamos de hacer, la API de GitHub devuelve los datos en formato JSON. JSON (JavaScript Object Notation) es un formato de intercambio de datos muy común en el desarrollo web. Es legible para los humanos y fácil de trabajar tanto para las personas como para las máquinas.

En este caso, cuando hacemos una solicitud a la API de GitHub, estamos recibiendo datos en formato JSON. Por ejemplo, cuando obtenemos la información del usuario utilizando fetch, recibimos una respuesta que contiene los detalles del usuario en formato JSON. Este es un ejemplo de la estructura JSON que podríamos recibir:

{
  "login": "octocat",
  "id": 1,
  "name": "The Octocat",
  "location": "San Francisco",
  "public_repos": 8,
  "followers": 2567,
  "html_url": "https://github.com/octocat"
  // Otros campos...
}
Los datos se presentan como pares clave-valor dentro de llaves {}, y estos pares se separan por comas. Las claves (keys) son strings y van seguidas de dos puntos : que representan los valores correspondientes. Los valores pueden ser strings, números, booleanos, arrays, otros objetos JSON o null.

En el código JavaScript que escribimos, usamos response.json() para convertir la respuesta recibida en un objeto JavaScript que podemos manejar fácilmente. Esto se realiza en esta línea:

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(userData => {
    // Hacemos algo con los datos JSON
  })
  .catch(error => {
    // Manejamos errores si ocurren
  });
Luego, en el segundo then, usamos los datos userData, que son ahora un objeto JavaScript, para mostrar la información en la página web.

El JSON es un formato poderoso y versátil que se utiliza ampliamente en el intercambio de datos entre aplicaciones web y servicios. La API de GitHub, al igual que muchas otras, utiliza JSON para proporcionar datos de manera estructurada y legible.


me puedes explicar de donde salen las variables userData y response??

¡Claro! En el código que vimos anteriormente, userData y response son variables que se utilizan en el contexto de la solicitud a la API de GitHub:

response: Es el objeto que representa la respuesta devuelta por la función fetch() cuando se realiza la solicitud a la API. En el código, se utiliza como el primer argumento en la primera función de .then(), que maneja la respuesta de la solicitud.

userData: Es el objeto JSON que se obtiene de la respuesta de la solicitud una vez que se ha convertido a formato JSON utilizando response.json(). Se utiliza como el argumento en la segunda función de .then(), que maneja los datos del usuario en formato JSON y los manipula para mostrarlos en el DOM.

En resumen, response es el objeto que representa toda la respuesta de la solicitud HTTP, y userData es el objeto JSON que contiene los datos específicos del usuario extraídos de esa respuesta. Estas variables se nombran así por convención y pueden ser nombradas de manera diferente según lo que se esté haciendo en el código.


vamos a hacer un resumen y me dices si he entendido.....al usar fetch es posible solicitar a una api, en este caso la de github que acceda a los datos públicos de un usuario y luego puedo yo usar esa información, yo accedo a ellos de forma asíncrona y únicamente mi página será recargada con esos datos y no con otras cosas que ya estén operativas


¡Exactamente! Has captado la esencia. Con fetch, puedes hacer solicitudes a una API, como la de GitHub en este caso, para obtener datos de usuarios u otros recursos. Esta solicitud es asíncrona, lo que significa que no bloquea la ejecución del resto del código. Una vez que obtienes la respuesta de la API, puedes acceder a los datos públicos del usuario, como su nombre, ubicación, repositorios públicos, seguidores, entre otros, y luego utilizar esa información para actualizar tu página web sin necesidad de recargarla por completo. Esto permite una experiencia más fluida para los usuarios al obtener datos actualizados sin interrumpir su interacción con la página.

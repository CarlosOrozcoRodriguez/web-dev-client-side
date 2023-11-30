// Usando el objeto XMLHttpRequest

/*  window.onload = function () {
  const recursoInput = document.getElementById('recurso');
  const enviarButton = document.getElementById('enviar');
  const contenidoDiv = document.getElementById('contenidos');
  const estadosDiv = document.getElementById('estados');
  const cabecerasDiv = document.getElementById('cabeceras');
  const codigoDiv = document.getElementById('codigo');

  // Al cargar la página, mostrar la URL por defecto
  recursoInput.value = window.location.href;

  enviarButton.addEventListener('click', function () {
    // Resetear los divs
    contenidoDiv.innerText = '';
    estadosDiv.innerText = '';
    cabecerasDiv.innerText = '';
    codigoDiv.innerText = '';

    // Obtener la URL ingresada por el usuario
    const url = recursoInput.value;

    // Mostrar estado de la petición
    estadosDiv.innerText = 'Estado: Cargando...';

    // Realizar la petición AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    // Mostrar los estados de la petición
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          estadosDiv.innerText = 'Estado: Completada';
          cabecerasDiv.innerText = 'Cabeceras HTTP de la respuesta del servidor:\n' + xhr.getAllResponseHeaders();
          codigoDiv.innerText = 'Código de estado: ' + xhr.status;

          contenidoDiv.innerText = 'Contenidos del archivo:\n' + xhr.responseText;
        } else {
          estadosDiv.innerText = 'Estado: Error';
          cabecerasDiv.innerText = 'Cabeceras HTTP de la respuesta del servidor:\n' + xhr.getAllResponseHeaders();
          codigoDiv.innerText = 'Código de estado: ' + xhr.status;

          contenidoDiv.innerText = 'Error al obtener el recurso.';
        }
      }
    };

    // Enviar la solicitud
    xhr.send();
  });
}; */




/***************************************************************************************** */



 window.onload =  () => {
  const recursoInput = document.getElementById('recurso');
  const enviarButton = document.getElementById('enviar');
  const contenidoDiv = document.getElementById('contenidos');
  const estadosDiv = document.getElementById('estados');
  const cabecerasDiv = document.getElementById('cabeceras');
  const codigoDiv = document.getElementById('codigo');

  // Al cargar la página, mostrar la URL por defecto
  recursoInput.value = window.location.href;

  enviarButton.addEventListener('click', function () {
    // Resetear los divs
    contenidoDiv.innerText = '';
    estadosDiv.innerText = '';
    cabecerasDiv.innerText = '';
    codigoDiv.innerText = '';

    // Obtener la URL ingresada por el usuario
    const url = recursoInput.value;

    // Mostrar estado de la petición
    estadosDiv.innerText = 'Estado: Cargando...';

    // Realizar la petición AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    // Mostrar los estados de la petición
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          estadosDiv.innerText = 'Estado: Completada';
          cabecerasDiv.innerText = 'Cabeceras HTTP de la respuesta del servidor:\n' + xhr.getAllResponseHeaders();
          codigoDiv.innerText = 'Código de estado: ' + xhr.status;
          if (xhr.getResponseHeader('Content-Type').includes('application/json')) {
            // Si la respuesta es de tipo JSON, mostrar por consola el objeto JSON como cadena
            const jsonResponse = JSON.parse(xhr.responseText);
            console.log(JSON.stringify(jsonResponse, null, 2));
            contenidoDiv.innerText = 'Contenidos del archivo:\nVer la consola para el objeto JSON.';
          } else 
            // Si no es JSON, mostrar el contenido de texto normal
            contenidoDiv.innerText = 'Contenidos del archivo:\n' + xhr.responseText;
          } else {
            estadosDiv.innerText = 'Estado: Error';
            cabecerasDiv.innerText = 'Cabeceras HTTP de la respuesta del servidor:\n' + xhr.getAllResponseHeaders();
            codigoDiv.innerText = 'Código de estado: ' + xhr.status;

            contenidoDiv.innerText = 'Error al obtener el recurso.';
          }
        }
      };

      // Enviar la solicitud
      xhr.send();
    });
};
 




// Usando fetch


/* window.onload = function () {
  const recursoInput = document.getElementById('recurso');
  const enviarButton = document.getElementById('enviar');
  const contenidoDiv = document.getElementById('contenidos');
  const estadosDiv = document.getElementById('estados');
  const cabecerasDiv = document.getElementById('cabeceras');
  const codigoDiv = document.getElementById('codigo');

  // Al cargar la página, mostrar la URL por defecto
  recursoInput.value = window.location.href;

  enviarButton.addEventListener('click', function () {
    // Resetear los divs
    contenidoDiv.innerText = '';
    estadosDiv.innerText = '';
    cabecerasDiv.innerText = '';
    codigoDiv.innerText = '';

    // Obtener la URL ingresada por el usuario
    const url = recursoInput.value;

    // Mostrar estado de la petición
    estadosDiv.innerText = 'Estado: Cargando...';

    // Realizar la petición fetch
    fetch(url)
      .then(response => {
        estadosDiv.innerText = 'Estado: Completada';
        const headers = response.headers;
        cabecerasDiv.innerText = 'Cabeceras HTTP de la respuesta del servidor:\n';
        headers.forEach((value, name) => {
          cabecerasDiv.innerText += `${name}: ${value}\n`;
        });
        codigoDiv.innerText = 'Código de estado: ' + response.status;
        return response.text(); // Convertir la respuesta a texto
      })
      .then(data => {
        if (data.startsWith('{') || data.startsWith('[')) {
          // Si la respuesta es JSON, mostrarla en la consola
          const jsonResponse = JSON.parse(data);
          console.log(JSON.stringify(jsonResponse, null, 2));
          contenidoDiv.innerText = 'Contenidos del archivo:\nVer la consola para el objeto JSON.';
        } else {
          // Si no es JSON, mostrar el contenido de texto normal
          contenidoDiv.innerText = 'Contenidos del archivo:\n' + data;
        }
      })
      .catch(error => {
        estadosDiv.innerText = 'Estado: Error';
        cabecerasDiv.innerText = 'Cabeceras HTTP de la respuesta del servidor:\n' + error;
        codigoDiv.innerText = 'Código de estado: Error';

        contenidoDiv.innerText = 'Error al obtener el recurso.';
      });
  });
}; */


/* fetch es más moderno y ofrece una sintaxis más simple y legible que XMLHttpRequest, utilizando promesas. Esta implementación hace una solicitud GET a la URL ingresada por el usuario, maneja la respuesta y muestra la información relevante en los elementos del DOM, al igual que en el ejemplo anterior con XMLHttpRequest. */
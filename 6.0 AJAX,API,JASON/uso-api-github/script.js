// el git está jodido

const form = document.getElementById('githubForm');
const resultDiv = document.getElementById('result');

// Agregamos un evento de escucha al formulario cuando se envía
form.addEventListener('submit', function(event) {
  // Prevenimos el comportamiento por defecto del formulario (recargar la página)
  event.preventDefault();

  // Obtenemos el nombre de usuario ingresado en el campo de texto
  const username = document.getElementById('username').value;

  // Creamos la URL de la API de GitHub usando el nombre de usuario ingresado
  const apiUrl = `https://api.github.com/users/${username}`;

  // Realizamos la solicitud a la API usando Fetch
  fetch(apiUrl)
    .then(response => {
      // Verificamos si la respuesta es correcta (código 200-299)
      if (!response.ok) {
        // Si no es correcta, lanzamos un error
        throw new Error('Network response was not ok');
      }
      // Si la respuesta es correcta, la convertimos a formato JSON
      return response.json();
    })
    .then(userData => {
      // Una vez obtenidos los datos en formato JSON, los manipulamos
      // y mostramos en el DOM

      // Obtenemos la referencia al textarea donde se mostrará el JSON
      const jsonSnippet = document.getElementById('jsonSnippet');
      // Mostramos el JSON con formato y estructura legible en el textarea
      jsonSnippet.value = JSON.stringify(userData, null, 2);
      console.log(jsonSnippet.value);
      
      // Creamos un string HTML con la información del usuario
      const userHtml = `
        <h2>${userData.name}</h2>
        <p>Username: ${userData.login}</p>
        <p>Location: ${userData.location || 'Not available'}</p>
        <p>Public Repositories: ${userData.public_repos}</p>
        <p>Followers: ${userData.followers}</p>
        <p>Profile: <a href="${userData.html_url}" target="_blank">${userData.html_url}</a></p>
      `;
      // Insertamos el HTML creado en el div #result
      resultDiv.innerHTML = userHtml;
    })
    .catch(error => {
      // Si hay algún error en el proceso, mostramos un mensaje de error en el div #result
      resultDiv.textContent = `Error: ${error.message}`;
    });
});
 

// Equivalente con XMLHttpRequest()

/* const form = document.getElementById('githubForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const apiUrl = `https://api.github.com/users/${username}`;

  // Creamos una nueva instancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  // Configuramos la solicitud
  xhr.open('GET', apiUrl, true);

  // Configuramos la función de devolución de llamada cuando la solicitud se complete
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Si la solicitud fue exitosa, procesamos los datos
      const userData = JSON.parse(xhr.responseText);


      const jsonSnippet = document.getElementById('jsonSnippet');
      jsonSnippet.value = JSON.stringify(userData, null, 2);
      console.log(jsonSnippet.value);

      const userHtml = `
        <h2>${userData.name}</h2>
        <p>Username: ${userData.login}</p>
        <p>Location: ${userData.location || 'Not available'}</p>
        <p>Public Repositories: ${userData.public_repos}</p>
        <p>Followers: ${userData.followers}</p>
        <p>Profile: <a href="${userData.html_url}" target="_blank">${userData.html_url}</a></p>
      `;

      resultDiv.innerHTML = userHtml;
    } else {
      // Si la solicitud no fue exitosa, mostramos un mensaje de error
      resultDiv.textContent = `Error: ${xhr.statusText}`;
    }
  };

  // Configuramos la función de devolución de llamada en caso de error de red
  xhr.onerror = function() {
    resultDiv.textContent = 'Error de red al intentar conectarse a la API';
  };

  // Enviamos la solicitud
  xhr.send();
});
 */
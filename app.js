const urlBase = 'https://rickandmortyapi.com/api/character/';

fetch(urlBase)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(respJson => {
        const info = respJson.info;
        const personajes = respJson.results;
        console.log(info);
        console.log(personajes);
        showCharacters(personajes);
    })
    const showCharacters = (personajes) => {
        const listaPersonajes = document.querySelector('ul');
        personajes.forEach(personaje => {
            const li = document.createElement('li');
            li.innerHTML = `<p>${personaje.name}</p>
                            <img src="${personaje.image}">`;
            listaPersonajes.appendChild(li);
        })
    }
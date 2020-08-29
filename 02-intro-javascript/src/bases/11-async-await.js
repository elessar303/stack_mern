//const getImagenPromesa = () => new Promise( resolve => resolve('https://erwerwerwer.com'))

const getImagen = async () =>{

    try {

        const apiKey = 'Az66overhQ6KkXI5uSl357586mCk4tYn';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
        
    } catch (error) {
        console.error(error)
    }

    

}

getImagen();
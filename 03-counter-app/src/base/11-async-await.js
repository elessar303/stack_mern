export const getImagen = async() => {

    try {

        const apiKey = 'Az66overhQ6KkXI5uSl357586mCk4tYn';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        // manejo del error
        return 'No existe';
    }
    
    
    
}

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=og6wLdrVVs2HGeeKCuNK2YIznYrl7L6C`;
    const respo = await fetch( url );
    const {data} = await respo.json();
    const gifts = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifts;
}
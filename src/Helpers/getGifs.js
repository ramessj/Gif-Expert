export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=DCFJis8et3lW4d2yjBGJKazknrGYr1oI&q=${category}&limit=6`
    
    const resp = await fetch(url);
    
    const {data} = await resp.json();


    const gifs = data.map( img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized.url,


    }));

    return gifs

}
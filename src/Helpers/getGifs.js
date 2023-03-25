import { v4 as uuidv4 } from "uuid";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=DCFJis8et3lW4d2yjBGJKazknrGYr1oI&q=${category}&limit=8`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  if (data.length > 0) {
    const gifs = data.map(({ id, title, images }) => ({
      id: id,
      title: title,
      url: images.downsized.url,
    }));

    return gifs
  } else {
    const gifs = [
      {
        id: uuidv4(),
        title: "No se encontraron resultados",
        url: "https://media1.giphy.com/media/3o7WTDH9gYo71TurPq/giphy.gif?cid=d986b6e5sjvzdnyystdoc9w76yadx83cly67spo1i9p343yh&rid=giphy.gif&ct=g",
      },
    ];

    return gifs
  }
}

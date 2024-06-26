const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "Bearer " + 734e6c84f3a766504f85a850c5c7713f,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        // Добавляем параметр языка в запрос
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params: {
                ...params,
                language: "ru-RU", // Устанавливаем русский язык
            },
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

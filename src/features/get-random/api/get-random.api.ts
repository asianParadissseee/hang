import axios from "axios";

export const getRandomName = async () => {
    try {
        const {data} = await axios.get<{
            FirstName: string
        }>('https://api.randomdatatools.ru/?unescaped=false&params=FirstName')
        return data.FirstName
    } catch (e) {
        console.error(e)
    }
}
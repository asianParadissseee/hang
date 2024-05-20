import {onMounted, ref} from "vue";
import {getRandomName} from "@/features/get-random";

export const useRandomWord = () => {
    const word = ref<string>('')
    const getRandomWord = async () => {
        try {
            const name = await getRandomName();
            if (name) {
                word.value = name?.toLowerCase()
            }
        } catch (error) {
            console.error(error)
        }
    }

    onMounted(() => {
        getRandomWord()
    })
    return {
        getRandomWord,
        word
    }
}
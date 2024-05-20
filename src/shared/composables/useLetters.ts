import {computed, Ref, ref} from "vue";

export const useLetters = (word: Ref<string>) => {

    const letters = ref<string[]>([])
    const correctLetters = computed(() => letters.value.filter(letter => word.value.includes(letter)))
    const wrongLetters = computed(() => letters.value.filter(letter => !word.value.includes(letter)))
    const isStatusLose = computed(() => wrongLetters.value.length === 6)
    const isStatusWin = computed(() => [...word.value].every(letter => correctLetters.value.includes(letter)))

    const addLetter = (key: string) => {
        if (/[а-яА-Яеё]/.test(key)) {
            letters.value.push(key.toLowerCase())
        }
    }
    const resetLetters = ()=>{
        letters.value = []
    }
    return {
        letters,
        correctLetters,
        wrongLetters,
        isStatusLose,
        isStatusWin,
        addLetter,
        resetLetters
    }
}
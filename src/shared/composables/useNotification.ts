import {ref} from "vue";
import {GameNotification} from "@/widgets/notification";

export const useNotification = () => {
    const notification = ref<InstanceType<typeof GameNotification> | null>(null)
    const showNotification = () => {
        notification.value?.toggleOpenNotification()
        setTimeout(() => notification.value?.toggleCloseNotification(), 2000)
    }
    return {
        showNotification,
        notification
    }
}
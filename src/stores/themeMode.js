import { defineStore } from 'pinia'

export const useThemeModeStore = defineStore('ThemeModeStore', {
    state: () => ({
        isDark: true,
    }),
    actions: {
        changeTheme() {
            this.isDark = !this.isDark;
        }
    },
});

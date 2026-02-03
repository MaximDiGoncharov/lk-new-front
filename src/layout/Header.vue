<script>

import HeaderDropdown from "@/layout/HeaderDropdown.vue";
import Sidebar from "@/layout/Sidebar.vue";
import {SunnyOutline, MoonOutline} from '@vicons/ionicons5';
import {useThemeModeStore} from "@/stores/themeMode.js";

export default {
  name: "Header",
  computed: {
    MoonOutline() {
      return MoonOutline
    },
    SunnyOutline() {
      return SunnyOutline
    }
  },
  components: {Sidebar, HeaderDropdown},
  setup() {
    const themeModeStore = useThemeModeStore()
    return {
      themeModeStore
    }
  }
}
</script>

<template>
  <header>
    <n-switch v-model:value="themeModeStore.isDark" size="large">
      <template #checked-icon>
        <n-icon :component="MoonOutline"/>
      </template>
      <template #unchecked-icon>
        <n-icon :component="SunnyOutline"/>
      </template>
    </n-switch>
    <HeaderDropdown/>
  </header>
</template>


<script>

import HeaderDropdown from "@/layout/HeaderDropdown.vue";
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
  components: { HeaderDropdown},
  setup() {
    const themeModeStore = useThemeModeStore()
    return {
      themeModeStore
    }
  },
  methods: {
    railStyle({checked}) {
      const style = {};
      if (checked) {
        style.background = "#484848";
      }
      return style;
    }
  }
}
</script>

<template>
  <header class="p-5">
    <div class="grid grid-cols-12 gap-4 justify-items-end items-center">
      <div class="col-span-10"></div>
      <div class="col-span-1">
        <n-switch v-model:value="themeModeStore.isDark" size="large" :rail-style="railStyle">
          <template #checked-icon>
            <n-icon :component="MoonOutline"/>
          </template>
          <template #unchecked-icon>
            <n-icon :component="SunnyOutline"/>
          </template>
        </n-switch>
      </div>
      <div class="col-span-1 justify-self-start">
        <HeaderDropdown/>
      </div>
    </div>
  </header>
</template>


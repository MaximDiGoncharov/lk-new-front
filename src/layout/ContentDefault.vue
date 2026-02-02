<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed"/>
    <n-layout has-sider>
      <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
      >
        <n-menu
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <n-message-provider>
          <router-view/>
        </n-message-provider>
      </n-layout>
    </n-layout>
  </n-space>
</template>


<script>
import {BookmarkOutline as BookIcon, WineOutline as WineIcon, PersonOutline as PersonIcon} from "@vicons/ionicons5";
import {NIcon} from "naive-ui";
import {h} from "vue";
import Sidebar from "@/layout/Sidebar.vue";
import HeaderDropdown from "@/layout/HeaderDropdown.vue";

export default {
  name: "ContentDefault",
  components: {Sidebar, HeaderDropdown},
  data() {
    return {
      activeKey: null,
      collapsed: true,
      menuOptions: [
        {
          label: "Интернет",
          key: "internet",
          icon: this.renderIcon(BookIcon)
        },
        {
          label: "Услуги",
          key: "service",
          icon: this.renderIcon(PersonIcon),
        },
        {
          label: "Финансы",
          key: "finance",
          icon: this.renderIcon(WineIcon)
        }
      ]
    }
  },
  methods: {
    renderIcon(icon) {
      return () => h(NIcon, null, {default: () => h(icon)});
    }
  }
}
</script>

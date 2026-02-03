<template>
  <n-config-provider :theme="themeModeStore.isDark ? darkTheme : null">
    <n-space vertical style="height: 100vh">
      <!--    <n-switch v-model:value="collapsed">-->
      <!--      <template #checked-icon>-->
      <!--        <n-icon :component="ArrowForwardOutline" />-->
      <!--      </template>-->
      <!--      <template #unchecked-icon>-->
      <!--        <n-icon :component="ArrowBackOutline" />-->
      <!--      </template>-->
      <!--    </n-switch>-->

      <n-layout has-sider style="height: 100vh">
        <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :collapsed="collapsed"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
            class="pt-5"
        >
          <n-menu
              v-model:value="activeKey"
              :collapsed="collapsed"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"

          />
<!--          <n-switch v-model:value="isDark">-->

<!--          </n-switch>-->
        </n-layout-sider>
        <n-layout>
          <n-layout-header id="header"><Header/></n-layout-header>
          <n-layout-content id="content">
            <n-message-provider>
              <router-view/>
            </n-message-provider>
          </n-layout-content>
          <n-layout-footer id="footer">Footer</n-layout-footer>
        </n-layout>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>


<script>
import {
  Earth as InternetIcon,
  Grid as ServiceIcon,
  WalletOutline as FinanceIcon,
  ArrowForwardOutline, ArrowBackOutline
} from "@vicons/ionicons5";
import {NIcon} from "naive-ui";
import {h} from "vue";
import Sidebar from "@/layout/Sidebar.vue";
import Header from "@/layout/Header.vue";
import HeaderDropdown from "@/layout/HeaderDropdown.vue";
import {darkTheme} from 'naive-ui'
import {RouterLink} from "vue-router";
import {useThemeModeStore} from "@/stores/themeMode.js";

export default {
  name: "ContentDefault",
  computed: {
    ArrowBackOutline() {
      return ArrowBackOutline
    },
    ArrowForwardOutline() {
      return ArrowForwardOutline
    }
  },
  components: {Sidebar, HeaderDropdown, Header},
  setup() {
    const themeModeStore = useThemeModeStore()
    return {
      darkTheme,
      themeModeStore
    }
  },
  data() {
    return {
      activeKey: null,
      collapsed: true,
      menuOptions: [
        {
          label: () => h(
              RouterLink,
              {
                to: {
                  name: "internet",
                  params: {}
                }
              },
              {default: () => "Интернет"}
          ),
          key: "internet",
          icon: this.renderIcon(InternetIcon)
        },
        {
          label: () => h(
              RouterLink,
              {
                to: {
                  name: "service",
                  params: {}
                }
              },
              {default: () => "Сервисы"}
          ),
          key: "service",
          icon: this.renderIcon(ServiceIcon),
        },
        {
          label: () => h(
              RouterLink,
              {
                to: {
                  name: "finance",
                  params: {}
                }
              },
              {default: () => "Финансы"}
          ),
          key: "finance",
          icon: this.renderIcon(FinanceIcon)
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

<style scoped>

#header {
  padding: 1rem;
}

#content {
  height: 90vh;

}

#footer {
  height: 5vh;
}

</style>

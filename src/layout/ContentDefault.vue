<script>
import Header from "@/layout/Header.vue";

export default {
  name: "Content",
  components: {Header}
}
</script>

<template>
  <n-layout has-sider class="h-100">
    <n-layout-sider bordered content-style="padding: 24px;">
      <Header/>
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <n-message-provider>
          <router-view/>
        </n-message-provider>
      </n-layout-content>
      <n-layout-footer bordered>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped>

</style>

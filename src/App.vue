<script setup>
import Header from "@/layout/Header.vue";
import Content from "@/layout/Content.vue";
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
        <Content/>
      </n-layout-content>
      <n-layout-footer bordered>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>

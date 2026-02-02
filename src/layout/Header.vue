<script>

import HeaderDropdown from "@/layout/HeaderDropdown.vue";
import Sidebar from "@/layout/Sidebar.vue";

export default {
  name: "Header",
  components: {Sidebar, HeaderDropdown}
}
</script>

<template>
  <header class="static-header">
    <Sidebar/>
    <HeaderDropdown/>
  </header>
</template>


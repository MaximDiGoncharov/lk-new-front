<script>

import HeaderDropdown from "@/layout/HeaderDropdown.vue";
import Sidebar from "@/layout/Sidebar.vue";
import {CashOutline as CashIcon} from '@vicons/ionicons5';

export default {
  name: "Header",
  components: {Sidebar, HeaderDropdown, CashIcon}
}
</script>

<template>
  <header>
    <n-space justify="end" class="header-wrapper">
            <HeaderDropdown/>
    </n-space>
  </header>
</template>


<template>
  <n-dropdown
      :options="options"
  >
    <n-button #icon>
      <EllipsisVertical/>
    </n-button>
  </n-dropdown>
</template>

<script>
import {h} from 'vue';
import {
  LogOutOutline,
  PersonCircleOutline,
  EllipsisVertical
} from "@vicons/ionicons5";


import {NIcon} from "naive-ui";


export default {
  name: "HeaderDropdown",
  components: {EllipsisVertical},
  data() {
    return {
      options: [
        {
          label: "User Profile",
          key: "profile",
          icon: this.renderIcon(PersonCircleOutline),
          props: this.renderLink('/user')
        },
        {
          label: "Logout",
          key: "logout",
          icon: this.renderIcon(LogOutOutline),
          props: this.renderLink('/login')
        }
      ]
    }
  },
  methods: {
    renderIcon(icon) {
      return () => {
        return h(NIcon, null, {
          default: () => h(icon)
        });
      };
    },
    renderLink(to) {
      return {
        onClick: () => this.$router.push(to)
      };
    }
  }
}
</script>

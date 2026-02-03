<template>
  <n-dropdown :options="options">
    <n-button>
      <template #icon>
        <n-icon>
          <DropdownIcon />
        </n-icon>
      </template>
    </n-button>
  </n-dropdown>
</template>

<script>
import {h} from 'vue';
import {
  LogOutOutline,
  PersonCircleOutline,
  EllipsisVertical,
  EllipsisVerticalSharp as DropdownIcon
} from "@vicons/ionicons5";


import {NIcon} from "naive-ui";


export default {
  name: "HeaderDropdown",
  components: {EllipsisVertical,DropdownIcon},
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
          props: this.renderLink('/logout')
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

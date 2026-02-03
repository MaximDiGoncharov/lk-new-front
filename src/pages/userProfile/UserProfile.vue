<script>
import UserProfilePassword from "@/pages/userProfile/UserProfilePassword.vue";
import UserProfileIno from "@/pages/userProfile/UserProfileInfo.vue";

export default {
  name: "UserProfile",
  components: {UserProfileIno, UserProfilePassword}
}
</script>

<template>
  <n-card title="Настройки пользователя" style="margin-bottom: 16px">
    <n-tabs default-value="password" justify-content="space-evenly" type="line">
      <n-tab-pane name="info" tab="info">
       <UserProfileIno/>
      </n-tab-pane>
      <n-tab-pane name="password" tab="password">
        <UserProfilePassword/>
      </n-tab-pane>
    </n-tabs>
  </n-card>

</template>

<style scoped>

</style>
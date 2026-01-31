<script>
export default {
  name: "UserProfile"
}
</script>

<template>
  <n-card title="Настройки пользователя" style="margin-bottom: 16px">
    <n-tabs default-value="oasis" justify-content="space-evenly" type="line">
      <n-tab-pane name="info" tab="info">
        Общая информация
      </n-tab-pane>
      <n-tab-pane name="password" tab="password">
        Пароль
      </n-tab-pane>
    </n-tabs>
  </n-card>

</template>

<style scoped>

</style>
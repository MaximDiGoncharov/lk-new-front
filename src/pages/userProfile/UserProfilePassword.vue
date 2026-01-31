<script>
export default {
  name: "UserProfilePassword"
}
</script>

<template>
  <n-form>
    <n-form-item>
      <n-input
          type="password"
          show-password-on="mousedown"
          placeholder="Password"
          :minlength="6"
      />
    </n-form-item>
  </n-form>
</template>

<style scoped>

</style>
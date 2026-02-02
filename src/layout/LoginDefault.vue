<script>
import Login from '@/pages/auth/LogIn.vue';

export default {
  name: "LoginDefault",
  components: {Login}
}
</script>

<template>
  <n-message-provider>
    <Login/>
  </n-message-provider>
</template>


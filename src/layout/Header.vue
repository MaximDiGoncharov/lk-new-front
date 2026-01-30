<script>
export default {
  name: "Header"
}
</script>

<template>
  <header class="static-header">
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/user" class="nav-link">User</router-link>
        </li>
        <li>
          <router-link to="/internet" class="nav-link">Internet</router-link>
        </li>
        <li>
          <router-link to="/service" class="nav-link">Service</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
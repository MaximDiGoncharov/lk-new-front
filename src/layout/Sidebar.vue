<script>
export default {
  name: "Sidebar"
}
</script>

<template>
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
      <li>
        <router-link to="/finance" class="nav-link">Finance</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>

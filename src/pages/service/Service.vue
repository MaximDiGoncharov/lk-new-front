<script>
export default {
  name: "Service"
}
</script>

<template>
  <n-layout>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="i in ['Услуги', 'Активные']">
      {{ i }}
    </n-breadcrumb-item>
  </n-breadcrumb>
    <n-card  class="mt-5" hoverable>
      <n-h1>Услуги</n-h1>
      <n-p>
        Hear the Wind Sing ( Kaze no uta o kike) is the first novel by
        Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of
        Gunzo (one of the most influential literary magazines in Japan), and in book
        form the next month. The novel was adapted by Japanese director Kazuki ?mori
        in a 1981 film distributed by Art Theatre Guild. An English translation by
        Alfred Birnbaum appeared in 1987.
      </n-p>
    </n-card>


    <n-button type="primary" class="d-none">
    service
  </n-button>
  </n-layout>
</template>

<style scoped>

</style>

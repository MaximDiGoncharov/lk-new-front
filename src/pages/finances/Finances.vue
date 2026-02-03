<script>
import Balance from "@/pages/finances/Balance.vue";

export default {
  name: "Finances",
  components: {Balance},
}
</script>

<template>
  <n-layout class="p-5">
    <n-breadcrumb>
      <n-breadcrumb-item v-for="i in ['Интернет', 'Тариф']">
        {{ i }}
      </n-breadcrumb-item>
    </n-breadcrumb>
  </n-layout>


  <n-card title="Финансы" style="margin-bottom: 16px">
    <n-tabs default-value="balance" justify-content="space-evenly" type="line">
      <n-tab-pane name="balance" tab="Баланс">
        <Balance/>
      </n-tab-pane>
      <n-tab-pane name="freeze" tab="Заморозка">
        Заморозка
      </n-tab-pane>
      <n-tab-pane name="postponement" tab="Отсрочка">
        Отсрочка
      </n-tab-pane>
      <n-tab-pane name="replenishments" tab="Пополнения">
        Пополнения
      </n-tab-pane>
      <n-tab-pane name="write-off" tab="Списания">
        Списания
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<style scoped>

</style>

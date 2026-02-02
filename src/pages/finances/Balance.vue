<script>
import {Refresh, AddCircleOutline} from "@vicons/ionicons5";
import {useApiStore} from "@/stores/ajax.js";

export default {
  name: "Balance",
  setup() {
    const apiStore = useApiStore()
    return {apiStore}
  },
  data() {
    return {
      balance: null
    }
  },
  components: {Refresh, AddCircleOutline},
  methods: {
    async getPaymentLink() {
      this.apiStore._ajax(
          this.globals.MAIN_URL + "get-payment-link",
          {},
          (response) => {
          },
          (response) => {
          }
      );
    },
    async getBalance() {
      this.apiStore._ajax(
          "get-balance",
          {},
          (response) => {
            const {balance} = data.data;
            this.balance = balance;

          },
          (response) => {
            this.balance = 500000;
          }
      );
    }
  }
}
</script>

<template>
  <n-card>
    <n-h1>
      {{ balance ?? 'Загрузка...' }}
    </n-h1>
    <n-button-group>
      <n-button round>
        <template #icon>
          <n-icon>
            <Refresh/>
          </n-icon>
        </template>
        Обновить
      </n-button>
      <n-button round>
        <template #icon>
          <n-icon>
            <AddCircleOutline/>
          </n-icon>
        </template>
        Пополнить
      </n-button>
    </n-button-group>
  </n-card>

</template>

<style scoped>

</style>

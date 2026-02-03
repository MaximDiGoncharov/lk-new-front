<script>
import {useApiStore} from "@/stores/ajax.js";

export default {
  name: "Internet",
  data() {
    return {
      selectedValue: null,
      showModal: false,
      options: [
        {
          "value": 13330,
          "label": "Ярославль 200 Мбит/с - 6 500 руб.",
          "price": "6500.00"
        },
        {
          "value": 13329,
          "label": "Оптимальный: Unlim 100 Мбит/с (270р.)",
          "price": "270.00"
        },
        {
          "value": 13328,
          "label": "Оптимальный: Unlim 100 Мбит/с (370р.)",
          "price": "370.00"
        },
        {
          "value": 13327,
          "label": "Ярославль 500 Мбит/с",
          "price": "9000.00"
        },
        {
          "value": 13326,
          "label": "Челябинск 50 Мбит/с - 2 000",
          "price": "2000.00"
        },
        {
          "value": 13325,
          "label": "В.Новогород 60 Мбит/сек - 3500 руб.",
          "price": "3500.00"
        },
        {
          "value": 13324,
          "label": "В.Новогород 60 Мбит/сек",
          "price": "3500.00"
        },
        {
          "value": 13323,
          "label": "В.Новгород 500 Мбит/с –12000 руб.",
          "price": "12000.00"
        },
        {
          "value": 13322,
          "label": "Ярославль 150 Мбит/с - 4000",
          "price": "4000.00"
        },
        {
          "value": 13321,
          "label": "Ярославль150 Мбит/с",
          "price": "4000.00"
        },
        {
          "value": 13320,
          "label": "Череповец: 1 Гбит/с - 30 000 руб.",
          "price": "30000.00"
        },
        {
          "value": 13319,
          "label": "Череповец: 1 Гбит/с - 35 000 руб.",
          "price": "35000.00"
        },
        {
          "value": 13318,
          "label": "Технический_IP-TV на чужом ИНТ (0 руб.)",
          "price": "0.00"
        },
        {
          "value": 13317,
          "label": "Великий Новгород 1000 Мбит/с/1Гбит - 15000 руб.",
          "price": "15000.00"
        },
        {
          "value": 13316,
          "label": "Ярославль 70 Мбит/с - 3000 руб.",
          "price": "3000.00"
        },
        {
          "value": 13315,
          "label": "Челябинск 100 Мбит/с - 2000",
          "price": "2000.00"
        },
        {
          "value": 13314,
          "label": "VIP 200",
          "price": "0.00"
        },
        {
          "value": 13313,
          "label": "Челябинск 100 Мбит/с - 3000 руб.",
          "price": "3000.00"
        },
        {
          "value": 13312,
          "label": "Великий Новгород 200 Мбит/с- 7500 руб.",
          "price": "7500.00"
        },
        {
          "value": 13311,
          "label": "Ярославль 300 Мбит/с - 7200 руб.",
          "price": "7200.00"
        },
        {
          "value": 13310,
          "label": "Челябинск 80 Мбит/с- 3000",
          "price": "3000.00"
        },
        {
          "value": 13309,
          "label": "Ярославль1гБит/с – 15000",
          "price": "15000.00"
        },
        {
          "value": 13308,
          "label": "В.Новгород 200 Мбит/с – 2000 руб.",
          "price": "2000.00"
        }]
    }
  },
  setup() {
    const apiStore = useApiStore()
    return {apiStore}
  },
  created() {
    this.getCurrentTariff()
  },
  methods: {
    submitCallback() {
      this.apiStore._ajax(
          "change-next-tariff",
          {
            method: "POST",
            body: {
              tariff_id: this.selectedValue,
            },
          },
          (response) => {
          },
          (response) => {
          },
          () => {
          }
      );
    },
    cancelCallback() {
    },
    getCurrentTariff() {
      this.apiStore._ajax(
          "get-current-tariff",
          {
            method: "POST",
            body: {
              tariff_id: this.selectedValue,
            },
          },
          (response) => {
          },
          (response) => {
          },
          () => {
            // заглушка
            this.selectedValue = 13329;
          }
      );
    }
  }
}
</script>

<template>

  <n-layout class="p-5">
    <n-breadcrumb>
      <n-breadcrumb-item v-for="i in ['Интернет', 'Тариф']">
        {{ i }}
      </n-breadcrumb-item>
    </n-breadcrumb>
    <n-card class="mt-5" hoverable>
      <n-h1>Интернет</n-h1>
      <n-p>
        Выберите наиболее подходящий тариф
      </n-p>
      <n-select
          v-model:value="selectedValue"
          filterable
          placeholder="Выберите нужный тариф"
          :options="options"
          size="large"
          class="mb-8"
      />

      <n-button @click="showModal = true" >
        Активировать
      </n-button>

      <n-modal
          v-model:show="showModal"
          preset="dialog"
          title="Активация тарифа"
          content="Активировать выбранный тариф ?"
          positive-text="Подтвердить"
          negative-text="Нет"
          @positive-click="submitCallback"
          @negative-click="cancelCallback"
      />
    </n-card>


  </n-layout>
</template>

<style scoped>

</style>

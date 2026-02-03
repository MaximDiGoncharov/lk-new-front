<script>
import List from "@/mixins/service/get-available-servs-custom.json";
import CurrentList from "@/mixins/service/get-current-servs.json";

import {useApiStore} from "@/stores/ajax.js";
import {useMessage} from 'naive-ui'

export default {
  name: "Service",
  setup() {
    const apiStore = useApiStore()
    const message = useMessage()
    return {
      apiStore,
      message,
      error(txt) {
        message.error(txt)
      },
      success(txt) {
        message.success(txt)
      }
    }
  },
  data() {
    return {
      showModal: false,
      services: List.data,
      selectedValue: {},
      showBtnActivate: true,
      currentValue: CurrentList.data
    }
  },
  computed: {
    flattenedModes() {
      return this.currentValue.flatMap(serv => serv.modes)
    }
  },
  methods: {
    cancelCallback() {
      this.message.error("Заявка отклонена");
    },

    submitCallback() {
      this.message.success("Благодарим за обращения! Менеджер свяжется с Вами в ближайшее время!");
    },

    handleClose(usmid) {
      this.message.success(usmid + " Услуга успешно отключена");

    }
  },
  // watch: {
  //   selectedValue: {
  //     handler(newVal) {
  //       console.log(newVal);
  //       this.showBtnActivate = Object.keys(newVal || {}).length > 0;
  //       },
  //     deep: true,
  //     immediate: true
  //   }
  // }
}
</script>

<template>
  <n-layout class="p-5">
    <n-breadcrumb>
      <n-breadcrumb-item v-for="i in ['Услуги', 'Список услуг']">
        {{ i }}
      </n-breadcrumb-item>
    </n-breadcrumb>
    <n-card class="mt-5" hoverable>
      <n-h1>Услуги</n-h1>
      <n-p>
        Активированные услуги и тарифы
      </n-p>
      <!--      Подключенные услуги -->
      <n-space>
        <n-tag
            v-for="mode in flattenedModes"
            :key="mode.value || mode.label"
            type="success"
            closable
            @close="handleClose(mode.value)"
        >
          {{ mode.label }}
        </n-tag>
      </n-space>
      <n-p class="mt-6">
        Списко новых услуг и их режимов
      </n-p>
      <n-button @click="showModal=true" v-if="showBtnActivate" class="float-right">
        Активировать
      </n-button>
      <n-modal
          v-model:show="showModal"
          preset="dialog"
          title="Активировать"
          content="?"
          positive-text="Оставить заявку"
          negative-text="Отменить"
          @positive-click="submitCallback"
          @negative-click="cancelCallback"
      >
        Для активации выбранных услуг с Вами свяжется менеджер
      </n-modal>

      <!--      список доступных услуг -->
      <div v-for="service in services" class="mb-6">
        <n-h2>{{ service.label }}</n-h2>
        <n-select
            v-model:value="selectedValue[service.value]"
            filterable
            multiple
            placeholder="Выберите нужный тариф"
            :options="service.modes"
            size="large"
            class="mb-8"
        />
      </div>
    </n-card>

  </n-layout>
</template>

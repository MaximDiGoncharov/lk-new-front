<script>
import { Refresh,AddCircleOutline} from "@vicons/ionicons5";

export default {
  name: "Balance",
  data() {
    return {
      balance: null
    }
  },
  components: {Refresh,AddCircleOutline},
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
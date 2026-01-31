<script>
import {useApiStore} from "@/stores/ajax.js";

export default {
  name: 'UserProfilePassword',
  setup() {
    const apiStore = useApiStore()
    return {apiStore}
  },
  data() {
    return {
      formData: {
        oldPassword: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: 'Подтверждение старого пароля обязателено',
            trigger: ['blur', 'input']
          }
        ],
        password: [
          {
            required: true,
            message: 'Новый пароль обязателен',
            trigger: ['blur', 'input']
          },
          {
            min: 4,
            message: 'Логин должен содержать минимум 4 символа',
            trigger: ['blur']
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: 'Подтверждение пароля обязателено',
            trigger: ['blur', 'input']
          },
          {
            min: 4,
            message: 'Логин должен содержать минимум 4 символа',
            trigger: ['blur']
          }
        ]
      },
      loading: false,
      formRef: null,
    }
  },
  methods: {
    async handleSubmit() {
      await this.$refs.formRef.validate();
      this.loading = true;
      this.apiStore._ajax(
          "get-short-user-info",
          {
            method: "POST",
          },
          (response) => {
            this.loginSuccess(response);
          },
          (response) => {
            this.loginError({...response});
          },
          () => {
            this.loading = false
          }
      );

    },
    async loginSuccess() {
      // .. после успешной авторизации
      this.apiStore._setStorage("sid", 1);
      this.$router.push("/internet");

    },
    async loginError(message) {
      this.formData.password = '';
      this.formData.oldPassword = '';
      this.formData.confirmPassword = '';
      await this.$refs.formRef.validate();
    }
  }
}
</script>

<template>
  <n-form :model="formData" :rules="rules" ref="formRef" class="w-50 mx-auto" vertical>

    <n-form-item label="Старый пароль" path="oldPassword">
      <n-input v-model:value="formData.oldPassword" placeholder="Введите старый пароль"/>
    </n-form-item>
    <n-form-item label="Новый пароль" path="password">
      <n-input v-model:value="formData.password" type="password" placeholder="Введите новый пароль"/>
    </n-form-item>
    <n-form-item label="Подтвердите новый пароль" path="confirmPassword">
      <n-input v-model:value="formData.confirmPassword" type="password" placeholder="Подтвердите новый пароль"/>
    </n-form-item>
    <n-form-item>
      <n-button type="primary" native-type="submit" :loading="loading" @click="handleSubmit">
        {{ loading ? null : "Обновить" }}
      </n-button>
    </n-form-item>

  </n-form>
</template>

<style scoped>

</style>
<template>

  <n-form :model="formData" :rules="rules" ref="formRef" class="w-50 mx-auto" vertical>
    <n-image
        class="d-flex justify-content-center"
        width="100"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        placeholder="izet"
    />
    <n-form-item label="Логин" path="login">
      <n-input v-model:value="formData.login" placeholder="Введите логин"/>
    </n-form-item>
    <n-form-item label="Пароль" path="password">
      <n-input v-model:value="formData.password" type="password" placeholder="Введите пароль"/>
    </n-form-item>
    <n-form-item>
      <n-button type="primary" native-type="submit" :loading="loading" @click="handleSubmit">
        {{ loading ? null : "Войти" }}
      </n-button>
    </n-form-item>

  </n-form>
</template>


<script>
import {useApiStore} from "@/stores/ajax.js";

export default {
  name: 'Login',
  setup() {
    const apiStore = useApiStore()
    return {apiStore}
  },
  data() {
    return {
      formData: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          {
            required: true,
            message: 'Логин обязателен',
            trigger: ['blur', 'input']
          },
          {
            min: 3,
            message: 'Логин должен содержать минимум 3 символа',
            trigger: ['blur']
          }
        ],
        password: [
          {
            required: true,
            message: 'Пароль обязателен',
            trigger: ['blur']
          },
          {
            min: 6,
            message: 'Пароль должен содержать минимум 6 символов',
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
      this.formData.login = '';
      this.formData.password = '';
      await this.$refs.formRef.validate();
    }
  }
}
</script>

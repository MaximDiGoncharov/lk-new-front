<template>
  <n-flex justify="space-around" size="large" vertical class="h-100 w-100" hoverable>
    <n-card class="mx-auto border rounded" id="card-wrapper">
      <n-form :model="formData" :rules="rules" ref="formRef" vertical hoverable>
        <n-image
            class="d-flex justify-content-center mb-5"
            width="100"
            :src="imageLogo"
            placeholder="izet"
        />
        <n-form-item label="Логин" path="login">
          <n-input v-model:value="formData.login" placeholder="Введите логин"/>
        </n-form-item>
        <n-form-item label="Пароль" path="password">
          <n-input v-model:value="formData.password" type="password" placeholder="Введите пароль"/>
        </n-form-item>
        <n-form-item  class="d-flex justify-content-center mt-5">
            <n-button type="primary" native-type="submit" :loading="loading" @click="handleSubmit" class="">
              {{ loading ? null : "Войти" }}
            </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </n-flex>

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
      imageLogo: "/yar/apple-icon.png",
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

<style scoped>
#card-wrapper {
  max-width: 28rem;
}
</style>

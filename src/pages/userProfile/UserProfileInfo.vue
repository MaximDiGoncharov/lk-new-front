<template>

  <n-form
      :model="formData"
      :rules="rules"
      ref="formRef"
      class="w-50 mx-auto"
      vertical
  >

    <n-form-item label="Email" path="email">
      <n-auto-complete
          v-model:value="formData.email"
          :options="autoCompleteOptions"
          placeholder="Введите email"
      />
    </n-form-item>
    <n-form-item
        label="Телефон"
        path="phone">
      <n-input
          v-model:value="formData.phone"
          type="text"
          placeholder="Введите телефон"/>
    </n-form-item>
    <n-form-item
        label="Комментарий"
        path="comment">
      <n-input
          v-model:value="formData.comment"
          type="textarea"
          placeholder="Введите комментарий"/>
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
  name: 'UserProfileIno',
  setup() {
    const apiStore = useApiStore()
    return {apiStore}
  },
  data() {
    return {
      formData: {
        client_code: "",
        email: "",
        phone: "+",
        comment: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Email обязателен',
            trigger: ['blur', 'input']
          }
        ],
        phone: [
          {
            required: true,
            message: 'Телефон обязателен',
            trigger: ['blur','input']
          },
          {
            min: 6,
            message: 'Пароль должен содержать минимум 6 символов',
            trigger: ['blur','input']
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
    },
  },
  computed:{
    autoCompleteOptions() {
      return ["@gmail.com", "@mail.ru", "@yandex.com", "@yandex.ru"].map((suffix) => {
        const prefix = this.formData.email.split("@")[0];
        return {
          label: prefix + suffix,
          value: prefix + suffix
        };
      });
    }
  }
}
</script>

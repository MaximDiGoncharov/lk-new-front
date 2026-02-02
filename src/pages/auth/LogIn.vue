<template>
  <n-flex justify="center" size="large" vertical class="h-100 w-100" hoverable>
    <n-image
        class=" mx-auto mb-5"
        width="100"
        :src="imageLogo"
        placeholder="izet"
    />
    <n-card class="mx-auto border rounded" id="card-wrapper" size="huge">
      <n-form :model="formData" :rules="rules" ref="formRef" vertical hoverable>
        <n-h1 class="text-center">
          Добро пожаловать
        </n-h1>
        <n-p class="text-center">
          Введите погин и пароль
        </n-p>
        <n-form-item label="Логин" path="login">
          <n-input v-model:value="formData.login" placeholder="Введите логин"/>
        </n-form-item>
        <n-form-item label="Пароль" path="password">
          <n-input v-model:value="formData.password" type="password" placeholder="Введите пароль"/>
        </n-form-item>
        <n-form-item class="d-flex justify-content-center mt-5">
          <n-button type="info" native-type="submit" :loading="loading" @click="handleSubmit" class="">
            {{ loading ? null : "Войти" }}
          </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </n-flex>

</template>


<script>
import {useApiStore} from "@/stores/ajax.js";
import {useMessage} from 'naive-ui'

export default {
  name: 'Login',
  setup() {
    const apiStore = useApiStore();
    const message = useMessage()
    return {apiStore, message}
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
            min: 4,
            message: 'Пароль должен содержать минимум 4 символов',
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
          "login",
          {
            method: "POST",
            body: {
              login: this.formData.login,
              password: this.formData.password
            }
          },
          (response) => {
            this.loginSuccess(response);
          },
          (response) => {
            this.loginError(response);
          },
          () => {
            this.loading = false
          }
      );

    },
    async loginSuccess() {
      this.message.success("Авторизация прошла успешно", {closable: true,});
      this.apiStore._setStorage("sid", 1);
      setTimeout(() => {
        this.$router.push("/internet");
      }, 100);

    },
    async loginError({message}) {
      this.message.error(message, {closable: true});
      this.formData.login = '';
      this.formData.password = '';
      await this.$refs.formRef.validate();
    }
  }
}
</script>

<style scoped>
@media (max-width: 480px) {
  #card-wrapper {
    max-width: 24rem;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  #card-wrapper {
    max-width: 28rem;
  }
}


@media (min-width: 768px) {
  #card-wrapper {
    max-width: 28rem;
  }
}

@media (min-width: 992px) {
  #card-wrapper {
    max-width: 28rem;
  }
}

@media (min-width: 1200px) {
  #card-wrapper {
    max-width: 28rem;
  }
}

@media (min-width: 1400px) {
  #card-wrapper {
    max-width: 28rem;
  }
}

</style>

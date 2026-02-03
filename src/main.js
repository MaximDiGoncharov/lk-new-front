import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)
app.provide('globals',{
    MAIN_URL: 'http://localhost/user-cabinet/'
})
app.provide('methods',{
    // метод через который мы обращаемся к бэку
    async _ajax(url, options = {}, handleSuccess = () => { }, handleError = () => { }, handleFinally = () => {}) {
        try {
            const config = {
                method: options.method || 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {}),
                },
                body: options.body ? JSON.stringify(options.body) : null,
                ...options.extraOptions,
            };

            const response = await fetch(url, config);
            let data = await response.json();

            if (!response.ok) {
                const errorMessage = data?.message || 'Unknown error';
                handleError(data);
                return null;
            }

            handleSuccess(data);
            return data;
        } catch (error) {
            handleError(error);
            return null;
        } finally {
            handleFinally();
        }
    }
    ,
    // обработчик отрицательного ответа
    _handleError(obj = {}) {
        console.log(obj);
        this._dangerNotify(obj?.message || 'Error query');
    },
    // обработчки положительного ответа
    _handleSuccess(obj) {
        this._successNotify(obj?.message || 'Success query');
    },
    // вызывает положительное уведомление
    _successNotify(message, options = {}) {
        // toast(message, {
        //     position: 'top-right',
        //     autoClose: 3000,
        //     type: 'success',
        //     ...options
        // });
    },
    // вызывает отрицательное уведомление
    _dangerNotify(message, options = {}) {
        // toast(message, {
        //     position: 'top-right',
        //     autoClose: 3000,
        //     type: 'error',
        //     ...options
        // });
    }
})
app.mount('#app')

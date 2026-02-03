// stores/apiStore.js (или любой store)
import {defineStore} from 'pinia'
import {useMessage} from "naive-ui";

export const useApiStore = defineStore('api',
    () => {

        function _url() {
            return 'http://localhost/user-cabinet/';
        }

        // Метод через который мы обращаемся к бэку
        async function _ajax(url, options = {}, handleSuccess = () => {
        }, handleError = () => {
        }, handleFinally = () => {
        }) {
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
                }
                url = _url() + url;
                const response = await fetch(url, config)
                let data = await response.json()

                if (!response.ok) {
                    const errorMessage = data?.message || 'Unknown error'
                    handleError(data)
                    return null
                }

                handleSuccess(data)
                return data
            } catch (error) {
                handleError(error)
                return null
            } finally {
                handleFinally()
            }
        }

        // Обработчик отрицательного ответа
        function _handleError(obj = {}) {
            _dangerNotify(obj?.message || 'Error query')
        }

        // Обработчик положительного ответа
        function _handleSuccess(obj) {
            _successNotify(obj?.message || 'Success query')
        }

        // Вызывает положительное уведомление
        function _successNotify(message, options = {}) {
            message.success(message || 'Success query', options)
        }

        // Вызывает отрицательное уведомление
        function _dangerNotify(message) {
         message.error(message || 'Error query');
        }

        function _getStorage(key) {
            return sessionStorage.getItem(key) ?? null;
        }

        function _clearStorage() {
            sessionStorage.clear();
        }

        function _setStorage(key, value, days = 1) {
            sessionStorage.setItem(key, value);
        }

        return {
            _ajax,
            _handleError,
            _handleSuccess,
            _successNotify,
            _dangerNotify,
            _getStorage,
            _setStorage,
            _clearStorage
        }
    })

<template>
    <div class="card">
        <div class="card-content">
            <button class="button is-primary" @click="loadQuote">Load Quote</button>
            <p v-if="errorMessage" class="notification is-danger">{{ errorMessage }}</p>
            <p v-if="currentQuote" class="notification">{{ currentQuote }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'KanyeRest',
    data() {
        return {
            currentQuote: '',
            errorMessage: ''
        }
    },

    methods: {
        loadQuote() {
            axios.request({
                type: 'get',
                url: 'https://api.kanye.rest',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => { 
                console.log(response);
                this.currentQuote = response.data.quote;
            }).catch((error) => {
                this.errorMessage = error;
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>

</style>
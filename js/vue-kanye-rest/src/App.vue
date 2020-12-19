<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <kanye-rest></kanye-rest>
    </div>
</template>

<script>
import KanyeRest from './components/KanyeRest';

export default {
    name: "App",
    components: {
        KanyeRest
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

<template>
    <div id="app">
        <Header :hasLogin="hasLogin"/>
        <transition name="moveInUp">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        name: 'App',
        components: {Header},
        data() {
            return {
                hasLogin: localStorage.login
            };
        },
    }
</script>


<style lang="scss">
    @import "./assets/scss/main.scss";
    .moveInUp-enter-active{
        animation: fadeIn 2s ease-in;
    }
    @keyframes fadeIn{
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            opacity: 1;
        }
    }
    .moveInUp-leave-active{
        animation: moveInUp .3s ease-in;
    }
    @keyframes moveInUp{
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-400px);
        }
    }
</style>

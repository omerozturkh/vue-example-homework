<template>
    <header>
        <div class="container">
            <nav>
                <router-link to="/" class="navbar-logo"><img alt="Rem logo" src="@/assets/logo.png"></router-link>
                <router-link to="/table" class="navbar-link" v-if="hasLogin"> Table</router-link>
                <router-link to="/graph" class="navbar-link" v-if="hasLogin">Graph</router-link>
            </nav>

        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: ['hasLogin'],

    }
</script>

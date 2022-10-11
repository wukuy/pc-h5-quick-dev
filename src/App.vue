<template>
    <v-app>
        <v-main>
            <v-theme-provider theme="darkTheme">
                <RouterView />
            </v-theme-provider>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
@media screen and (min-width: 750px) {
    html {
        font-size: 37.5PX !important;
    }
}
</style>

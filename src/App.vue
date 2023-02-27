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
@import '@/assets/styles/default.scss';

</style>

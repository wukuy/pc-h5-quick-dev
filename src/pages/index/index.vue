<template>
    <div>
        <label>{{ t('hello') }}</label>
    </div>
</template>

<script setup>
const { t } = useI18n()

</script>

<route lang="yaml">
    meta:
      layout: index
</route>

<style lang="scss" src="./index-pc.scss"></style>
<style lang="scss" src="./index-h5.scss"></style>

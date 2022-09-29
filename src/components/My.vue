<template>
    <div>{{ str }}</div>
</template>
<script setup>
import { ref } from 'vue'

const str = ref('aaa123')
setTimeout(() => {
    str.value = 1
}, 1500)
</script>

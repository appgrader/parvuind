<template>
    <h1 class="text-4xl text-red">{{ ping }}</h1>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            ping: 'pong',
        };
    },
}
</script>

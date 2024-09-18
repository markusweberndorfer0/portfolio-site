<template>
    <div class="min-h-screen bg-sky-950 text-gray-300 flex justify-start">
        <div class="remaining from-gray-900 to-custom-blue min-h-screen bg-gradient-to-r"></div>
        <div class="w-[1500px] bg-custom-blue pl-3 pr-3 min-h-screen">
            <HeaderComponent />
            <slot></slot>
            <FooterComponent />
        </div>
        <div class="remaining from-gray-900 to-custom-blue bg-gradient-to-l">
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    titleTemplate(title) {
        return title ? `${title} - Weberndorfer.eu` : `Weberndorfer.eu`;
    },
})
</script>

<style lang="scss">
.remaining {
    width: calc(calc(100% - 1500px) / 2);
}

.main-min-height {
    min-height: calc(100vh - theme("space.12") - theme("space.8"))
}

h1 {
    @apply text-3xl font-bold;
}

h2 {
    @apply text-2xl font-bold;
}

h3 {
    @apply text-xl font-bold;
}

a[underline] {
    @apply underline
}
</style>

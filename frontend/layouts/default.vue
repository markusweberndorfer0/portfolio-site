<template>
    <div class="min-h-screen bg-sky-950 text-gray-300 flex justify-start">
        <div class="remaining from-gray-900 to-custom-blue min-h-screen bg-gradient-to-r"></div>
        <div class="w-[1500px] bg-custom-blue pl-3 pr-3 min-h-screen">
            <HeaderComponent class="print:hidden" />
            <slot></slot>
            <FooterComponent class="print:hidden" />
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
    @apply text-3xl font-bold mb-3;
}

h2 {
    @apply text-2xl font-bold mb-2;
}

h3 {
    @apply text-xl font-bold mb-1;
}

p {
    @apply mb-1;
}

/* Scroll bar stylings */
::-webkit-scrollbar {
    width: 5px;
    height: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #5c5c5c;
    border-radius: 5px;
    cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

@media print {
    * {
        print-color-adjust: exact;
    }
}
</style>

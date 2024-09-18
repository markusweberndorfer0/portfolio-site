<template>
    <div
        class="fixed top-0 left-0 h-screen w-screen flex justify-center md:pt-[calc(100vh/5)] pt-[calc(100vh/8)] backdrop-brightness-50 z-50">
        <div
            class="bg-custom-blue pt-2 border-2 border-gray-600 rounded-xl h-max md:min-w-[400px] md:max-w-[600px] max-md:mr-5 max-md:ml-5">
            <div class="flex justify-between border-b-2 pb-2 border-gray-600 pr-5 pl-5 items-center sticky">
                <h1>Project description</h1>
                <font-awesome-icon icon="fa-solid fa-close" size="2xl" class="hover:cursor-pointer"
                    @click="$emit('closeModal')"></font-awesome-icon>
            </div>
            <div class="max-h-[calc(100vh/2)] overflow-auto">
                <div class="pr-5 pl-5 pt-2 pb-2" v-html="description" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    description: String,
})

defineEmits([
    'closeModal'
])
</script>

<style lang="scss">
@keyframes drop-in {
    0% {
        transform: translateX(-100vw) translateY(-100vh);
    }

    100% {
        transform: translateX(0) translateY(0);
    }
}
</style>
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})
</script>

<template>
    <NuxtLayout>
        <div class="main-min-height flex flex-col w-100 items-center">
            <h1 class="text-center text-3xl font-bold">Error {{ error?.statusCode }}<br /><span>{{ error?.statusMessage
                    }}</span>
            </h1>
            <a class="text-center mt-10 text-xl" href=".">Back</a>
        </div>
    </NuxtLayout>
</template>
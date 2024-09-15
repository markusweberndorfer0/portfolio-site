<template>
    <a v-if="!!chip" :href="chip.link" target="_blank"
        class="rounded p-0.5 w-max border-solid border-gray-400 border-[1.5px] pl-[5px] pr-[5px] select-none">
        <span>
            <font-awesome-icon :icon="chip.fa_icon" />
            {{ chip.label }}
        </span>
    </a>
</template>

<script setup lang="ts">
defineProps({
    chip: Object as PropType<Technology>
});
</script>
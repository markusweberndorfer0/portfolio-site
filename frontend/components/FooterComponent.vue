<template>
    <footer
        class="sticky bottom-0 h-8 flex justify-between bg-custom-blue items-center z-50"
    >
        <div>
            <span class="flex items-center">
                <font-awesome-icon
                    icon="fa-regular fa-copyright"
                    alt="copyright icon"
                />
                &nbsp;2024 - {{ new Date().getFullYear() }} Weberndorfer.eu
            </span>
        </div>
        <div>
            <a href="impressum" class="hover:opacity-80 transition-all"
                >Impressum</a
            >
        </div>
    </footer>
</template>

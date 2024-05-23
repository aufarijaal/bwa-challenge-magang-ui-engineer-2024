<script setup lang="ts">
const navLinks = [
    {
        text: "Features",
        href: "#",
    },
    {
        text: "Pricing",
        href: "#",
    },
    {
        text: "Docs",
        href: "#",
    },
    {
        text: "Showcase",
        href: "#",
    },
]
</script>

<template>
    <nav id="navbar" class="fixed top-0 left-0 w-full z-50 p-6 backdrop-blur-sm bg-white/10">
        <div class="responsive-wrapper max-w-7xl mx-auto w-full flex justify-between items-center">
            <div id="navbar-left">
                <img class="logo-brand h-10" src="/public/logo.svg" />
            </div>

            <div id="navbar-center" class="flex items-center gap-8">
                <a v-for="link in navLinks" class="font-medium" :href="link.href">{{ link.text }}</a>
            </div>

            <div id="navbar-right" class="flex gap-8 items-center">
                <a href="#" class="font-medium">Sign
                    In</a>
                <a href="#"
                    class="border border-black shadow-[2px_2px_0px_1px_rgba(0,0,0,1)] rounded-xl px-8 py-2 bg-primary text-white font-medium">Sign
                    Up</a>
            </div>
        </div>
    </nav>
</template>

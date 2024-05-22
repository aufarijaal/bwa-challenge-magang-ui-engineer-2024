<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { abbreviateNumber } from 'js-abbreviation-number';

const foundersCount = abbreviateNumber(28_102, 0)
const founders = [
  {
    pfp: '/founder-1.png',
    alt: 'founder-1'
  },
  {
    pfp: '/founder-2.png',
    alt: 'founder-2'
  },
  {
    pfp: '/founder-3.png',
    alt: 'founder-3'
  },
]
</script>

<template>
  <main class="h-[2000px]">
    <Navbar />

    <section class="bg-gradient-to-r from-[#E2E4F2] to-[#E1D4ED] pt-40 pb-16 px-10">
      <div class="hero grid grid-cols-2">
        <div class="hero-left flex flex-col gap-8">

          <div class="hero-title font-bold text-5xl">
            Explore Business Insights Analytics
          </div>

          <div class="hero-description">
            <p class="text-gray-500">Make a better decision based on what your customer needs
              without compromising your business value propositions.</p>
          </div>

          <div class="founders-count flex gap-4 items-center">
            <div class="founders-count__overview-photos flex -space-x-2">
              <img v-for="founder in founders"
                class="founder-photo w-10 h-10 object-cover rounded-full border-2 border-white" :src="founder.pfp"
                :alt="founder.alt" />
            </div>
            <div class="founders-count__number font-semibold text-gray-600">
              {{ `Join ${foundersCount} global founders` }}
            </div>
          </div>

          <a class="hero-cta" href="#">

          </a>

          <a class="hero-cta--alt" href="#"></a>
        </div>

        <div class="hero-right">

        </div>
      </div>
    </section>
  </main>
</template>

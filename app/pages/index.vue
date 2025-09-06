<template>
  <div class="min-h-screen bg-white">
    <NavBar />
    <HeroSection />
    <FeaturesSection />
    <InstallationSection />
    <SupportSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import InstallationSection from '../components/InstallationSection.vue'
import SupportSection from '../components/SupportSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
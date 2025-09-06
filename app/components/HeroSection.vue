<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
    <div class="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <div class="space-y-8">
        <div class="flex justify-center mb-8">
          <img src="/images/logo.svg" alt="Canvas CLI Logo" class="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-2xl animate-pulse-slow" />
        </div>
        
        <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            100% Local & Free
          </span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
          AI Coding Assistant
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            In Your Terminal
          </span>
        </h1>
        
        <p class="max-w-2xl mx-auto text-xl text-gray-600">
          Canvas CLI is a powerful, privacy-focused alternative to Claude Code. 
          Run advanced AI models locally with complete control over your data and development environment.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <div class="bg-gray-900 text-gray-100 px-6 py-3 rounded-lg font-mono text-sm flex items-center space-x-2">
            <span class="text-green-400">$</span>
            <span>npm install -g canvas-cli</span>
            <button @click="copyToClipboard" class="ml-4 text-gray-400 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
          
          <a href="#installation" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
            Get Started
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
        
        <div class="flex justify-center items-center space-x-8 pt-8 text-sm text-gray-500">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>No API Keys Required</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Offline Capable</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
const copyToClipboard = () => {
  navigator.clipboard.writeText('npm install -g canvas-cli')
}
</script>

<style scoped>
.bg-grid-gray-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(229 231 235)' stroke-width='1'%3e%3cpath d='M0 16h32M16 0v32'/%3e%3c/svg%3e");
}
</style>
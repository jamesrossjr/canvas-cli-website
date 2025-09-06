<template>
  <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img src="/images/logo.svg" alt="Canvas CLI Logo" class="w-10 h-10 rounded-lg shadow-lg" />
            <span class="font-bold text-xl text-gray-900">Canvas CLI</span>
          </NuxtLink>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="#features" class="text-gray-700 hover:text-gray-900 transition-colors">Features</NuxtLink>
          <NuxtLink to="#installation" class="text-gray-700 hover:text-gray-900 transition-colors">Installation</NuxtLink>
          <NuxtLink to="#support" class="text-gray-700 hover:text-gray-900 transition-colors">Support</NuxtLink>
          <a href="https://www.buymeacoffee.com/canvascli" target="_blank" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
            <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.908-.078 1.266-.173 2.732-.56 3.288-1.823.328-.745.33-1.603.29-2.4l-.032-.318c-.015-.153-.03-.305-.048-.458l-1.044-10.173-.058-.565a.24.24 0 01.199-.283c.037-.006.075-.01.112-.015a35.706 35.706 0 003.483-.306c.457-.066.926-.142 1.358-.288.487-.165.994-.451 1.206-.931.273-.619.126-1.327-.118-1.93z"/>
            </svg>
            Buy Coffee
          </a>
          <a href="https://github.com/canvas-cli/canvas-cli" target="_blank" class="text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-b border-gray-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink to="#features" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Features</NuxtLink>
        <NuxtLink to="#installation" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Installation</NuxtLink>
        <NuxtLink to="#support" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Support</NuxtLink>
        <a href="https://github.com/canvas-cli/canvas-cli" target="_blank" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">GitHub</a>
        <a href="https://www.buymeacoffee.com/canvascli" target="_blank" class="block px-3 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-md font-medium">Buy Me a Coffee</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
</script>
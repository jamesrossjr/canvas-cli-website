<template>
  <section id="features" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Everything You Need for AI-Powered Development
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Canvas CLI brings the power of advanced AI models to your local development environment, 
          giving you complete control and privacy.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">100% Private & Secure</h3>
          <p class="text-gray-600">
            Your code never leaves your machine. All processing happens locally, ensuring complete privacy and security for your proprietary code.
          </p>
        </div>
        
        <div class="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-purple-500 transition-all hover:shadow-lg">
          <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
          <p class="text-gray-600">
            Optimized for speed with local processing. No network latency, instant responses, and seamless integration with your development workflow.
          </p>
        </div>
        
        <div class="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-green-500 transition-all hover:shadow-lg">
          <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Full Code Understanding</h3>
          <p class="text-gray-600">
            Advanced context awareness across your entire codebase. Understands project structure, dependencies, and coding patterns.
          </p>
        </div>
        
        <div class="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-orange-500 transition-all hover:shadow-lg">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Terminal Native</h3>
          <p class="text-gray-600">
            Built for developers who love the command line. Seamless integration with your existing terminal workflow and tools.
          </p>
        </div>
        
        <div class="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-pink-500 transition-all hover:shadow-lg">
          <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Completely Free</h3>
          <p class="text-gray-600">
            No subscriptions, no API costs, no hidden fees. Canvas CLI is 100% free and open source forever.
          </p>
        </div>
        
        <div class="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-indigo-500 transition-all hover:shadow-lg">
          <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Model Flexibility</h3>
          <p class="text-gray-600">
            Support for multiple AI models including Llama, Mistral, and more. Choose the model that best fits your needs.
          </p>
        </div>
      </div>
      
      <div class="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
        <h3 class="text-3xl font-bold mb-4">Ready to Transform Your Development Workflow?</h3>
        <p class="text-xl mb-8 opacity-90">Join thousands of developers using Canvas CLI for AI-powered coding</p>
        <a href="#installation" class="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
          Start Using Canvas CLI
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
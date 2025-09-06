<template>
  <section id="installation" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Get Started in Minutes
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Canvas CLI is designed to be simple to install and use. Choose your preferred installation method below.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-2xl p-8 border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-.476 4.435c.39-.394.902-.591 1.414-.591.512 0 1.024.197 1.414.591l5.155 5.155c.78.78.78 2.048 0 2.828l-5.155 5.155c-.78.78-2.048.78-2.828 0l-5.155-5.155c-.78-.78-.78-2.048 0-2.828l5.155-5.155z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">Install with npm</h3>
          </div>
          <div class="space-y-4">
            <p class="text-gray-600">The quickest way to get started with Canvas CLI</p>
            <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <span class="text-green-400">$</span> npm install -g canvas-cli
            </div>
            <p class="text-sm text-gray-500">Requires Node.js 18 or higher</p>
          </div>
        </div>
        
        <div class="bg-white rounded-2xl p-8 border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.71 8.29a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.42-1.42L11.41 14l4.3-4.29a1 1 0 0 0 0-1.42z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">Install with Homebrew</h3>
          </div>
          <div class="space-y-4">
            <p class="text-gray-600">For macOS and Linux users</p>
            <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <span class="text-green-400">$</span> brew install canvas-cli
            </div>
            <p class="text-sm text-gray-500">Requires Homebrew package manager</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl p-8 border border-gray-200 mb-12">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Quick Start Guide</h3>
        <div class="space-y-6">
          <div class="flex">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900 mb-2">Install Canvas CLI</h4>
              <div class="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                <span class="text-green-400">$</span> npm install -g canvas-cli
              </div>
            </div>
          </div>
          
          <div class="flex">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900 mb-2">Initialize in your project</h4>
              <div class="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                <span class="text-green-400">$</span> canvas init
              </div>
            </div>
          </div>
          
          <div class="flex">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900 mb-2">Start coding with AI assistance</h4>
              <div class="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                <span class="text-green-400">$</span> canvas "Help me refactor this function to be more efficient"
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <h4 class="font-semibold text-gray-900 mb-2">System Requirements</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Node.js 18+ or Python 3.8+
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              8GB RAM minimum
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              10GB disk space
            </li>
          </ul>
        </div>
        
        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <h4 class="font-semibold text-gray-900 mb-2">Supported Platforms</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              macOS 11+
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Linux (Ubuntu, Debian, Fedora)
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Windows 10+ with WSL2
            </li>
          </ul>
        </div>
        
        <div class="bg-white rounded-xl p-6 border border-gray-200">
          <h4 class="font-semibold text-gray-900 mb-2">Supported Models</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Llama 3.1 (8B, 70B)
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Mistral (7B, Mixtral)
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              CodeLlama & more
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
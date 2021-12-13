<script lang="ts" setup>
import menuService from '../services/menuService'

menuService.addMenuItem({ to: '/', name: 'Home', position: 1 })
</script>

<template>
  Hello from Home
  <pre>{{ menuService.items }}</pre>

  <router-link :to="{ name: 'dashboard' }">dashboard</router-link>
</template>

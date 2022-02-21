<script lang="ts" setup>
import { getNavigation } from '../modules'
const { navigation } = getNavigation()
</script>

<template>
  Hello from Home
  <div>Navigation:</div>
  <div>
    <router-link
      v-for="item in navigation"
      :key="item.id"
      class="text-green-500 inline-block mr-4 border-2 border-green-500 px-5 py-2 hover:bg-green-500 hover:text-white"
      :to="item.to"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>

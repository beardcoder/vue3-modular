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
      class="underline text-teal-500"
      :to="item.to"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>

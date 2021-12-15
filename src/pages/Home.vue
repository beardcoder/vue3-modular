<script lang="ts" setup>
import { getNavigation, addNavigation } from '../factory/navigation.factory'

addNavigation([
  {
    to: '/dashboard',
    id: 'dashboard',
    label: 'Dashboard',
    position: 3,
  },
])
const navigation = getNavigation()
</script>

<template>
  Hello from Home
  <pre>{{ navigation }}</pre>

  <router-link v-for="[key, element] in navigation" :key="key" :to="element.to">
    {{ element.label }}
  </router-link>
</template>

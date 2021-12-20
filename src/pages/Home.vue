<script lang="ts" setup>
import { inject } from 'vue'
import { Navigation } from '../factory/navigation.factory'

const navigation = inject<Navigation>('navigation')
</script>

<template>
  Hello from Home
  <pre>{{ navigation }}</pre>
  <div v-if="navigation">
    <router-link v-for="item in navigation.items" :key="item.id" :to="item.to">
      {{ item.label }}
    </router-link>
  </div>
</template>

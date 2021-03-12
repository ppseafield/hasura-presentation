<template>
  <div class="hasura-test">
    <h1>hasura test</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([])
</script>

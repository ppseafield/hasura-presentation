<template>
  <div class="hasura-test">
    <h1>hasura test</h1>
    <template v-if="fetching">
      Fetching...
    </template>
    <template v-else-if="data">
      <ul>
        <li
          v-for="post in data.posts"
          :key="post.id"
        >
          {{ post.title }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuery } from '@urql/vue'

const { data, fetching, error } = useQuery({
  query: `
  query MyQuery {
    posts(order_by: {created_at: desc}) {
      id
      title
      created_at
      body
      updated_at
    }
  }
  `
})
</script>

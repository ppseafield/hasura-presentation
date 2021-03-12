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
          <h3>{{ post.title }}</h3>

          <ul>
            <li
              v-for="comment in post.comments"
              :key="comment.id"
            >
              {{ comment.comment_body }}
            </li>
          </ul>
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
      comments {
        id
        comment_body
      }
    }
  }
  `
})
</script>

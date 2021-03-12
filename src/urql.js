import { createClient } from '@urql/vue'

const client = createClient({
  url: 'http://localhost:8080/v1/graphql',
  fetchOptions: () => {
    return {
      headers: {
        'x-hasura-role': 'anonymous'
      }
    }
  }
})

export default client

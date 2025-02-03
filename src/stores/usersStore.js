import { usersRef } from '@/utils/firebase.config'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useCollection } from 'vuefire'

export const useUsersStore = defineStore('users', () => {
  const users = useCollection(usersRef)

  const getUser = computed(() => (userId) => users.value.find((user) => user.id === userId))

  return {
    users,
    getUser,
  }
})

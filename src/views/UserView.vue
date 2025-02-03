<template>
  <h2>Item</h2>
  <ul>
    <li>Prénom : {{ selectedUser.firstname }}</li>
    <li>Nom : {{ selectedUser.lastname }}</li>
    <li>Adresse mail : {{ selectedUser.email }}</li>
  </ul>
</template>

<script setup>
import { useUsersStore } from '@/stores/usersStore'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()
const usersStore = useUsersStore()
const selectedUser = usersStore.getUser(route.params.userId)
</script>

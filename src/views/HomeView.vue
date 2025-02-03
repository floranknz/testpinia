<template>
  <h2>Liste</h2>
  <div class="cardList">
    <div class="card" v-for="user in usersStore.users" :key="user.id">
      {{ user.firstname }}
      <router-link :to="{ name: 'user', params: { userId: user.id } }">Ouvrir</router-link>
    </div>
  </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/usersStore'
import { RouterLink } from 'vue-router'
import { isProxy } from 'vue'

const usersStore = useUsersStore()
</script>

<style>
.card {
  padding: 24px;
  border: 1px solid blue;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.cardList {
  display: flex;
  gap: 24px;
}
</style>

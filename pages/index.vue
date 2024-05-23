<template>
  <div class="profile-container">
    <div class="profile-info">
      <img v-if="user.image" :src="imageUrl" alt="Profile Image" class="profile-image" />
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
    <button @click="signOut()" class="logout-button">Logout</button>
  </div>
</template>
<script setup lang="ts">
const { status, data, signIn, signOut, lastRefreshedAt, getCsrfToken, getProviders, getSession } = useAuth()

const user = ref()
const sessionData = await getSession()

user.value = sessionData.user
const imageUrl = user.value.image

</script>
<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: center;
}

.profile-info {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.logout-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.logout-button:hover {
  background-color: #0056b3;
}
</style>
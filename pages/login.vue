<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent>
      <h2>Login</h2>
      <div class="input-container">
        <input type="text" placeholder="Email" v-model="email" />
      </div>
      <div class="input-container">
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div class="input-container">
        <button @click="signIn('credentials', { email, password })">
          Submit
        </button>
      </div>
      <div class="social-login-container">
        <p>Or login with:</p>
        <button class="github" @click="signIn('github', { callbackUrl: '/' })">
          GitHub
        </button>
        <button class="google" @click="signIn('google', { callbackUrl: '/' })">
          Google
        </button>
        <button class="azure" @click="signIn('azure-ad', { callbackUrl: '/' })">
          Microsoft
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const { signIn } = useAuth();
const email = ref("");
const password = ref("");

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    // navigateAuthenticatedTo: '/protected',
  },
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 350px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.input-container {
  margin-bottom: 20px;
}

button {
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  cursor: pointer;
}

button.github {
  background-color: #5b6a7a;
  color: #fff;
}

button.google {
  background-color: #0f9d58;
  color: #fff;
}

button.azure {
  background-color: #0078d4;
  color: #fff;
}

button:hover {
  opacity: 0.9;
}

.social-login-container {
  margin-top: 20px;
}

.social-login-container p {
  text-align: center;
  margin-bottom: 10px;
}
input[type="text"],
input[type="password"] {
  display: block;
  width: 92%;
  padding: 12px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

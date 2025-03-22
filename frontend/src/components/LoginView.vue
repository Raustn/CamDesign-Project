<template>
  <div class="login-container">
    <h2>🔑 로그인</h2>
    <input v-model="username" placeholder="사용자명" type="text" />
    <input v-model="password" placeholder="비밀번호" type="password" />
    <button @click="login">로그인</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const login = () => {
  if (username.value && password.value) {
    errorMessage.value = '';
    // 로그인 처리 로직 추가
    alert('로그인 성공!');
  } else {
    errorMessage.value = '사용자명과 비밀번호를 입력하세요.';
  }
};
</script>

<style scoped>
.login-container {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>

<template>
  <div class="alert-container">
    <h2>🔔 알림 관리</h2>
    <ul>
      <li v-for="(alert, index) in alerts" :key="index">
        {{ alert.message }}
      </li>
    </ul>
    <button @click="addAlert">새 알림 추가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 초기 데이터로 몇 개의 알림을 추가
const alerts = ref([
  { message: '첫 번째 알림입니다.' },
  { message: '두 번째 알림입니다.' },
  { message: '세 번째 알림입니다.' },
]);

const addAlert = () => {
  alerts.value.push({
    message: `새 알림 - ${new Date().toLocaleTimeString()}`,
  });
};
</script>

<style scoped>
.alert-container {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>

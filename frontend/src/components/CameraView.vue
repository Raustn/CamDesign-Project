<template>
  <div class="camera-container">
    <h2>📷 카메라 스트리밍 화면</h2>

    <div class="input-area">
      <label for="url">ESP32-CAM 주소:</label>
      <input
        v-model="streamUrl"
        id="url"
        type="text"
        placeholder="예: http://192.168.0.100/"
      />
    </div>

    <div class="video-area" v-if="streamUrl">
      <img :src="streamUrl" alt="ESP32-CAM 스트리밍" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const streamUrl = ref('');
</script>

<style scoped>
.camera-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.input-area {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.video-area img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>

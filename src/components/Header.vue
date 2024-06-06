<script setup>
import { ref } from 'vue'
const input3 = ref('')
</script>

<template>
     <div class="menu">
        <img id="user_pic" src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
        <input type="text" name="search" placeholder="请输入" v-model="input3">
        <select name="filter">
            <option value="course">学科</option>
        </select>
    </div>
</template>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: azure;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.menu img {
  border-radius: 50%;
  width: 15vw;
  height: 15vw;
}

.menu input {
  width: 60vw;
  height: 10vw;
  font-size: 4vw;
}

.menu select {
  width: 20vw;
  height: 10vw;
  font-size: 4vw;
}
</style>
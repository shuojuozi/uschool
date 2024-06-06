<script setup>
import Foot from '@/components/Foot.vue'
</script>

<template>
    <header>
        <div class="search-container">
            <div class="search-icon"></div>
            <input type="text" class="search-input" placeholder="Search...">
            <button class="search-button">搜索</button>
        </div>
    </header>

    <div class="section-title">
        <h2 class="centered-text">理科</h2>
    </div>

    <div class="video">
        <img src="https://tse1.mm.bing.net/th?&id=OVP.96rkatjkw69Sy5VaiihM7wIIFF&w=330&h=186&c=7&pid=1.7&rs=1"
            alt="Course Image">
        <div class="video-details">
            <h3>课程名称1</h3>
            <p class="video-description">课程概述文本框1</p>
        </div>
    </div>

    <div class="video">
        <img src="https://tse1.mm.bing.net/th?&id=OVP.96rkatjkw69Sy5VaiihM7wIIFF&w=330&h=186&c=7&pid=1.7&rs=1" alt="Course Image">
        <div class="video-details">
            <h3>课程名称2</h3>
            <p class="video-description">课程概述文本框2</p>
        </div>
    </div>

    <div class="video">
        <img src="https://tse1.mm.bing.net/th?&id=OVP.96rkatjkw69Sy5VaiihM7wIIFF&w=330&h=186&c=7&pid=1.7&rs=1" alt="Course Image">
        <div class="video-details">
            <h3>课程名称3</h3>
            <p class="video-description">课程概述文本框3</p>
        </div>
    </div>
    <Foot />
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    position: relative;
}

header {
    background-color: #00a1d6;
    color: white;
    padding: 10px;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.search-container {
    display: flex;
    align-items: center;
    padding: 10px;
}

.search-icon {
    width: 20px;
    height: 20px;
    background-image: url('https://demosc.chinaz.net/Files/pic/icons/5897/s19.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 5px;
}

.search-input {
    flex: 1;
    padding: 5px;
}

.search-button {
    padding: 5px 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
}

.video {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 80px;
}

.video img {
    width: 150px;
    height: auto;
    margin-right: 20px;
}

.video-description {
    color: #666;
}

.video-details {
    flex: 1;
    display: flex;
    align-items: center;
}

.section-title {
    text-align: center;
    background-color: #f9f9f9;
    padding: 10px 0;
    margin-bottom: 10px;
    position: relative;
    z-index: 900;
    top: 50px;
}
</style>
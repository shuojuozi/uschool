<script setup>
import Foot from '@/components/Foot.vue'
</script>

<template>
    <header>
        <div class="search-container">
            <div class="search-icon"></div>
            <input type="text" class="search-input" placeholder="搜索...">
            <button class="search-button">搜索</button>
        </div>
    </header>

    <div class="resource-container">
        <div class="resource-item">
            <h3><a href="course-detail.html">课程名称1</a></h3>
            <img src="https://tse1.mm.bing.net/th?&id=OVP.96rkatjkw69Sy5VaiihM7wIIFF&w=330&h=186&c=7&pid=1.7&rs=1" alt="Course Image">
            <p>热点评论1</p>
        </div>
        <div class="resource-item">
            <h3><a href="course-detail.html">课程名称2</a></h3>
            <img src="https://tse1.mm.bing.net/th?&id=OVP.96rkatjkw69Sy5VaiihM7wIIFF&w=330&h=186&c=7&pid=1.7&rs=1" alt="Course Image">
            <p>热点评论2</p>
        </div>
        <div class="resource-item">
            <h3><a href="course-detail.html">课程名称3</a></h3>
            <img src="https://tse1.mm.bing.net/th?&id=OVP.96rkatjkw69Sy5VaiihM7wIIFF&w=330&h=186&c=7&pid=1.7&rs=1" alt="Course Image">
            <p>热点评论3</p>
        </div>
    </div>
    <div class="comment-container">
        <input type="text" class="comment-input" placeholder="发表评论...">
        <div class="comment-icons">
            <img src="https://img1.baidu.com/it/u=514365801,1998319941&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
                alt="Icon 1">
            <img src="https://bpic.588ku.com/element_origin_min_pic/18/06/10/4e1a6024117ca81163b501982d92f9ca.jpg"
                alt="Icon 2">
            <img src="https://bpic.51yuansu.com/pic3/cover/03/84/54/5c0f1a4097622_610.jpg" alt="Icon 3">
        </div>
    </div>

    <Foot />
</template>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
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
    background-image: url('your-image-url.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 5px;
}

.search-input {
    flex: 1;
    padding: 5px;
    margin-right: 5px;
}

.search-button {
    padding: 5px 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
}


.resource-container {
    margin-top: 60px;
    padding: 10px;
    padding-bottom: 120px;
}

.resource-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.resource-item h3 {
    margin: 0;
}

.resource-item img {
    width: 100%;
    height: auto;
    margin-top: 10px;
}

.resource-item p {
    margin: 5px 0 0;
}

.comment-container {
    background-color: #f1f1f1;
    padding: 10px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 100px;
    z-index: 999;
}

.comment-input {
    flex: 2;
    padding: 5px;
    margin-right: 10px;
}

.comment-icons {
    flex: 1;
    display: flex;
    justify-content: space-around;
}

.comment-icons img:first-child {
    width: 40px;
    height: 40px;
}

.comment-icons img:nth-child(2),
.comment-icons img:nth-child(3) {
    width: 20px;
    height: 20px;
    margin-top: 13px;
}
</style>
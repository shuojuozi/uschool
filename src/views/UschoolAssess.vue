<script setup>
import Foot from '@/components/Foot.vue'
import router from '@/router';
import { gotoAssess2 } from '@/utils/nav.js';

import { gotoAnalyse} from '@/utils/nav.js';
import { gotoQuiz} from '@/utils/nav.js';
function assess2(){
    gotoAssess2(router);
}
function analyse(){
    gotoAnalyse(router);
}
function quiz(){
    gotoQuiz(router);
}
</script>
<template>
    <div class="tittle">
        
        <p class="headline">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            评测区
        </p>
    </div>
    <div class="searchcontainer">
        <input type="text" placeholder="Type here to search" class="search">
        <button class="btnsearch">search</button>
    </div>
    <p>为您推荐的资源:</p>
    <div class="skip">
        <button id="resource1" @click="assess2">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png" class="photo">
        </button>
    </div>
    <hr>
    <div class="skip">
        <button id="resource2" @click="assess2">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png" class="photo">
        </button>
    </div>
    <hr>
    <div class="skip">
        <button id="resource3" @click="assess2">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png" class="photo">
        </button>
    </div>
    <hr>
<Foot/>
</template>
<style scoped>
/* 左箭头 */
.text {
    display: inline-block;
    border-top: 2px solid;
    border-right: 2px solid;
    width: 10px;
    height: 10px;
    border-color: #2f00ea;
    transform: rotate(-135deg);
    margin: 15px auto auto 25px;
}

/* 标题背景 */
.tittle {
    background-color: aqua;
    width: 100%;
    max-width: 430px;
    margin: 0px;
    height: 80px;
}

/* 标题 */
.headline {
    display: inline-block;
    text-align: center;
    font-size: larger;
}

/* 外部盒子,控制搜索框在页面中的位置 */
.searchcontainer {
    display: flex;
    justify-content: center;    /* 水平方向居中 */
}

/* 搜索框样式 */
.search {
    width: 80%;
    max-width: 400px;
    height: 45px;
    border-radius: 30px 0px 0px 30px;
    padding-left: 50px;
    background-position: 10px 10px;       /* 设置背景图片的位置 */
    color: darkgray;
    font-size: 18px;
    border: none;                   /* 去除边框 */
}

/* 搜索框获得焦点时样式 */
.search:focus {
    outline: coral solid 1px;    /* 添加外边框 */
}

/* 搜索按钮样式 */
.btnsearch {
    width: 90px;
    height: 47px;
    border: none;
    background-color: coral;
    color: #fff;
    border-radius: 0px 20px 20px 0px;
    font-size: 20px;
    cursor: pointer;
}

/* 按钮悬浮时样式 */
.btnsearch:hover {
    background-color: #ff5900;
}

.photo {
    width: 100%;
    max-width: 210px;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;
}

.skip button {
    background-color: #fff;
    border: none;
    display: flex;
    cursor: pointer;
}
</style>
<script setup>
import {useRouter} from 'vue-router'
import {gotoMe} from '@/utils/nav.js'
import { gotoMain } from '@/utils/nav.js';

const router = useRouter();

function me() {
    gotoMe(router);
}

function main() {
    gotoMain(router);
}

</script>

<template>
    <div class="menu">
        <img id="user_pic" src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
        <input type="text" name="search" placeholder="请输入">
        <select name="filter">
            <option value="course">学科</option>
        </select>
    </div>
    <div class="contents">
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
        <div class="post">
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
            <div class="content">
                <h1>这里是标题</h1>
                <p>这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容</p>
            </div>
        </div>
    </div>
    <div class="nav">
        <button id="main" @click="main">
            <img src="https://bpic.588ku.com/element_origin_min_pic/01/39/45/50573cbf9298051.jpg"> 主页
        </button>
        <button id="resources">
            <img src="https://bpic.51yuansu.com/pic3/cover/01/93/21/5982fd2b7b230_610.jpg"> 资源区
        </button>
        <button id="forum">
            <img src="https://img1.baidu.com/it/u=1802270573,2949166487&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"> 论坛区
        </button>
        <button id="assess">
            <img src="https://bpic.51yuansu.com/pic2/cover/00/39/25/5812dcb92cb49_610.jpg"> 评估区
        </button>
        <button id="me" @click="me">
            <img src="https://img.tukuppt.com/png_preview/00/42/54/wBSygyMDwc.jpg%21/fw/780"> 个人中心
        </button>
    </div>
</template>

<style scoped>
ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

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

.contents {
  margin-top: 20vw;
  margin-bottom: 20vw;
  padding: 10px;
}

.post {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5vw;
}

.post img {
  width: 40vw;
  height: 30vw;
  margin-right: 5vw;
}

.post .content {
  display: flex;
  flex-direction: column;
}

.post .content h1 {
  margin-bottom: 2vw;
  font-size: 5vw;
}

.post .content p {
  font-size: 4vw;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: azure;
  padding: 10px 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  height: 20vw;
}

.nav button {
  flex: 1;
  font-size: 4vw;
  background-color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2vw;
}

.nav button img {
  margin-bottom: 1vw;
  width: 10vw;
  height: 10vw;
}
</style>
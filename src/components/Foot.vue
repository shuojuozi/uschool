<script setup>
import {useRouter} from 'vue-router'
import {gotoMe} from '@/utils/nav.js'
import { gotoMain } from '@/utils/nav.js';
import { gotoResources } from '@/utils/nav.js';
import { gotoForum } from '@/utils/nav.js';
import { gotoAssess} from '@/utils/nav.js';


const router = useRouter();

function me() {
    gotoMe(router);
}

function main() {
    gotoMain(router);
}

function resources() {
    gotoResources(router);
}

function forum() {
    gotoForum(router);
}
function assess(){
    gotoAssess(router);
}

</script>

<template>
    <div class="nav">
        <button id="main" @click="main">
            <img src="https://bpic.588ku.com/element_origin_min_pic/01/39/45/50573cbf9298051.jpg"> 主页
        </button>
        <button id="resources" @click="resources">
            <img src="https://bpic.51yuansu.com/pic3/cover/01/93/21/5982fd2b7b230_610.jpg"> 资源区
        </button>
        <button id="forum" @click="forum">
            <img src="https://img1.baidu.com/it/u=1802270573,2949166487&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"> 论坛区
        </button>
        <button id="assess" @click="assess">
            <img src="https://bpic.51yuansu.com/pic2/cover/00/39/25/5812dcb92cb49_610.jpg"> 评估区
        </button>
        <button id="me" @click="me">
            <img src="https://img.tukuppt.com/png_preview/00/42/54/wBSygyMDwc.jpg%21/fw/780"> 个人中心
        </button>
    </div>
</template>

<style scoped>
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
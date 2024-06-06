<script setup>
import Foot from '@/components/Foot.vue'
</script>

<template>
    <div class="user">
        <button id="setting">
            <img src="https://bpic.588ku.com/element_origin_min_pic/01/49/40/4057446639ac526.jpg">
        </button>
        <img id="user_pic" src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png">
        <div class="text">
            <p>用户名</p>
            <p>大二</p>
        </div>
    </div>
    <div class="functions">
        <button id="collections">
            <img src="https://bpic.51yuansu.com/pic3/cover/03/84/54/5c0f1a4097622_610.jpg"> 收藏夹
        </button>
        <button id="wrongs">
            <img src="https://img0.baidu.com/it/u=959575447,1105429392&fm=253&fmt=auto&app=138&f=JPEG?w=247&h=247"> 错题集
        </button>
        <button id="history">
            <img src="https://img2.baidu.com/it/u=2420310186,2241638733&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501">
            历史记录
        </button>
        <button id="contribute">
            <img src="https://img1.baidu.com/it/u=2422409953,816606513&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"> 我要投稿
        </button>
        <button id="likes">
            <img
                src="https://bpic.51yuansu.com/pic3/cover/00/81/83/58c8556189bdb_610.jpg?x-oss-process=image/sharpen,100">
            收到的赞
        </button>
        <button id="comments">
            <img src="https://images.669pic.com/element_pic/91/53/99/29/2e57ffd448a2cf7dffbc63fddda21426.jpg_w700wb">
            回复我的
        </button>
    </div>
    <Foot />
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

.user {
  position: relative;
  top: 0;
  width: 100%;
  height: 20vh;
  background-color: azure;
  font-size: 5vw;
  padding: 5vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.user img {
  margin-right: 5vw;
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
}

.user .text {
  display: flex;
  flex-direction: column;
}

.user .text p {
  margin: 0;
}

.user button {
  background-color: white;
  border: none;
  position: absolute;
  top: 2vw;
  right: 2vw;
}

.user button img {
  margin-bottom: 1vw;
  width: 10vw;
  height: 10vw;
}

.functions {
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2vw 0;
  padding: 0 2vw;
}

.functions button {
  flex: 1 1 30%;
  margin: 1vw;
  font-size: 4vw;
  background-color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.functions button img {
  margin-bottom: 1vw;
  width: 10vw;
  height: 10vw;
}
</style>
<script setup>
import HeaderVue from '@/components/Header.vue'
import Foot from '@/components/Foot.vue'
</script>

<template>
   <HeaderVue />
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


</style>
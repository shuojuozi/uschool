<script setup>
import Foot from '@/components/Foot.vue'
</script>
<template>
    <div class="tittle">
        
        <p class="headline">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            评估与分析
        </p>
        <p>
            根据您本次的答题情况,我们为您分析了您的薄弱点
            <br>
            并给出了以下建议:
        </p>
        <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png" class="photo">
    </div>
    <div class="bottom">
        <p>1.加强对空间思维的培养:</p>
        <p>2.提升对公理体系的理解</p>
        <br>
        您可以通过以下方式解决
        <p>
            空间几何练习题:<input type="button" value="https://jihe.com">
        </p>
        <p>
            公理基本属性:<input type="button" value="https://gongli.com">
        </p>
    </div>
    <Foot/>
</template>


<style scoped>
        /* 左箭头 */
        .text{
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
           .photo {
            width: 90%;
           }
           .bottom {
            margin-top: 400px;
           }
           
</style>
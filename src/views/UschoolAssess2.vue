<script setup>
    import Foot from '@/components/Foot.vue'
    import { gotoAnalyse} from '@/utils/nav.js';
    import { gotoQuiz} from '@/utils/nav.js';
    import router from '@/router';

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
    <div>
        <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png" class="photo ">
        <p>课程介绍:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......</p>
    </div>
    <ul class="space-list">
        <li>
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png" class="photo1">&nbsp;&nbsp;&nbsp;基础知识<p class="text1"></p>
            <li class="clerked">
                ...
            </li>
            <li class="clerked">
                ...
            </li>
            <li class="clerked">
                ...
            </li>
        </li>
        <li>
            <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png" class="photo1">&nbsp;&nbsp;&nbsp;练习题库
            <p class="text2"></p>
            <li class="clerked" @click="quiz">
                ...
            </li>
            <li class="clerked" @click="quiz">
                ...
            </li>
            <li class="clerked" @click="quiz">
                ...
            </li>
        </li>
    </ul>
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
           /* 外部盒子,控制搜索框在页面中的位置 */
       .searchcontainer{
            display : flex;
            justify-content: center;    /*水平方向居中*/         
        }
        /* 搜索框样式 */
        .search{
            width: 400px;
            height: 45px;
            background-image: url(搜索.png);    /*搜索框背景图片*/
            background-repeat: no-repeat;        /*设置背景图片不平铺*/
            border-radius: 30px 0px 0px 30px;  
            padding-left: 50px;
            background-position: 10px 10px;       /*设置背景图片的位置*/
            color:darkgray;
            font-size: 18px; 
            border: none;                   /*去除边框*/ 
        }
        /* 搜索框获得焦点时样式 */
        .search:focus{
            outline: coral solid 1px;    /*添加外边框*/
        }
        /* 搜索按钮样式 */
        .btnsearch{
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
        .btnsearch:hover{
            background-color: #ff5900;
        }
        .photo {
            width: 210px;
            height: 140px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        /* 列表 */
        ul {
            list-style: none;
           }
           .photo1 {
            width: 20px;
            height: 20px;
            margin-left: -40px;
           }
           /* 上箭头 */
           .text1 {
            display: inline-block;
            border-top: 2px solid;
            border-right: 2px solid;
            width: 10px;
            height: 10px;
            border-color: black;
            transform: rotate(-45deg);
            margin: auto auto auto 320px;
            }
            .text2 {
            display: inline-block;
            border-top: 2px solid;
            border-right: 2px solid;
            width: 10px;
            height: 10px;
            border-color: #2f00ea;
            transform: rotate(-45deg);
            margin: auto auto auto 320px;
            }
             /* 选中区域 */
             .clerked {
                background-color:rgba(204, 203, 203, 0.11);
                margin-left: -40px;
                text-indent: 50px;
                height: 40px;
            }
            
    </style>
<script setup>
import Foot from '@/components/Foot.vue'
import { gotoAnalyse } from '@/utils/nav.js';
import router from '@/router';

function analyse() {
    gotoAnalyse(router);
}
</script>
<template>
    <div class="tittle">

        <p class="headline">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            习题检测
        </p>
    </div>
    <!-- 答题卡 -->
    <table> <!--table为最大的表格标签-->

        <tr>
            <td>&radic; </td>
            <td>&radic; </td>
            <td>&radic; </td>
            <td>&radic; </td>
        </tr>
        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
        <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
    </table>
    <div>
        <img src="https://fileucloud.bupt.edu.cn/ucloud/picture/848d66c3d04683671f4dd8b070b0f5bf.png" class="clock">
        <p class="time">00:&nbsp;&nbsp;59:&nbsp;&nbsp;30</p>
    </div>
    <p>
        5.......(3分)
    </p>
    <ul class="spacing-list">
        <li><input type="radio" name="test" checked="checked">A.&nbsp;......</li>
        <li><input type="radio" name="test">B.&nbsp;......</li>
        <li><input type="radio" name="test">C.&nbsp;......</li>
        <li><input type="radio" name="test">D.&nbsp;......</li>
    </ul>
    <div>
        <input type="button" value="上一题" class="button1">
        <input type="button" value="提交" class="button1" @click="analyse">
        <input type="button" value="下一题" class="button1">
    </div>
    <Foot />
</template>
<style scoped>
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

table,
td {
    border: 1px solid black;
    display: inline-block;
}

td {
    width: 30px;
    height: 20px;
    text-align: center;
}

.clock {
    width: 20px;
    height: 20px;
}

.time {
    display: inline-block;
}

/* 列表 */
ul {
    list-style: none;
}

.spacing-list li {
    margin-bottom: 20%;
}

.button1 {
    margin-left: 70px;
    background-color: white;
}
</style>
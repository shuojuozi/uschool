<script setup>
import Foot from '@/components/Foot.vue'
</script>
<template>
    <!-- 标题栏 -->
    <div class="tittle">

        <p class="headline">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            错题集
        </p>
    </div>
    <!-- 下拉菜单 -->
    <ul class="space-list">
        <li>
            <img src="https://img0.baidu.com/it/u=3919118243,3138079521&fm=253&fmt=auto&app=138&f=PNG?w=200&h=200"
                class="photo">&nbsp;&nbsp;&nbsp;数学
        </li>
        <li>
            <img src="https://img0.baidu.com/it/u=2316473400,3591398454&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300"
                class="photo">&nbsp;&nbsp;&nbsp;大学物理
        </li>
        <li>
            <img src="https://img95.699pic.com/xsj/14/6s/08.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast"
                class="photo">&nbsp;&nbsp;&nbsp;数据库
        </li>
    </ul>
    <Foot />

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

/* 列表 */
ul {
    list-style: none;
}

.photo {
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
    border-color: #2f00ea;
    transform: rotate(-45deg);
    margin: 15px auto auto 320px;
}

/* 选中区域 */
.clerked {
    background-color: rgba(204, 203, 203, 0.11);
    margin-left: -50px;

}

.hang {
    height: 30px;
}

.space-list li {
    padding-bottom: 20px;
}
</style>
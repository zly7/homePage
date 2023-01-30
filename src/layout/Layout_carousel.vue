<script setup>

import { RouterView, RouterLink } from 'vue-router'
import { computed, ref } from 'vue'
import Aside from './Aside.vue';
import Main from './Main.vue';
import img1 from "@/assets/img/back_ground_huiye.png"
import img2 from "@/assets/img/back_ground_qingzhu.png"
const carouselDatas = [{
    imgsrc: "@/assets/img/back_ground_huiye.png",
    text: '',
}, {
    imgsrc: "@/assets/img/back_ground_qingzhu.png",
    text: '',
}];


function changeBGFunction(cur_index, origin_index) {
    console.log("The change function has enter " + cur_index);
    console.log(this)
    background.backgroundImage = url(carouselDatas[1].imgsrc);
}
'url(' + require('../assets/image/BJ1.jpg') + ')'
const currentStyle = "{'background-image': url(require(@/assets/img/back_ground_huiye.png')) }"
//走马灯切换背景这个事情先搁置一下
</script>

<template>
    <div class="common-layout">
        <!-- <el-button size="small" @click="search1CallBack">Small</el-button> 说明对回调函数理解正确-->
        <!-- 下面这个change绑定错位置完全没有提示，这就是前端不太好的地方 -->
        <el-carousel :interval="5000" arrow="always" height="960px" @change="changeBGFunction">

            <el-carousel-item v-for="item in 2" :key="item" :style="currentStyle" >
                <el-container>
                    <el-space>
                        <el-aside width="200px">
                            <Aside></Aside>
                        </el-aside>
                    </el-space>
                    <el-container>
                        <h3 text="2xl" justify="center">{{ item }}</h3>
                        <el-header>Header</el-header>
                        <el-main>
                            <Main></Main>
                        </el-main>
                        <el-footer>Footer</el-footer>
                    </el-container>
                </el-container>
            </el-carousel-item>
        </el-carousel>
    </div>

</template>


<style scoped>
/* .background {
    background-image: url('@/assets/img/back_ground_huiye.png');
    /* height:1000px; */
/* } */

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    /* line-height: 300px; */
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>


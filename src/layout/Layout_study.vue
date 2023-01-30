<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { computed, ref } from 'vue'
import Aside from './Aside.vue';
import axios from "axios";
import MainSimple from './MainSimple.vue';
// import img1 from "@/assets/img/back_ground_huiye.png"
// import img2 from "@/assets/img/back_ground_qingzhu.png"
import {froneEndIPReal} from '@/utils/requests.js';
const biyingImageUrl = ref('');
axios({
    url: "http://"+froneEndIPReal+":7999/proxy_origin_bing/HPImageArchive.aspx?format=js&idx=0&n=8",
    method: 'get',
}).then(function (response) {
    // 处理成功情况
    const imgUrl = response.data.images[0].url;
    biyingImageUrl.value = "https://www.bing.com" + imgUrl;
}).catch(function (error) {
    // 处理错误情况
    console.log(error);
});
// const currentStyle = "{'background-image': 'url("+biyingImageUrl.value+")' }"; 上面这个肯定也应该是响应API
const currentStyle = computed(() => {
    return {
        'background-image': 'url(' + biyingImageUrl.value + ')'
    }
})

</script>
<script> 
export default{
    data(){
        return{
            TheStyle:{
              backgroundColor:'yellow',
              width:'300px',
              height:'60px',
              transition:'all 0.7s'
            }
          }
    },
    methods:{
        changeColor(){
            this.$data.TheStyle.backgroundColor='black';
            this.$data.TheStyle.width='50px';
        },
    }
}
</script>

<template>
    <!-- <div class="container is-widescreen" :style="{'background-image': 'url(https://www.bing.com/th?id=OHR.BlackbirdDay_ZH-CN2291101162_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)' }"> -->
        <div class="container is-widescreen" :style="currentStyle"> 
        <el-button :style="TheStyle" @click="changeColor"></el-button> 
        <!-- 上面这个改变的方式就特别重要，但是应该是vue2的方法，vue3是用计算属性 -->
        <el-main>
            <MainSimple />
        </el-main>
    </div>


</template>


<style scoped>
.container{
    text-align: center;
}
</style>

<style lang="scss" scoped>
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
</style>


<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { computed, ref } from 'vue'
import Aside from './Aside.vue';
import axios from "axios";
import MainSimple from './MainSimple.vue';
import { froneEndIPReal } from '@/utils/requests.js';

const currentImageUrl = ref('');
const imgUrls = [];
let currentImageUrlIndex = 0;
axios({
    url: "http://" + froneEndIPReal + ":7899/proxy_origin_bing/HPImageArchive.aspx?format=js&idx=0&n=8",
    method: 'get',
}).then(function (response) {
    // 处理成功情况
    // const index = Math.round(Math.random() * 8 - 0.5);
    for (let i = 0; i < 8; i++) {
        imgUrls.push("https://www.bing.com"+response.data.images[i].url);
    }
    imgUrls.push("src/assets/img/back_ground_huiye.png")
    imgUrls.push("src/assets/img/back_ground_qingzhu.png")
    currentImageUrl.value = imgUrls[currentImageUrlIndex];
    this.timer = setInterval(() => { //这里要么不写this.timer，要么写成this.timer = setInterval(() => {
        currentImageUrlIndex = (currentImageUrlIndex + 1) % imgUrls.length;
        currentImageUrl.value = imgUrls[currentImageUrlIndex];
    }, 8000);
}).catch(function (error) {
    // 处理错误情况
    console.log(error);
});



const currentStyle = computed(() => {
    return {
        'background-image': 'url(' + currentImageUrl.value + ')'
    }
})

</script>

<template>
    <div class="mainLayout is-fullhd" :style="currentStyle">
        <section class="section">
            <MainSimple />
        </section>
    </div>
</template>


<style scoped>
.mainLayout {
    text-align: center;
    height: 960px;
    align-items: center;
    background-size: cover;
}
</style>

<style lang="scss" scoped>
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
@import "bulma/sass/layout/section.sass";
</style>


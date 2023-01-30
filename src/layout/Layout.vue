<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { computed, ref } from 'vue'
import Aside from './Aside.vue';
import axios from "axios";
import MainSimple from './MainSimple.vue';
// import img1 from "@/assets/img/back_ground_huiye.png"
// import img2 from "@/assets/img/back_ground_qingzhu.png"
import { froneEndIPReal } from '@/utils/requests.js';

const biyingImageUrl = ref('');
axios({
    url: "http://" + froneEndIPReal + ":7999/proxy_origin_bing/HPImageArchive.aspx?format=js&idx=0&n=8",
    method: 'get',
}).then(function (response) {
    // 处理成功情况
    const index = Math.round(Math.random() * 8 - 0.5);
    const imgUrl = response.data.images[index].url;
    biyingImageUrl.value = "https://www.bing.com" + imgUrl;
}).catch(function (error) {
    // 处理错误情况
    console.log(error);
});
const currentStyle = computed(() => {
    return {
        'background-image': 'url(' + biyingImageUrl.value + ')'
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
}
</style>

<style lang="scss" scoped>
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
@import "bulma/sass/layout/section.sass";
</style>


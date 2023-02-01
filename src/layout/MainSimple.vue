
<script setup>
import imgHead from "@/assets/img/head_portrait.png"
import axios from "axios";
import {
    ZhihuOutlined,
    BoldOutlined,
    FilePdfOutlined,
    GithubOutlined,
} from '@ant-design/icons-vue';
import { ref } from "vue";
import { froneEndIPReal } from '@/utils/requests.js';
const fontSize = 15;

const jumpBlog = () => {
    window.open('http://' + froneEndIPReal + ':7999', "_blank")
}
const jumpGithub = () => {
    window.open('https://github.com/zly7', "_blank")
}
const jumpZhihu = () => {
    window.open('https://www.zhihu.com/people/zhang-li-yu-5-70', '_blank')
}

const jumpResearchResume = () => {
    window.open('src/assets/resume/ResearchCVzly.pdf', '_blank')
}
const motto = ref('')
const mottoFrom = ref('')
axios.get('https://v1.hitokoto.cn').then(function (response) {
    motto.value = response.data.hitokoto;
    mottoFrom.value = response.data.from;
}).catch(function (error) {
    console.log(error);
})


</script>

<template >

    <section class="section" id="mainPage">
        <div>
            <el-avatar shape="circle" :size="100" :fit="'cover'" :src="imgHead" />
        </div>
        <div id="pageName">
            {{ "张力宇的主页" }}
        </div>
        <div>
            <article class="message">
                <div class="message-body">
                    <p id="mottoCSS">{{ motto }}</p>
                </div>
            </article>
        </div>



        <div>
            <a-divider style="height: 3px; background-color: rgba(252, 252, 252, 1)" />
        </div>
        <div class="columns">
            <div class="column">
                <el-button round @click="jumpBlog"><bold-outlined />Blog</el-button>
            </div>
            <div class="column">
                <el-button round @click="jumpGithub">
                    <github-outlined />Github</el-button>
            </div>
            <div class="column">
                <!-- <div class="iconfont icon-github"> 要用阿里巴巴这个组件库还不能像bulma那样直接引用-->
                <el-button round @click="jumpZhihu">
                    <zhihu-outlined />Zhihu</el-button>
            </div>
            <div class="column">
                <el-button round @click="jumpResearchResume">
                    <file-pdf-outlined />Research Resume</el-button>
            </div>
        </div>
    </section>


</template>

<style lang="scss">
// @import "@/assets/iconfont.css";
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
@import "bulma/sass/grid/columns.sass";
@import "bulma/sass/components/message.sass";
@import "bulma/sass/elements/title.sass";
$message-body-pre-code-background-color: transparent;
</style>

<style scoped>
.message {
    margin: 0 auto;
    background-color: rgba(252, 252, 252, 0.1);
    text-align: 'center';
}
#mainPage {
    margin-top: 100px;
}

#mainPage>div {
    margin: 0 auto;
    text-align: 'center';
    width: 40%;
}

#mottoCSS {
    color: ghostwhite;
    font-weight: bolder;
}

#pageName {
    color: ghostwhite;
    font-weight: bolder;
}
</style>


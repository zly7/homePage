
<script setup>
//这一份是存档，为了能在主文件删除一些注释
import imgHead from "@/assets/img/head_portrait.png"
import axios from "axios";
import {
    ZhihuOutlined,
    BoldOutlined,
    FilePdfOutlined,
    GithubOutlined,
} from '@ant-design/icons-vue'; //蚂蚁这个使用真的方便
import { ref } from "vue";
import { froneEndIPReal } from '@/utils/requests.js';
const fontSize = 15;

const jumpBlog = () => {
    //   window.location.href =
    //     "https://www.tencent.com"
    // //刷新当前页面
    // window.location.reload();
    // window.open('https://192.168.1.103:8090', "_blank")，用s是无效的，用lcoalhost是无效的，这个地址替换成腾讯云公网IP
    window.open('http://' + froneEndIPReal + ':8090', "_blank")
}
const jumpGithub = () => {
    window.open('https://github.com/zly7', "_blank")
}
const jumpZhihu = () => {
    window.open('https://www.zhihu.com/people/zhang-li-yu-5-70', '_blank')
}

const jumpResearchResume = () => {
    // window.open('http://192.168.1.103/src/assets/img/back_ground_huiye.png', '_blank') 不是很懂左边为啥不行,我只能理解成其实浏览器只是下载并且渲染了index.html
    window.open('src/assets/resume/ResearchCVzly.pdf', '_blank')
}
const motto = ref('')
const mottoFrom = ref('')
axios.get('https://v1.hitokoto.cn').then(function (response) {
    // 处理成功情况
    motto.value = response.data.hitokoto;
    mottoFrom.value = response.data.from;
}).catch(function (error) {
    // 处理错误情况
    console.log(error);
})
// $.get('https://v1.hitokoto.cn', function (res) { VUE无法使用这个$
//     console.log(res.hitokoto);
// 		// $('#description').html(res.hitokoto + "<br/> -「<strong>" + res.from + "</strong>」")
// 	});



</script>

<template>


    <div>
        <el-avatar shape="circle" :size="100" :fit="'cover'" :src="imgHead" />
    </div>
    <article class="message is-primary">
        <div class="message-body">
            {{motto}}
        </div>
    </article>


    <div>
        <el-divider />
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



</template>

<style lang="scss">
// @import "@/assets/iconfont.css";
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
@import "bulma/sass/grid/columns.sass";
@import "bulma/sass/components/message.sass";
</style>

<style>
.icon-github:before {
    content: "\e6e1"
}

.el-divider {
    width: '300px';
    text-align: 'center'
}
.message{
    width: 30%;
}
</style>


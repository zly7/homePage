<script setup>
import { FolderOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons-vue';
// import { defineProps } from 'vue'; //我晕，有时候不知道是不是nodejs问题要显式引用下。然后发现是上面setup打成steup
const props = defineProps({  //子组件调用父组件传过去的值
    title: String,
    link: String,
    author: {
        type: String,
        default: "未知",
    },
    category: {
        type: String,
        default: "vue3",
    },
    pubdate: {
        type: String,
        default: "默认的date"
    },
    desc: String,
})
</script>

<template>
    <a-typography class="box">
        <!-- <a-typography-title :level="3" to="www.baidu.com"> -->
        <a-typography-title :level="3" :to="{ path: '/' }">
            <h1>这是大标题:{{ props.title }}</h1>
        </a-typography-title>
        <a-space>

            <a-space>
                <user-outlined></user-outlined>
                <span>
                    <slot name="author">作者:{{ props.author }}</slot>
                </span>
            </a-space>


            <a-space>
                <folder-outlined></folder-outlined>
                <span>
                    <slot name="category">分类: {{ props.category }}</slot>
                </span>
            </a-space>


            <a-space>
                <clock-circle-outlined></clock-circle-outlined>
                <span>
                    <slot name="pubdate">发布时间: {{ props.pubdate }}</slot>
                </span>
            </a-space>
        </a-space>
        <a-typography-paragraph type="danger">
            <!-- In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might cause designers and developers difficulties and
            duplication and reduce the efficiency of development. -->
            下面是简要描述：
            {{ props.desc }}
        </a-typography-paragraph>
    </a-typography>

    <!-- <div class="box">

        <a-space>
            <span>作者：锤子</span>
            <span>分类：vue3</span>
            <span>发布日期：2023年</span>
        </a-space>
        <p>
            docker手动下载镜像理论上要自己先下载到本地，然后再打包成tar，然后放到服务器上load。比较麻烦。docker应该是希望所有用户都使用docker hub
        </p>
    </div> -->
</template>

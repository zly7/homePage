<script setup>
import { getCurrentInstance } from 'vue'
// import ArticleItem from '../components/ArticleItem.vue'; 局部引用方法
import { StepBackwardOutlined } from "@ant-design/icons-vue"
import {ref,reactive} from "vue";
const { proxy } = getCurrentInstance();
const info = () => {
  proxy.$message.info("message")
  console.log("from console")
};
const articleDatas = reactive([  //前端太容易打错了
  {
    'title' : "第一个title",
    'desc':"第一篇文章的简述",
    "author":"张一",
    "category":"vue3",
    "pubdate":"这个文章的时间"
  },
  {
    'title' : "第2个title",
    'desc':"第2篇文章的简述",
    "author":"张2",
    "category":"vue4",
    "pubdate":"这个文章的时间"
  },
  {
    'title' : "第3个title",
    'desc':"第3篇文章的简述",
    "author":"张3",
    "category":"vue5",
    "pubdate":"这个文章的时间"
  },
]);
console.log(import.meta.env)
</script>

<template>
  <!-- <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
  <a-button type="primary" @click="info">Display normal message</a-button>
  <step-backward-outlined /> -->
  <!-- <ArticleItem title="从父组件传值"/>    -->
  <!--  这个是全局组件的另外一个名字 -->
  <article-item v-for="(item, index) in articleDatas" :key="index" :title="item.title">
    <template #author> {{  item.author }}</template>
    <template #category> {{  item.category }}</template>
    <template #pubdate> {{  item.pubdate }}</template>
  </article-item>
</template>

import { message,notification } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib

import "ant-design-vue/es/notification/style/css.js";

import ArticleItem from './components/ArticleItem.vue';
import AsideBox from './components/AsideBox.vue';

export default{
    install(app){
        app.config.globalProperties.$message = message;
        app.config.globalProperties.$notification = notification;  //认为把这个对象挂载过去
        
        app.component('ArticleItem', ArticleItem);
        app.component('AsideBox', AsideBox);
    }
}
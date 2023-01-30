<script setup>
defineEmits(['update:searchValue', 'someSearch'])
const props = defineProps({
    name: {
        type: String,
        default: "搜索",
    },
    type:{
        type: String,
        default: "search",
        validator(value){
            return['search', 'news', 'tag', 'archive', 'box'].includes(value)
        }
    },
    newsData: {
        type: Array,
        default: [],
    },
    tagsData: {
        type: Array,
        default: [],
    },
    archiveData:{
        type:Array,
        default: [],
    }
})

const searchCallBack = (searchValue) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };
</script>


<template>
    <div class="box">
        <h1>
            {{ props.name }}
        </h1>
        <div v-if="props.type=='search'">
            <!-- <a-input-search v-model:value="value" @search="searchCallBack" placeholder="input search text" /> -->
            <!-- 子组件向父组件传值 -->
            <!-- <a-input-search v-model:value="value" @search="$emit('someSearch')" placeholder="input search text" -->
                <!-- 下面change和search是蚂蚁封装的事件，v-model:内部值="外部值",这个外部值就可以直接使用 -->
                <a-input-search v-model:value="searchValue" @change="$emit('update:searchValue', $event.target.value)" @search="$emit('someSearch')" placeholder="input search text" />
                {{ searchValue }}
            </div>
        <div v-if="props.type=='news' && props.newsData.length > 0">
            <ul>
                <li v-for="(item, index) in props.newsData" :key="index">
                    <a href=""> {{  item.title }}</a>
                </li>
            </ul>

        </div>
        <div v-if="props.type=='tag' && props.tagsData.length > 0">
            <a-tag  v-for="(item, index) in props.tagsData" color="item.color" :key="index">{{ item.name }}</a-tag>
        </div>

        <div class="archive" v-if="props.type=='archive' && props.archiveData.length > 0">
            <ul class="pl-2 pr-2">
                <li v-for="(item, index) in props.archiveData" :key="index">{{ item.date }}</li>
            </ul>

        </div>

    </div>
</template>


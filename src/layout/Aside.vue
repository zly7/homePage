<script setup>
import imgHead from "@/assets/img/head_portrait.png"
</script>

<template>
    
        <!-- <el-avatar shape="circle" :size="100" :fit="cover" :src="imgHead" /> 左边这句话是解析成cover-->
        <el-avatar shape="circle" :size="100" :fit="'cover'" :src="imgHead" />

</template>

<style scoped>
/* .center {
    cem
} */
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
</style>
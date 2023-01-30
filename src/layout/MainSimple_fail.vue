
<script setup>
import imgHead from "@/assets/img/head_portrait.png"
const fontSize = 15


</script>

<template>
    <el-row>
        <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark" />
        </el-col>
    </el-row>
    <div class="demo-type">
        <el-row>
            <div>
                <el-avatar shape="circle" :size="100" :fit="'cover'" :src="imgHead" />
            </div>
        </el-row>
        <el-row>
            <div :style="{ 'font-size': fontSize + 'px' }">
                张力宇的主页
            </div>
        </el-row>
    </div>
</template>

<style scoped>
.demo-type {
    display: flex;
    width: 1600px;

}

.demo-type>el-row {
    flex: 1;
    text-align: center;

}
</style>

<style lang="scss">
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}
</style>
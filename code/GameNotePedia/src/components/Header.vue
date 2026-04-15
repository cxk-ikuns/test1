<template>
    <div class="navbar">
        <!-- 折叠按钮 -->
        <div class="flex-box">
            <el-button @click="handleCollapse">
                <el-icon><Expand/></el-icon>
             </el-button>
            <p class="page-title">导航</p>
        </div>
        <!-- 搜索框 -->
        <div class="flex-box">
            <el-icon class="search-icon"><Search/></el-icon>
            <el-input placeholder="请输入搜索内容" class="search-input"></el-input>
        </div>
        <!-- 登录与用户信息 -->
        <div class="flex-box">
            <el-button >登录</el-button>
            <el-avatar :src="iconUrl"></el-avatar>
            <p>用户名</p>
           <el-icon><ArrowDown/></el-icon>
        </div>
    </div>
</template>
<script setup>
const iconUrl=new URL('/头像.jpg',import.meta.url).href
</script>
<style lang="scss">
.navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background: white;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    border-bottom: 1px solid #e5e7eb;

    .flex-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .search-input {
        --el-input-border-radius: 10px !important;
    }
    .search-icon {
     margin-right: 10px !important;
    }
    .page-title {
    margin-left: 20px;
    font-size: 26px;
    font-weight: bold;
    color: #1f2937;
}
}
</style>
<template>
    <div class="backend-layout">
    <el-container class="main-container">
        <!-- 菜单区域 -->
        <Side></Side>
      <el-container>
        <el-header>
         <!-- 导航栏区域 -->
          <Header></Header>
        </el-header>
        <!-- 主内容区域 -->
        <el-main class="main-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './Header.vue'
import Side from './Side.vue'
</script>
<style lang="scss">
// 让后台管理模式布局占满全屏
.backend-layout{
    height: 100vh;
    .el-header{
      height: 74px !important;
      
    }
    .main-container {
    height: 100%;
    .content-container {
       padding: 20px;
      background-color: #fff;
      // 内容区域高度为100%减去导航栏高度
      min-height: calc(100% - 74px);
    }
}
}
</style>

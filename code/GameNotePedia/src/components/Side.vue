<template>
     <el-menu
       class="menu-style"
     >
      <!-- logo -->
       <div class="brand">
                  <el-image :src="iconUrl" alt="logo" style="width: 50px;height: 50px; margin-right: 10px;"></el-image>
                  <div class="info-card"  >
                      <h1 class="brand-title">GameNotePedia</h1>
                       <p class="brand-subtitle">游笔记百科</p>
                  </div>
                  
        </div>
        <!-- 菜单列表 -->
        <el-menu-item v-for="item in router.options.routes[0].children" :key="item.path" :index="item.path" @click="handleClick(item.path)">
           <el-icon><component :is="item.meta.icon" /></el-icon>
            <span>{{item.meta.title}}</span>
        </el-menu-item>
     </el-menu>
</template>
<script setup>
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
console.log(router,'router数据')
const iconUrl=new URL('@/assets/logo图.png',import.meta.url).href
const handleClick=(path)=>{
    router.push(path)
}
</script>
<style lang="scss">
.menu-style {
    height: 100%;
    .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #e5e7eb;

    .info-card {
        .brand-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 5px;
            color: #1f2937;
        }
        .brand-subtitle {
            font-size: 14px;
            color: #34373d;
        }   
    }
}
}
   
</style>
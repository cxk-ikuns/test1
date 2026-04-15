<template>
    <div class="container">
        <div class="title">
            <div class="title-text">
            <h2>登录您的账户</h2>
            <p>请输入您的登录信息</p>
            </div>
        </div>
        <div class="form-container">
            <!-- :rules是element已经设置好的验证规则 -->
            <!--label-position表示名称放置的位置，默认是left -->
            <el-form
                ref="ruleFormRef"
                :model='formData'
                :rules='rules'
                label-position="top"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="formData.username" size="large" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <!-- show-password表示显示密码图标 -->
                    <!-- type="password"表示密码输入不可见 -->
                    <el-input v-model="formData.password" size="large" placeholder="请输入密码" type="password" show-password></el-input>
                </el-form-item>
                <el-button class="btn" type="primary" size="large" @click="submitForm(ruleFormRef)">登录</el-button>
             </el-form>
                <div class="footer">
                     <p>还没有账户？<router-link to="/user-message/register">去注册</router-link></p>
                </div>
        </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
import { login } from '@/api/admin'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const ruleFormRef = ref(null)
const formData = ref({
    username: '',
    password: ''
})
const rules = ref({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
})
// 登录
const submitForm = async (formEl) => {
   if(!formEl) return 
   await formEl.validate((valid,fields)=>{
      if(valid)
      {
         login(formData.value).then(data=>{
            ElMessage.success( '登录成功')
            router.push('/')
         })
       }
   })
   
}
</script>
<style lang="scss">
.container {
  width: 384px;

    .title {
        .back-home {
        margin-bottom: 60px;
        }

            .title-text {
            text-align: center;

            h2 {
                font-size: 36px;
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
                color: #6b7280;
            }
            }
    }
    .form-container{
        .btn{
            margin-top: 40px;
            width: 100%;
        }
    }
    .footer{
        padding: 30px;
        text-align: center;
    }
}
</style>
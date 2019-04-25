<template>
    <div class="login"> 
        <!-- 头部 -->
        <top-title></top-title>
        <div class="login_area">
            <div class="login_from">
                <p class="login_account">账号登陆</p>
                <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <el-form-item prop="name">
                    <el-input type="text" v-model="loginForm.name" autocomplete="off" placeholder="输入账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="输入密码"></el-input>
                </el-form-item>
                <p class="forget">忘记密码？</p>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
                </el-form-item>
                </el-form>
            </div> 
        </div>
    </div>
</template>

<script>
    import topTitle from '../../components/nav/topTitle'
    import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                loginForm: {
                    name: '',
                    password: ''
                },
                loginRules: {
                    name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                }
            };
        },
        components:{
            "top-title":topTitle
        },
        methods: {
            ...mapActions({
                login:'auth/login'
            }),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$router.push('/home')
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="scss">
    @import '../../styles/common.scss';
    .login{
        height: 100%;
        background: url('../../assets/images/logoBG.png') no-repeat;
        background-size:cover;
        .login_top{
            height: 90px;
            padding: 24px 0px 0px 28px;
            box-sizing: border-box;
            .logo{
                float: left;
                padding-top: 6px;
                padding-right: 6px;
            }
            .top_right{
                float: left;
                font-size: 28px;
                color: $color;      
                p{
                    margin-bottom: 6px;
                }          
            }
        }
        .login_area{
            width: 100%;
            height: 85%;
            // margin: auto;
            background: url('../../assets/images/LoginBox.png') no-repeat center center;
            // background-position: 10px -96px;
            .login_from{
                width: 260px;
                margin: 0 auto;
                text-align: center;
                padding-top: 192px;
                .login_account{
                    font-size: 20px;
                    color: $color;
                    margin-bottom: 90px;
                    margin-top: 60px;
                }
                .forget{
                    text-align: right;
                    font-size: 14px;
                    margin-bottom: 64px;
                    color: $color
                }

            }

        }
        .el-form-item__content{
            margin-left:0px!important; 
        }
        .el-input__inner{
            border: none;
            border-radius: 0px;
            border-bottom: 1px solid $color;
            background-color:transparent;
        }
        .el-button{
            width: 160px;
            height: 44px;
            background:#257EC7;
            box-shadow:0px 1px 4px 0px rgba(23,131,255,0.28);
            border-radius:12px;
        }
        .el-input__inner{
            color: #fff;
        }
    }
</style>
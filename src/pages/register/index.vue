<template>
    <div class="register-page">
        <div class="banner">
            <div class="left">
                <div class="text">
                    <span class="highlight">MFH</span>丰富易用的加密金融产品提供商
                </div>
                <div class="txt">
                    让加密货币惠及每个人
                </div>
            </div>
            <img class="img" src="@/assets/images/login_bg.png">
        </div>

        <!-- 注册框 -->
        <div class="login-wrap">
            <div class="title-wrap">
                <div class="title">
                    创建一个MFH账户
                </div>
                <div class="desc">
                    早期采用者投资和交易最佳数字资产的地方
                </div>
            </div>
            <div class="content">
                <div class="val">
                    <div class="key">
                        邮箱
                    </div>
                    <input class="value" type="text" placeholder="请输入邮箱地址">
                </div>
                <div class="val">
                    <div class="key">
                        密码
                    </div>
                    <input class="value" type="text" placeholder="请设置密码(8-20位数字字母组成，不能为纯数字)">
                </div>
                <div class="val">
                    <div class="key">
                        验证码
                    </div>
                    <div class="value-wrap">
                        <input class="value" type="text" placeholder="请输入验证码">
                        <div class="highlight">
                            发送验证码
                        </div>
                    </div>
                </div>
                <div class="val">
                    <div class="key">
                        邀请码
                    </div>
                    <input class="value" type="text" placeholder="请输入邀请码(选填)">
                </div>
                <div class="agreement">
                    <!-- <img class="checkbox" src="@/assets/images/checkbox.svg"> -->
                    <img class="checkbox" src="@/assets/images/checkbox2.svg">
                    我已阅读并同意
                    <div class="highlight">
                        用户协议
                    </div>和<div class="highlight">
                        隐私政策
                    </div>
                </div>
                <v-btn class="btn" width="100%" color="primary">
                    注册
                </v-btn>
                <div class="tips">
                    已经有账户？
                    <div class="highlight">
                        去登录
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<route lang="yaml">
    meta:
      layout: main
</route>

<style lang="scss" src="./index-pc.scss"></style>
<style lang="scss" src="./index-h5.scss"></style>

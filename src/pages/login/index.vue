<template>
    <div class="login-page">
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

        <!-- 登录框 -->
        <div class="login-wrap">
            <div class="title-wrap">
                <div class="title">
                    登录MFH账户
                </div>
                <div class="desc">
                    开启您的投资增值的新世界
                </div>
            </div>
            <div class="content">
                <div class="val">
                    <div class="key">
                        邮箱
                    </div>
                    <input class="value" type="text" placeholder="请输入邮箱地址">
                    <div class="notes">
                        <div class="symbol">
                            !
                        </div>
                        请输入邮箱地址
                    </div>
                </div>
                <div class="val">
                    <div class="key">
                        密码
                    </div>
                    <input class="value" type="text" placeholder="请输入密码">
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
                <div class="highlight">
                    忘记密码？
                </div>
                <v-btn class="btn" width="100%" color="primary">
                    登录
                </v-btn>
                <div class="tips">
                    没有MFH账户？
                    <div class="highlight">
                        去注册
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

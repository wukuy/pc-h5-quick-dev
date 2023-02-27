<template>
    <div class="ido-page">
        <!-- 顶部banner -->
        <div class="banner">
            <div class="left">
                <div class="welcome">
                    IDO
                </div>
                <div class="text">
                    <span class="highlight">全球首发，首选MFH</span>
                </div>
                <div class="txt">
                    流量曝光，全方位扶持，打造明星百倍币项目
                </div>
            </div>
            <img class="img" src="@/assets/images/ido/ido.png">
        </div>

        <!-- 币列表 -->
        <div class="launchpad">
            <div class="title-wrap">
                <div class="text">
                    <div class="title">
                        Coinlist Launchpad
                    </div>
                    <div class="desc">
                        代币抢购，享百倍收益
                    </div>
                </div>

                <!-- 已登录 -->
                <!-- <v-btn rounded variant="outlined" class="btn">
                    <img class="icon" src="@/assets/images/ido/record.png">
                    IDO记录
                </v-btn> -->
            </div>
            <div v-for="idx in 4" :key="idx" class="item">
                <div class="cover-wrap">
                    <v-img
                        class="cover"
                        :aspect-ratio="1"
                        src=""
                    />
                    <div class="status">
                        进行中
                    </div>
                    <!-- <div class="status">
                        未开始
                    </div> -->
                    <!-- <div class="status">
                        已结束
                    </div> -->
                </div>
                <div class="info-wrap">
                    <div class="title">
                        <div class="coin-wrap">
                            <v-img
                                class="icon"
                                :aspect-ratio="1"
                                src=""
                            />
                            <div class="name-wrap">
                                <div class="name">
                                    GODS
                                </div>
                                <div class="desc">
                                    Gods Unchained
                                </div>
                            </div>
                        </div>
                        <div class="round-wrap">
                            <div class="round first">
                                首发
                            </div>
                            <!-- <div class="round no-first">
                                非首发
                            </div> -->
                            <div class="round airdrop">
                                空投
                            </div>
                            <div class="round second">
                                第二轮
                            </div>
                        </div>
                    </div>
                    <div class="total">
                        <div class="key">
                            本轮总量
                        </div>
                        <div class="value">
                            100,000,000 GODS
                        </div>
                    </div>
                    <div class="total end">
                        <div class="key">
                            距离结束
                        </div>
                        <div class="time">
                            <div class="num">
                                0
                            </div>
                            <div class="unit">
                                天
                            </div>
                            <div class="num">
                                20
                            </div>
                            <div class="unit">
                                时
                            </div>
                            <div class="num">
                                23
                            </div>
                            <div class="unit">
                                分
                            </div>
                            <div class="num">
                                58
                            </div>
                            <div class="unit">
                                秒
                            </div>
                        </div>
                    </div>
                    <v-btn width="100%" color="primary" @click="push('/ido/project-detail')">
                        查看详情
                    </v-btn>
                </div>
            </div>

            <!-- 已登录 -->
            <!-- <div class="btn-wrap">
                <v-btn rounded variant="outlined" class="more-btn">
                    查看更多
                </v-btn>
            </div> -->
        </div>
    </div>
</template>

<script setup>
const { push } = useRouter()

</script>

<route lang="yaml">
    meta:
      layout: main
</route>

<style lang="scss" src="./index-pc.scss">

</style>
<style lang="scss" src="./index-h5.scss">

</style>

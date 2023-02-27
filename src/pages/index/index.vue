<template>
    <div class="index-page">
        <v-carousel
            :show-arrows="false"
            cycle
            height="581"
            hide-delimiter-background
        >
            <v-carousel-item v-for="(slide, i) in 3" :key="i">
                <div class="banner">
                    <div class="left">
                        <div class="welcome">
                            欢迎进入MFH
                        </div>
                        <div class="text">
                            <span class="highlight">丰富易用</span>的加密金融产品提供商
                        </div>
                        <div class="txt">
                            让加密货币惠及每个人
                        </div>
                    </div>
                    <img class="img" src="@/assets/images/home/banner.png">
                </div>
            </v-carousel-item>
        </v-carousel>
        <div class="do">
            <img class="item" src="@/assets/images/home/item1.png">
            <div class="txt-wrap">
                <div class="title">
                    IDO
                </div>
                <div class="info">
                    以基石价格抢占数字资产首发白名单
                </div>
                <div class="desc">
                    通过抢占项目的初次发行资格，让投资人获得低价认购数字资产价格，我们将保持优质项目的持续更新，让投资人不错过任何的投资热点。
                </div>
                <v-btn variant="outlined" rounded class="btn">
                    了解更多
                </v-btn>
            </div>
        </div>
        <div class="do do-right">
            <div class="txt-wrap">
                <div class="title">
                    存币生息
                </div>
                <div class="info">
                    将富余资产质押给平台产生利息奖励
                </div>
                <div class="desc">
                    我们提供一站式的数字资产增值服务，在IDO及数字资产交易之外，还提供资产质押增值服务。资产所有权仍归投资人，期满释放，同时可定期限获得奖励。
                </div>
                <v-btn variant="outlined" rounded class="btn">
                    了解更多
                </v-btn>
            </div>
            <img class="item" src="@/assets/images/home/item2.png">
        </div>
        <div class="do">
            <img class="item" src="@/assets/images/home/item3.png">
            <div class="txt-wrap">
                <div class="title">
                    双币赢
                </div>
                <div class="info">
                    两种资产，灵活结算，无惧市场风险
                </div>
                <div class="desc">
                    通过双币投资，用户能够以期望价格和日期低买或高卖加密货币，同时还可赚取高额资产收益
                </div>
                <v-btn variant="outlined" rounded class="btn">
                    了解更多
                </v-btn>
            </div>
        </div>
        <div class="do do-right">
            <div class="txt-wrap">
                <div class="title">
                    DeFi
                </div>
                <div class="info">
                    多种DeFi产品一起探寻Web3之道
                </div>
                <div class="desc">
                    存币生息、Swap、NFT让你随时随地体验Web3产品需求。
                </div>
                <v-btn variant="outlined" rounded class="btn">
                    了解更多
                </v-btn>
            </div>
            <img class="item" src="@/assets/images/home/item4.png">
        </div>
        <div class="info-wrap">
            <div class="title">
                <span class="highlight">最受信任的</span>加密货币平台之一
            </div>
            <div class="content">
                除了提供丰富易用的产品，我们还提供业界顶级安全保障以及 7*24H全球客户服务支持，为您的加密资产保驾护航，保障您的资产安全是我们的首要任务。
            </div>
        </div>
        <div class="num-wrap">
            <div class="item">
                <img class="icon" src="@/assets/images/home/icon1.png">
                <div class="num">
                    <span class="doller">$</span> 50亿
                </div>
                <div class="desc">
                    每月美元交易量
                </div>
            </div>
            <div class="item">
                <img class="icon" src="@/assets/images/home/icon2.png">
                <div class="num">
                    <span class="doller">$</span> 7亿
                </div>
                <div class="desc">
                    美元借贷总额
                </div>
            </div>
            <div class="item">
                <img class="icon" src="@/assets/images/home/icon3.png">
                <div class="num">
                    <span class="doller">$</span>  100亿
                </div>
                <div class="desc">
                    美元管理及托管资产
                </div>
            </div>
            <div class="item">
                <img class="icon" src="@/assets/images/home/icon4.png">
                <div class="num">
                    290 <span class="doller">+</span>
                </div>
                <div class="desc">
                    全球员工总数
                </div>
            </div>
        </div>
        <div class="partner">
            <div class="title">
                合作<span class="highlight">伙伴</span>
            </div>
            <div class="desc">
                MFH是众多投资机构量化策略的首选
            </div>
            <div class="partner-icon">
                <img class="icon" src="@/assets/images/home/partner1.png">
                <img class="icon" src="@/assets/images/home/partner2.png">
                <img class="icon" src="@/assets/images/home/partner3.png">
                <img class="icon" src="@/assets/images/home/partner4.png">
                <img class="icon" src="@/assets/images/home/partner5.png">
                <img class="icon" src="@/assets/images/home/partner6.png">
                <img class="icon" src="@/assets/images/home/partner7.png">
                <img class="icon" src="@/assets/images/home/partner8.png">
                <img class="icon" src="@/assets/images/home/partner9.png">
                <img class="icon" src="@/assets/images/home/partner10.png">
                <img class="icon" src="@/assets/images/home/partner11.png">
                <img class="icon" src="@/assets/images/home/partner12.png">
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

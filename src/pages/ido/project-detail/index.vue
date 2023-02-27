<template>
    <div class="project-detail-page">
        <v-btn rounded variant="outlined" class="btn">
            <img class="icon" src="@/assets/images/ido/return.png">
            返回
        </v-btn>

        <!-- 币列表详情 -->
        <div class="launchpad">
            <div class="title">
                项目详情
            </div>
            <div class="item">
                <div class="status">
                    进行中
                </div>
                <div class="cover-wrap">
                    <v-img
                        class="cover"
                        :aspect-ratio="1"
                        src=""
                    />
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
                            <div class="round airdrop">
                                空投
                            </div>
                            <div class="round second">
                                第二轮
                            </div>
                        </div>
                    </div>
                    <div class="introduce">
                        这个是项目简介这个是项目简介这个是项目简介这个是项目简介这个是项目简介这个是项目简介这个是项目简介这个是项目简介这个是项目简介这个是项目简介这个是项目简介这个是项目简介。
                    </div>
                    <div class="btn-link">
                        <v-btn variant="outlined" class="btn">
                            官网
                            <img class="icon" src="@/assets/images/ido/link.png">
                        </v-btn>
                        <v-btn variant="outlined" class="btn">
                            Twitter
                            <img class="icon" src="@/assets/images/ido/link.png">
                        </v-btn>
                        <v-btn variant="outlined" class="btn">
                            白皮书
                            <img class="icon" src="@/assets/images/ido/link.png">
                        </v-btn>
                    </div>
                </div>
                <div class="info-wrap">
                    <div class="total">
                        <div class="key">
                            本轮总量
                        </div>
                        <div class="value highlight">
                            100,000,000 GODS
                        </div>
                    </div>
                    <div class="total">
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
                    <div class="total">
                        <div class="key">
                            类型
                        </div>
                        <div class="value">
                            系统随机抽签确定
                        </div>
                    </div>
                    <div class="total">
                        <div class="key">
                            申购价格
                        </div>
                        <div class="value">
                            1 GODS = 0.1 U
                        </div>
                    </div>
                    <div class="total">
                        <div class="key">
                            发行总量
                        </div>
                        <div class="value">
                            100,000,000,000,000  GODS
                        </div>
                    </div>
                    <div class="total">
                        <div class="key">
                            额度
                        </div>
                        <div class="value">
                            200 U
                        </div>
                    </div>
                    <v-btn class="go" width="100%" color="primary" @click="applyPurchaseBtnClick">
                        立即申购
                    </v-btn>
                    <!-- <v-btn class="end-btn" width="100%">
                        申购已结束，等待公布结果
                    </v-btn> -->
                </div>
            </div>
        </div>

        <!-- 其他信息 -->
        <div class="tab">
            <div class="nav-bar">
                <div class="item active">
                    项目详情
                </div>
                <div class="item">
                    申购周期
                </div>
                <div class="item">
                    规则详情
                </div>
            </div>

            <!-- 项目详情 -->
            <div class="project-detail">
                <div class="introduce">
                    Gods Unchained是一款免费的卡牌类对战游戏，游戏模式包含了决斗、竞标赛、大逃杀，并推出了两种版本，诸神的试炼和神圣秩序 。玩家通过构建各种战术套牌，战胜对手，从而获得奖励。该游戏允许玩家自由地交易、出售他们的卡牌。Gods Unchained将经济激励和游戏紧密结合，代币$GODS可以在游戏中使用，升级卡牌，同时其代币效用包括治理、Staking功能。
                </div>
                <table theme="dark" class="table">
                    <thead>
                        <tr>
                            <th class="text-left">
                                COINLIST 公募情况
                            </th>
                            <th class="text-left">
                                占总供应量比例
                            </th>
                            <th class="text-left">
                                代币数量
                            </th>
                            <th class="text-left">
                                公募价格
                            </th>
                            <th class="text-left">
                                代币锁定周期
                            </th>
                            <th class="text-left">
                                代币释放周期
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="content">
                            <td>公募环节 1</td>
                            <td>4.00%</td>
                            <td>20,000,000</td>
                            <td>0.1 USDT</td>
                            <td>90 天</td>
                            <td>2022.01.12</td>
                        </tr>
                        <tr class="content">
                            <td>公募环节 1</td>
                            <td>4.00%</td>
                            <td>20,000,000</td>
                            <td>0.1 USDT</td>
                            <td>90 天</td>
                            <td>2022.01.12</td>
                        </tr>
                    </tbody>
                </table>
                <div class="data">
                    <div class="item-wrap">
                        <div class="item">
                            <div class="key">
                                发行总量
                            </div>
                            <div class="value">
                                100,100,100,100,100,100
                            </div>
                        </div>
                        <div class="item">
                            <div class="key">
                                代币类型
                            </div>
                            <div class="value">
                                ERC-20
                            </div>
                        </div>
                        <div class="item">
                            <div class="key">
                                私募发行价格
                            </div>
                            <div class="value">
                                — —
                            </div>
                        </div>
                    </div>
                    <div class="item-wrap">
                        <div class="item">
                            <div class="key">
                                私募发行量
                            </div>
                            <div class="value">
                                — —
                            </div>
                        </div>
                        <div class="item">
                            <div class="key">
                                私募锁定时间
                            </div>
                            <div class="value">
                                — —
                            </div>
                        </div>
                        <div class="item">
                            <div class="key">
                                私募日期
                            </div>
                            <div class="value">
                                — —
                            </div>
                        </div>
                    </div>
                </div>
                <div class="other-info">
                    <div class="ratio">
                        <div class="title">
                            代币分配比例
                        </div>
                    </div>
                    <div class="member">
                        <div class="title">
                            团队成员
                        </div>
                        <div class="info-wrap">
                            <div class="info">
                                <v-img class="head" src="" />
                                <div class="name">
                                    Hunter
                                </div>
                                <div class="position">
                                    创始人
                                </div>
                            </div>
                            <div class="info">
                                <v-img class="head" src="" />
                                <div class="name">
                                    Cooper
                                </div>
                                <div class="position">
                                    创始人
                                </div>
                            </div>
                            <div class="info">
                                <v-img class="head" src="" />
                                <div class="name">
                                    Ayden
                                </div>
                                <div class="position">
                                    技术总监
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 申购周期 -->
            <!-- <div class="subscription-cycle">
                <div class="progress">
                    <div class="item">
                        <div class="order active">
                            1
                        </div>
                        <div class="status">
                            预热
                        </div>
                    </div>
                    <div class="item">
                        <div class="order">
                            2
                        </div>
                        <div class="status">
                            申购
                        </div>
                        <div class="date">
                            2021-10-31
                        </div>
                    </div>
                    <div class="item">
                        <div class="order">
                            3
                        </div>
                        <div class="status">
                            系统随机抽选
                        </div>
                        <div class="date">
                            2022-01-31
                        </div>
                    </div>
                    <div class="item">
                        <div class="order">
                            4
                        </div>
                        <div class="status">
                            公布结果
                        </div>
                        <div class="date">
                            2022-01-31
                        </div>
                    </div>
                </div>
                <div class="tips">
                    <img class="clock" src="@/assets/images/ido/clock.png">
                    <div class="txt">
                        申购未结束，中签结果请耐心等待
                    </div>
                    <div class="desc">
                        2021-1-31 12:00:00将公布中签结果，如若中签，将对你的账号进行扣款。
                    </div>

                    中签成功
                    <img class="clock" src="@/assets/images/ido/success.png">
                    <div class="txt">
                        申购结束，你已中签
                    </div>
                    <div class="desc">
                        2021-1-31 12:00:00将公布中签结果，如若中签，将对你的账号进行扣款。
                    </div>

                    中签失败
                    <img class="clock" src="@/assets/images/ido/fail.png">
                    <div class="txt">
                        申购结束，你未中签
                    </div>
                    <div class="desc">
                        2021-1-31 12:00:00将公布中签结果，如若中签，将对你的账号进行扣款。
                    </div>
                </div>
            </div> -->

            <!-- 规则详情 -->
            <!-- <div class="rule-detail">
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
                <p> 1、这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1这是规则1。</P>
            </div> -->
        </div>

        <!-- 项目申购对话框 -->
        <v-dialog v-model="showApplyPurchaseDialog" class="project-detail-apply-purchase-dialog">
            <div class="project-detail-apply-purchase-dialog-wrap">
                <div class="title">
                    <div class="name">
                        项目申购
                    </div>
                    <div class="close">
                        <img class="icon" src="@/assets/images/ido/close.png">
                    </div>
                </div>
                <div class="form">
                    <div class="form-item">
                        <div class="label">
                            项目名称
                        </div>
                        <div class="val">
                            <input type="text">
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="label">
                            中签方式
                        </div>
                        <div class="val">
                            <input type="text">
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="label">
                            额度
                        </div>
                        <div class="val">
                            <input type="text">
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="label">
                            申购价格
                        </div>
                        <div class="val">
                            <input type="text">
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="label">
                            申购金额
                            <div class="balance">
                                账户可用余额
                                <div class="highlight">
                                    12399.98882222
                                </div>
                                USDT
                            </div>
                        </div>
                        <div class="val">
                            <input class="high" type="text">
                        </div>
                    </div>
                    <div class="buttons">
                        <v-btn class="cancel" variant="outlined">
                            取消
                        </v-btn>
                        <v-btn class="sure" color="primary">
                            确定
                        </v-btn>
                    </div>
                </div>
                <div class="notes">
                    <div class="title">
                        注：
                    </div>
                    <div class="content">
                        <p>1、每个账户固定申购额度为 2000 GODS = 200 U</p>
                        <p> 2、申购时间：2021-11-02 20:00:00-2021-11-22 20:00:00</p>
                        <p> 3、提交申购申请后申购金额将会被冻结，直至申购结果公布，如若中签，将直接扣除申购冻结资金没有中签，申购冻结资金将解冻。</p>
                        <p> 4、当前项目申购如若中签，抢购的代币需要锁仓90天。</p>
                    </div>
                </div>
            </div>
        </v-dialog>

        <!-- 申购安全验证 -->
        <!-- <v-dialog v-model="showApplyPurchaseDialog" class="security-verification-dialog">
            <div class="security-verification-dialog-wrap">
                <div class="title">
                    <div class="name-txt">
                        安全验证
                    </div>
                    <div class="close">
                        <img class="icon" src="@/assets/images/ido/close.png">
                    </div>
                </div>
                <div class="form">
                    <div class="form-item">
                        <div class="label">
                            验证码已发送至1*****@qq.com
                        </div>
                        <div class="val">
                            <input type="text" placeholder="邮箱验证码">
                            获取验证码
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="label">
                            谷歌验证码
                        </div>
                        <div class="val">
                            <input type="text" placeholder="谷歌验证码">
                        </div>
                    </div>
                    <div class="buttons">
                        <v-btn class="cancel" variant="outlined">
                            取消
                        </v-btn>
                        <v-btn class="sure" color="primary">
                            确定
                        </v-btn>
                    </div>
                </div>
            </div>
        </v-dialog> -->

        <!-- 未绑定谷歌提示语 -->
        <!-- <v-dialog v-model="showApplyPurchaseDialog" class="tips-dialog">
            <div class="tips-dialog-wrap">
                <div class="title">
                    <div class="name-txt">
                        提示
                    </div>
                </div>
                <div class="form">
                    <div class="form-item">
                        <div class="label">
                            代币申购需要绑定谷歌验证器，是否前往绑定？
                        </div>
                    </div>
                    <div class="buttons">
                        <v-btn class="cancel" variant="outlined">
                            取消
                        </v-btn>
                        <v-btn class="sure" color="primary">
                            前往绑定
                        </v-btn>
                    </div>
                </div>
            </div>
        </v-dialog> -->
    </div>
</template>

<script setup>
const { showApplyPurchaseDialog, applyPurchaseBtnClick } = useApplyPurchase()

function useApplyPurchase() {
    const showApplyPurchaseDialog = ref(false)

    // 申购按钮点击
    const applyPurchaseBtnClick = () => {
        showApplyPurchaseDialog.value = true
    }

    return {
        showApplyPurchaseDialog,
        applyPurchaseBtnClick
    }
}
</script>

<route lang="yaml">
    meta:
      layout: main
</route>

<style lang="scss" src="./index-pc.scss">

</style>
<style lang="scss" src="./index-h5.scss">

</style>

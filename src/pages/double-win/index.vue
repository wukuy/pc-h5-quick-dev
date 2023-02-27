<template>
    <div class="double-win-page">
        <!-- 顶部banner -->
        <div class="banner">
            <div class="left">
                <div class="welcome">
                    双币赢
                </div>
                <div class="text">
                    <span class="highlight">双币赢</span>
                </div>
                <div class="txt">
                    高收益，低买高卖
                </div>
                <v-btn rounded variant="outlined" class="btn">
                    什么是双币赢？
                    <img class="icon" src="@/assets/images/double/arrow_right.png">
                </v-btn>
            </div>
            <img class="img" src="@/assets/images/double/double.png">
        </div>

        <!-- 双币赢内容 -->
        <div class="content">
            <div class="title-wrap">
                <div class="text">
                    <div class="title">
                        双币赢
                    </div>
                    <div class="desc">
                        高收益，低买高卖
                    </div>
                </div>

                <!-- 已登录 -->
                <v-btn rounded variant="outlined" class="btn">
                    <img class="icon" src="@/assets/images/ido/record.png">
                    我的双币赢
                </v-btn>
            </div>
            <div class="nav-bar">
                <div class="item active">
                    BTC
                </div>
                <div class="item">
                    BTC-U
                </div>
                <div class="item">
                    ETH
                </div>
                <div class="item">
                    ETH-U
                </div>
            </div>
            <div class="info-wrap">
                <div class="info">
                    投资<img class="icon" src="">BTC，赚取更多的<img class="icon" src="">BTC或<img class="icon" src="">USDT
                </div>
                <div class="price">
                    <div class="key">
                        当前BTC价格：
                    </div>
                    <div class="num">
                        $20500.86
                    </div>
                </div>
            </div>
            <div class="table">
                <v-table>
                    <thead>
                        <tr>
                            <th>目标价格</th>
                            <th>参考年化</th>
                            <th>期限（天）</th>
                            <th>结算日期</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="idx in 5" :key="idx">
                            <td class="time">
                                $ 19500
                            </td>
                            <td class="annualization">
                                98.23%
                            </td>
                            <td class="time">
                                1 天
                            </td>
                            <td class="date">
                                2022-09-16
                            </td>
                            <td class="btn">
                                申购
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
            <div class="btn-wrap">
                <v-btn rounded variant="outlined" class="more-btn" @click="applyPurchaseBtnClick">
                    查看更多
                </v-btn>
            </div>
        </div>
        <v-dialog v-model="showApplyPurchaseDialog" class="regular-dialog">
            <div class="regular-dialog-wrap ">
                <div class="left">
                    <div class="title">
                        <img class="icon" src="@/assets/images/save/coin.png">
                        <div class="name-wrap">
                            BTC
                            <div class="desc">
                                双币赢
                            </div>
                        </div>
                    </div>
                    <div class="form">
                        <div class="form-item">
                            <div class="label">
                                产品名称
                            </div>
                            <div class="val">
                                <input type="text">
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label">
                                期限
                            </div>
                            <div class="val">
                                <input type="text">
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label">
                                参考年化
                            </div>
                            <div class="val">
                                <input type="text">
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label">
                                收益率
                            </div>
                            <div class="val">
                                <input type="text">
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label">
                                目标价格
                            </div>
                            <div class="val">
                                <input type="text">
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label">
                                申购数量
                                <div class="balance">
                                    可用
                                    <div class="highlight">
                                        999977565999999.99999
                                    </div>
                                    BTC
                                </div>
                                <div class="recharge">
                                    <img class="icon" src="">
                                    充币
                                </div>
                            </div>
                            <div class="val value">
                                <input class="high" type="text">
                                <div class="txt-wrap">
                                    BTC
                                    <div class="all">
                                        全部
                                    </div>
                                </div>
                            </div>
                            <div class="desc">
                                剩余额度：
                                <div class="txt">
                                    128838.34 BTC
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <v-btn class="sure" color="primary">
                                立即申购
                            </v-btn>
                        </div>
                    </div>
                    <div class="rule-wrap">
                        <div class="price">
                            BTC价格
                            <div class="num">
                                $18500.23
                            </div>
                        </div>
                        <div class="txt">
                            回款规则
                        </div>
                        <div class="rule">
                            <p>如果结算价格 &gl;$21000，将回款 - - BTC。</p>
                            <p> 如果结算价格 >= $21000，将回款 - - USDT。</p>
                        </div>
                        <div class="notes">
                            注：结算价格为到期时间前后1小时内的平均价格。
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="close">
                        <img class="icon" src="@/assets/images/ido/close.png">
                    </div>
                    <div class="survey">
                        <div class="title">
                            概况
                        </div>
                        <div class="item">
                            <div class="key">
                                申购时间
                            </div>
                            <div class="value">
                                2021-10-29 18:30
                            </div>
                        </div>
                        <div class="item">
                            <div class="key">
                                起息时间
                            </div>
                            <div class="value">
                                2021-10-30 00:00
                            </div>
                        </div>
                        <div class="item">
                            <div class="key">
                                到期时间
                            </div>
                            <div class="value">
                                2022-02-30 00:00
                            </div>
                        </div>
                        <div class="item">
                            <div class="key">
                                到账时间
                            </div>
                            <div class="value">
                                2022-02-30 00:00
                            </div>
                        </div>
                    </div>
                    <div class="common-problem">
                        <div class="title">
                            常见问题
                        </div>
                        <div class="item">
                            <div class="problem">
                                什么是双币赢？
                                <img class="icon" src="@/assets/images/double/arrow_up.png">
                            </div>
                            <div class="answer">
                                双币赢是欧易打造的一款能够根据用户决策，辅助其实现交易策略的工具产品。购买时，产品的收益率是固定的，但到期时的结算币种是不确定的。到期时，实际结算币种取决于结算价与挂钩价的对比结果。用户可根据自己的风险偏好选择不同产品。
                            </div>
                        </div>
                        <div class="item">
                            <div class="problem">
                                回款如何计息？
                                <img class="icon" src="@/assets/images/double/arrow_down.png">
                            </div>
                            <div class="answer" />
                        </div>
                        <div class="item">
                            <div class="problem">
                                产品到期后多久可以回款？
                                <img class="icon" src="@/assets/images/double/arrow_down.png">
                            </div>
                            <div class="answer" />
                        </div>
                        <div class="item">
                            <div class="problem">
                                可以提前赎回吗？
                                <img class="icon" src="@/assets/images/double/arrow_down.png">
                            </div>
                            <div class="answer" />
                        </div>
                        <div class="item">
                            <div class="problem">
                                相关术语的定义？
                                <img class="icon" src="@/assets/images/double/arrow_down.png">
                            </div>
                            <div class="answer" />
                        </div>
                        <div class="item">
                            <div class="problem">
                                双赢币有风险吗？
                                <img class="icon" src="@/assets/images/double/arrow_down.png">
                            </div>
                            <div class="answer" />
                        </div>
                    </div>
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<script setup>
const { showApplyPurchaseDialog, applyPurchaseBtnClick } = useApplyPurchase()

function useApplyPurchase() {
    const showApplyPurchaseDialog = ref(false)

    // 查看更多按钮点击
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

<style lang="scss" src="./index-pc.scss"></style>
<style lang="scss" src="./index-h5.scss"></style>

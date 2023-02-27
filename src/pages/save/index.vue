<template>
    <div class="save-page">
        <!-- 顶部banner -->
        <div class="banner">
            <div class="left">
                <div class="welcome">
                    存币生息
                </div>
                <div class="text">
                    <span class="highlight">存币生息</span>
                </div>
                <div class="txt">
                    保本赚息，以币生币
                </div>
            </div>
            <img class="img" src="@/assets/images/save/save.png">
        </div>

        <!-- 存币生息内容 -->
        <div class="content">
            <div class="title-wrap">
                <div class="text">
                    <div class="title">
                        存币生息
                    </div>
                    <div class="desc">
                        低风险，收益稳健
                    </div>
                </div>

                <!-- 已登录 -->
                <v-btn rounded variant="outlined" class="btn">
                    <img class="icon" src="@/assets/images/ido/record.png">
                    存币记录
                </v-btn>
            </div>
            <div class="table">
                <v-table>
                    <thead>
                        <tr>
                            <th>币种</th>
                            <th>参考年化</th>
                            <th>期限（天）</th>
                            <th>最小起存数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="idx in 5" :key="idx" class="content">
                            <td>
                                <div class="coin">
                                    <img class="icon" src="@/assets/images/save/coin.png">
                                    <div class="name">
                                        AXS
                                    </div>
                                    <div class="desc">
                                        Axie Infinity
                                    </div>
                                </div>
                            </td>
                            <td class="annualization">
                                98.23%
                            </td>
                            <td class="time">
                                <div class="item">
                                    30
                                </div>
                                <div class="item">
                                    60
                                </div>
                                <div class="item">
                                    90
                                </div>
                                <div class="item">
                                    180
                                </div>
                            </td>
                            <td>1 AXS</td>
                            <td class="btn">
                                存入
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

        <!-- 存币生息-定期弹框 -->
        <v-dialog v-model="showApplyPurchaseDialog" class="regular-dialog">
            <div class="regular-dialog-wrap ">
                <div class="left">
                    <div class="title">
                        <img class="icon" src="@/assets/images/save/coin.png">
                        <div class="name-wrap">
                            AXS
                            <div class="desc">
                                存币生息
                            </div>
                        </div>
                    </div>
                    <div class="form">
                        <div class="form-item">
                            <div class="label">
                                类型
                            </div>
                            <div class="val">
                                <input type="text">
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label">
                                期限
                            </div>
                            <div class="val time">
                                <div class="item">
                                    30
                                </div>
                                <div class="item">
                                    60
                                </div>
                                <div class="item">
                                    90
                                </div>
                                <div class="item">
                                    180
                                </div>
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
                                存币数量
                                <div class="balance">
                                    可用
                                    <div class="highlight">
                                        999977565999999.99999
                                    </div>
                                    AXS
                                </div>
                                <div class="recharge">
                                    <img class="icon" src="">
                                    充币
                                </div>
                            </div>
                            <div class="val value">
                                <input class="high" type="text">
                                <div class="txt-wrap">
                                    AXS
                                    <div class="all">
                                        全部
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label">
                                预期总利息
                            </div>
                            <div class="val">
                                <input type="text">
                            </div>
                        </div>
                        <div class="buttons">
                            <v-btn class="sure" color="primary">
                                存入
                            </v-btn>
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
                                存入时间
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
                                收益发放
                            </div>
                            <div class="value">
                                到期还本付息
                            </div>
                        </div>
                        <div class="item">
                            <div class="key">
                                存币周期
                            </div>
                            <div class="value">
                                60 天
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
                    </div>
                    <div class="common-problem">
                        <div class="title">
                            常见问题
                        </div>
                        <div class="item">
                            <div class="problem">
                                什么是存币生息？
                                <img class="icon" src="@/assets/images/double/arrow_up.png">
                            </div>
                            <div class="answer">
                                存币生息是你将你的资产质押在区块链上，以支持区块链网络的运营，并获得相应的奖励。
                            </div>
                        </div>
                        <div class="item">
                            <div class="problem">
                                什么时候开始计息？
                                <img class="icon" src="@/assets/images/double/arrow_down.png">
                            </div>
                            <div class="answer" />
                        </div>
                        <div class="item">
                            <div class="problem">
                                什么时候发放收益？
                                <img class="icon" src="@/assets/images/double/arrow_down.png">
                            </div>
                            <div class="answer" />
                        </div>
                        <div class="item">
                            <div class="problem">
                                可以提前赎回质押币吗？
                                <img class="icon" src="@/assets/images/double/arrow_down.png">
                            </div>
                            <div class="answer" />
                        </div>
                        <div class="item">
                            <div class="problem">
                                提前赎回产品有什么影响？
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

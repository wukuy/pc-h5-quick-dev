<template>
    <div class="u-footer-wrap">
        <div class="u-footer">
            <div class="menu-wrap">
                <img class="logo" src="@/assets/images/logo.png">
                <div class="right-wrap">
                    <div class="product">
                        <dl>
                            <dt>产品</dt>
                            <dd>IDO</dd>
                            <dd>存币生息</dd>
                            <dd>双币赢</dd>
                            <dd>DeFi</dd>
                        </dl>
                    </div>
                    <div class="product">
                        <dl>
                            <dt>关于我们</dt>
                            <dd>服务协议</dd>
                            <dd>关于我们</dd>
                        </dl>
                    </div>
                    <div class="product">
                        <dl>
                            <dt>帮助</dt>
                            <dd>帮助中心</dd>
                        </dl>
                        <dl>
                            <dt>媒体</dt>
                            <dd>帮助中心</dd>
                            <dd>
                                <img src="@/assets/images/logo_youtube.svg">
                                <img src="@/assets/images/logo_youtube.svg">
                                <img src="@/assets/images/logo_youtube.svg">
                                <img src="@/assets/images/logo_youtube.svg">
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="copyright">
                Copyright © 2021 MFH. All rights reserved
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.u-footer-wrap {
    background: linear-gradient(180deg, rgba(#00FF1A, 0.08) 0%, #000000 50%);
    .u-footer {
        width: 1120px;
        margin: 0 auto;
        .menu-wrap {
            padding: 60px 0;
            display: flex;
            justify-content: space-between;
            .logo {
                width: 130px;
                height: fit-content;
            }
            .right-wrap {
                display: flex;
                .product {
                    width: 200px;
                    dl {
                        dt {
                            height: 24px;
                            font-size: 16px;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #FCFCFD;
                            line-height: 24px;
                            margin-bottom: 40px;
                        }
                        dd {
                            height: 16px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: rgba(white, 0.6);
                            line-height: 16px;
                            margin-bottom: 24px;
                            cursor: pointer;
                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
                }
            }
        }
        .copyright {
            border-top: 1px solid rgba(white, 0.2);
            height: 84px;
            line-height: 84px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            color: rgba(white, 0.6);
        }
    }
}
</style>

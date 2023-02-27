<template>
    <div class="u-header">
        <h1 class="logo" @click="goHome">
            <img src="@/assets/images/logo.png">
        </h1>

        <div class="menus">
            <ul>
                <li
                    v-for="(item, idx) in menus"
                    :key="idx"
                    :class="{ active: idx === currentMenu }"
                    @click="menuClick(idx)"
                >
                    {{ item.name }}
                </li>
                <v-menu>
                    <template #activator="{ props }">
                        <li
                            flat
                            v-bind="props"
                        >
                            更多
                            <v-icon>mdi-menu-down</v-icon>
                        </li>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title @click="push('/more/about')">
                                关于我们
                            </v-list-item-title>
                            <v-list-item-title @click="push('/more/help')">
                                帮助中心
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </ul>
        </div>

        <div class="right-wrap">
            <v-menu>
                <template #activator="{ props }">
                    <div class="langs" v-bind="props">
                        简体中文
                        <v-icon>mdi-menu-down</v-icon>
                    </div>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>中文简体</v-list-item-title>
                        <v-list-item-title>中文繁体</v-list-item-title>
                        <v-list-item-title>English</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <div class="login-wrap">
                <template v-if="isLogin">
                    <v-menu>
                        <template #activator="{ props }">
                            <span v-bind="props">
                                {{ useInfo.email }}
                                <v-icon>mdi-menu-down</v-icon>
                            </span>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title @click="goUser">
                                    个人中心
                                </v-list-item-title>
                                <v-list-item-title @click="exitLogin">
                                    退出登录
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
                <template v-else>
                    <v-btn rounded variant="outlined" @click="push(`/login`)">
                        登录
                    </v-btn>
                    <v-btn rounded color="primary" @click="push(`/register`)">
                        注册
                    </v-btn>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getUserInfo as getUserInfoApi } from '@/models/home'

const { push, currentRoute } = useRouter()

const useHome = function() {
    const goHome = () => {
        push('/')
    }

    return {
        goHome
    }
}
const { goHome } = useHome()

const useMenus = function() {
    const currentMenu = ref(0)
    const menus = ref([
        { name: 'IDO', path: '/ido' },
        { name: '存币生息', path: '/save' },
        { name: '双币赢', path: '/double-win' }
    ])
    const menuClick = (idx) => {
        currentMenu.value = idx
        const menu = menus.value[idx]

        push(menu.path)
    }

    watch(currentRoute, () => {
        if(!menus.value.find(menu => menu.path === currentRoute.value.path)) {
            currentMenu.value = -1
        }
    })

    return {
        menus,
        currentMenu,
        menuClick
    }
}

const { menus, currentMenu, menuClick } = useMenus()

const useUserInfo = function() {
    const useInfo = ref({})
    const isLogin = ref(false)

    const getUserInfo = async() => {
        useInfo.value = await getUserInfoApi()
    }

    const exitLogin = () => {
        localStorage.removeItem('token')
        push('/')
        isLogin.value = false
    }

    const goUser = () => {
        push('/user')
    }

    onMounted(() => {
        getUserInfo()

        isLogin.value = Boolean(localStorage.getItem('token'))
    })

    return {
        useInfo,
        isLogin,
        exitLogin,
        goUser
    }
}
const { useInfo, isLogin, exitLogin, goUser } = useUserInfo()
</script>

<style lang="scss">
.u-header{
    display: flex;
    height: 80px;
    align-items: center;
    width: 1120px;
    margin: auto;
    position: relative;
    z-index: 1;
    .logo {
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
            height: 25px;
        }
    }
    .menus {
        margin-left: 52px;
        ul {
            list-style-type: none;
            display: flex;
            li {
                font-family: PingFangSC-Medium, PingFang SC;
                font-size: 14px;
                font-weight: 500;
                margin: 0 20px;
                padding: 3px 0;
                color: rgba($color: white, $alpha: .6);
                cursor: pointer;
                transition: .3s all;
                border-bottom: 1px solid transparent;
                &.active {
                    border-bottom-color: #00FF1A;
                    color: white;
                }
            }
        }
    }
    .right-wrap {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .langs {
            line-height: 40PX;
            margin-right: 40px;
            padding-right: 40px;
            height: 40px;
            border-right: 1px solid rgba($color: white, $alpha: .2);
        }
        .login-wrap {
            .v-btn {
                padding: 0 46px;
                &:last-child {
                    margin-left: 24px;
                }
            }
        }
    }
}
</style>

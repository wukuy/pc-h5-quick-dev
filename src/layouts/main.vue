<template>
    <div class="main-layout">
        <div class="decorate" />
        <Header />
        <div class="main-content">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.main-layout {
    background: black;
    color: white;
    min-height: 100vh;
    .decorate {
        width: 468px;
        height: 453px;
        background: linear-gradient(180deg, rgba(0,255,26,0.4) 0%, rgba(0,255,56,0) 100%);
        filter: blur(50px);
        position: absolute;
        top: 0;
        left: 0;
    }
    .main-content {
        background: black;
        width: 1120px;
        margin: 0 auto;
        min-height: calc(100% - 480px);
    }
}
</style>

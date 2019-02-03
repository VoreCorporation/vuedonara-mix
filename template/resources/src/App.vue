<template>
    <div id="app" class="flex-center position-ref full-height">
        <div class="content">
            <img src="/logo.png" title="Vuedonara - Fullstack Application Boilerplate" width="300" height="300" />
            <div class="title m-b-md">
                Vuedonara Mix
            </div>

            <div class="links" style="margin-bottom:55px;">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <a href="https://github.com/VoreCorporation/vuedonara-mix">GitHub</a>
            </div>
        
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Nunito', sans-serif;
        font-weight: 200;
        height: 100vh;
        margin: 0;
        font-size: 17px;
    }

    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 60px;
    }

    .links > a, .links > router-link {
        color: #636b6f;
        padding: 0 25px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>
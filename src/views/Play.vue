<template>
    <div class="play">
        <div class="playNav">
            <router-link to="/movie">电影</router-link>
            <router-link to="/music">音乐</router-link>
            <router-link to="/mv">MV</router-link>
        </div>
        <router-view class="playContent"/>
    </div>
</template>

<style scoped>
    .play a{
        display: block;
    }
    .playNav{
        width: 100px;
        text-align: center;
    }
    .playNav,.playContent{
        display: inline-block;
    }
</style>
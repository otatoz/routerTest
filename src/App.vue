<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">影音娱乐界面</router-link> |
      <router-link to="/play">影音播放</router-link> |
      <router-link to="/control">投影控制</router-link> |
      <router-link to="/sence">情景模式</router-link> |
      <router-link to="/equipment">设备调节</router-link> |
      <router-link to="/functionList">功能菜单</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <el-container>
      <el-aside width="150px">
        <div id="nav">
          <router-link to="/">例子展示</router-link>
          <router-link to="/scene">场景使用</router-link>
        </div>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  margin-top: 30px;

  a {
    display: block;
    padding: 20px 25px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

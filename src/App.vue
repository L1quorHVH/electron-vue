<template>
  <div id="app">
    <h1>🎉 Electron + Vue 应用</h1>
    <p>恭喜！你的应用已经成功运行了！</p>
    <button @click="count++">点击计数: {{ count }}</button>
    <p>当前计数: {{ count }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  color: #2c3e50;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: #3aa876;
}
</style>
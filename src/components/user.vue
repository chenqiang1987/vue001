<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li
        v-for="user in userList"
        v-bind:key="user.id"
        v-bind:name="user.name"
        v-on:click="show()"
      >
        <button @click="show()">{{ user.id }}</button>
        {{ user.name }}
      </li>
    </ul>
    <router-link to="/hello">to hello</router-link>
  </div>
</template>

<script>



export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userList: [
        { id: 1, name: "综合管廊" },
        { id: 2, name: "创新晶体" },
        { id: 3, name: "公交监测" },
      ],
    };
  },
  methods: {
    show() {
      console.log("路漫漫其修远兮 一步一个脚印的探索吧");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

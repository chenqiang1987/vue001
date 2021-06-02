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
// import  Vue from 'vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "shanghai lingang group@.",
      userList: [
        { id: 1, name: "综合管廊" },
        { id: 2, name: "创新晶体" },
        { id: 3, name: "公交监测" },
      ],
    };
  },
  methods: {
    show() {
      console.log(this + "路漫漫其修远兮 一步一个脚印的探索吧");
      //   console.log(' ajax function..')
      this.$axios.get("/ajax/wechatshare/getconfig", {}).then(
        (res) => {
          console.log(res);
        },
        (res) => {
          console.log(res);
        }
      );
    },
  },
  created(){
    //alert('created')
    this.show();
  },
  mounted(){
    //alert('mounted')
  }
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

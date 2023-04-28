<template>
  <div class="login">
    <h2>Sign in</h2>
    <div class="container" style="width:500px">
      <div class="row align-items-center">
        <div class="col-md-4">アカウント名</div>
        <div class="col-md-3">
          <input v-model="authId" type="text" placeholder="Username">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-4">パスワード</div>
        <div class="col-md-3">
          <input v-model="authPass" type="password" placeholder="Password">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          {{ msg }}
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          <button class="btn btn-info btn-block login" v-on:click="post">ログイン</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
<script>
export default {
  name: 'Login',
  data () {
    return {
      showPassword : false,
      msg : 'userIDとpasswordを入力して下さい',
      authId : 'test',
      authPass : 'test'
    }
  },
  methods: {
    async post() {
      const data = { id : this.authId, pass : this.authPass };
      this.msg = await this.$axios.post('/fnclogin', data)    // バックエンド側にPOST
      .then(function (response) {
        console.log(response);
        return response.data.message;
      })
      .catch(function (error) {
        console.log(error);
        return error.message;
      });
      
      if(this.msg == 'OK'){
        this.$store.dispatch("fetch", this.authId);
        this.$router.push('/Page1');
      }
    }
  }
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-sm-offset-4">
        <h2>Sign In</h2>
        <div class="panel panel-default">
          <div class="panel-body">
            <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Email Address" class="form-control">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" class="form-control">
              </div>
              <button type="button" class="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

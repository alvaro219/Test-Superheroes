<template>
  <div class="row">
    <div class="col-md-6 offset-md-3"><div>
      <div>
        <h1 class="title">Login</h1>
        <hr/>
      </div>
      <form>
    
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control">
        </div>

          <div class="my-3">
            <button type="submit" class btn btn-primary>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script setup lant="ts">

</script>

<style scoped>
.title{
  color: white;
  max-width: 500px;
}
</style>
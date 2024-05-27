<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div>
      <ul>
        <a class="texto_li">
            <RouterLink class="textito" to="/">Home</RouterLink>
        </a>
        <a class="nav-item texto_li">
          <RouterLink class="textito" to="/login">Login</RouterLink>
        </a>
        <a class="nav-item texto_li">
            <RouterLink class="textito" to="/signup">Signup</RouterLink>
        </a>
        <a class="nav-item texto_li">
            <RouterLink class="textito" to="/superheroes">Create Superheroes</RouterLink>
        </a>
      </ul>
    </div>
  </div>
</nav>  
    </header>
  
</template>

<script setup lang="ts">
</script>

<style scoped>
.texto_li{
  margin-left: 25px;
  background-color: #50010e;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

.textito{
color: white

}

</style>
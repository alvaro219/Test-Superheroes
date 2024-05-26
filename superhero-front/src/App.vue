<template>
  <TheNavitation/>
  <div class="container">
    <div class="row">
      <div class="col-mod-12">
        <div>
          <RouterView />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import TheNavitation from './components/TheNavigation.vue'

components: {
  TheNavitation
}
</script>
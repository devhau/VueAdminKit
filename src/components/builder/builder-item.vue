<template>
  <div class="builder-item">
      {{modelValue.name}}
  </div>
</template>
<script>
export default {
    props:{
        modelValue:{
            type:Object,
        }
    },
    setup() {
        
    },
}
</script>
<template>
  <login/>
</template>

<script>
export default {
    layout: 'none',
    middleware: ['guest'],

}
</script>

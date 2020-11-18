<template>
  <div class="errPage-container">
    <!-- $t is vue-i18n global function to translate lang -->
    <h3>{{ $t('errorLog.tips') }}</h3>
    <aside>
      {{ $t('errorLog.description') }}
    </aside>
  </div>
</template>

<script>

export default {
  name: 'ErrorLog',
}
</script>

<style scoped>
  .errPage-container {
    padding: 30px;
  }
</style>

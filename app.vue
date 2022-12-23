<template>
  <NuxtPage />
</template>

<script setup>
const appConfig = useAppConfig();

useHead({
  title: appConfig.title,
  meta: [
    {name: 'description', content: 'My amazing site.'}
  ]
});
</script>

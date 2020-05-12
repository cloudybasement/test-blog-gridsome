<template>
  <Layout slotClass="container">
    <h1 class="text-center">{{ $page.sitePage.title }}</h1>
    <div v-html="$page.sitePage.content"></div>
  </Layout>
</template>

<page-query>
query ($id: String!) {
  sitePage (id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "$page.sitePage.title",
  },
};
</script>

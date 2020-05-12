<template>
  <Layout slotClass="container">
    <h1 class="text-center mb-0">{{ $page.post.title }}</h1>
    <div class="text-center mx-auto text-gray-600">{{ $page.post.date }}</div>
    <div class="text-center mx-auto text-gray-600">
      <g-link
        v-for="tag in $page.post.tags"
        v-bind:key="tag.id"
        v-bind:to="tag.path"
        class="pr-2"
        >#{{ tag.id }}</g-link
      >
    </div>
    <article class="items-center justify-center">
      <g-image
        v-if="$page.post.cover_image"
        v-bind:src="$page.post.cover_image"
      />
      <div v-html="$page.post.content" />
    </article>
  </Layout>
</template>

<page-query>
query ($path:String!) {
  post(path: $path) {
    cover_image (width: 1000, height: 300, blur: 70, fit: cover)
    content
    title
    id
    tags {
      id
      path
    }
    date (format: "MMMM Do, YYYY")
  }
}
</page-query>

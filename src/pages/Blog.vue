<template>
  <Layout slotClass="container">
    <h1 class="text-center">Latest Posts</h1>
    <article
      class="block mb-2 flex flex-row"
      v-for="edge in $page.allPost.edges"
      v-bind:key="edge.node.id"
    >
      <g-image
        v-if="edge.node.excerpt_image"
        v-bind:src="edge.node.excerpt_image"
        class="p-10 w-64"
      />
      <div class="flex-1 ml-4">
        <g-link v-bind:to="edge.node.path" class="text-3xl font-medium">{{
          edge.node.title
        }}</g-link>
        <p class="text-teal-600">Published {{ edge.node.date }}</p>
        <p class="font-light">{{ edge.node.excerpt }}</p>
        <div>
          <g-link
            v-for="tag in edge.node.tags"
            v-bind:key="tag.id"
            v-bind:to="tag.path"
            class="pr-2"
            >#{{ tag.id }}</g-link
          >
        </div>
      </div>
    </article>

    <Pager
      class="w-full flex justify-center"
      v-bind:info="$page.allPost.pageInfo"
      linkClass="tx-xs tracking-wide pt-10 px-5 hover:underline"
    />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        date (format: "MMMM Do, YYYY")
        path
        tags {
          id
          path
        }
        excerpt_image (width: 200, height: 100, quality: 100, blur: 20)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Blog",
  },
  components: {
    Pager,
  },
};
</script>

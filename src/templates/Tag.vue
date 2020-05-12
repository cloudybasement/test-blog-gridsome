<template>
  <Layout slotClass="container">
    <h1 class="text-center">#{{ $page.tag.title }}</h1>
    <article
      class="block mb-2 flex flex-row"
      v-for="edge in $page.tag.belongsTo.edges"
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
      v-bind:info="$page.tag.belongsTo.pageInfo"
      linkClass="tx-xs tracking-wide pt-10 px-5 hover:underline"
    />
  </Layout>
</template>

<page-query>
query ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
            id
            title
            excerpt
            date (format: "MMMM Do, YYYY")
            excerpt_image (width: 200, height: 100, quality: 100, blur: 20)
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Tags",
  },
  components: {
    Pager,
  },
};
</script>

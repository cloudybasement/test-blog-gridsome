// pages/Blog.vue
<template>
  <Layout>
    <div
      class="flex flex-col justify-center items-center w-full bg-cover bg-center"
      v-bind:style="
        'height: 400px;background-image: url(' + $page.sitePage.hero_image + ')'
      "
    >
      <h1
        class="transform -rotate-5 text-center bg-white bg-opacity-75 text-primary px-6 py-2 text-4xl md:text-6xl"
      >
        {{ $page.sitePage.title }}
      </h1>
    </div>

    <div class="container">
      <div
        class="text-center mt-10 text-xl"
        v-html="$page.sitePage.content"
      ></div>

      <h2 class="text-center mt-10">Latest Posts</h2>
      <div class="flex">
        <article
          class="mb-2 mr-10 w-64"
          v-for="edge in $page.allPost.edges"
          v-bind:key="edge.node.id"
        >
          <g-link
            v-bind:to="edge.node.path"
            class="shadow-lg group rounded-md bg-white flex justify-center items-center mx-auto bg-contain bg-top"
            v-bind:style="
              'background-image: url(' + edge.node.excerpt_image + ')'
            "
          >
            <div class="w-full">
              <div
                class="w-full image-cover rounded-t-md"
                style="height:140px;"
              >
                <div
                  class="p-2 m-4 w-16 h-16 text-center bg-primary-700 rounded-full text-white float-right"
                >
                  <span
                    class="text-base tracking-wide font-bold border-b border-white font-sans"
                    style="padding-bottom: 2px;"
                  >
                    {{ edge.node.day }}</span
                  >
                  <span
                    class="text-xs tracking-wide font-bold uppercase block font-sans"
                    >{{ edge.node.month }}</span
                  >
                </div>
              </div>
              <div class="py-4 px-4 bg-white rounded-b-md">
                <div
                  class="block text-lg text-gray-800 font-bold tracking-wide"
                  div
                >
                  {{ edge.node.title }}
                </div>
                <span class="block text-primary-600 text-sm"
                  >{{ edge.node.excerpt }}
                </span>
              </div>
            </div>
          </g-link>
        </article>
      </div>
      <Pager
        v-bind:info="$page.allPost.pageInfo"
        linkClass="tx-xs tracking-wide pt-10 px-5 hover:underline"
      />
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  sitePage (id: "homepage") {
    title
    content
    hero_image(width: 1000, height: 300, quality: 100, blur: 20)
  }
  allPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        year: date (format: "YY")
        month: date (format: "MMMM")
        day: date (format: "DD")
        path
        tags {
          id
          path
        }
        excerpt_image (width: 1000, height: 300, quality: 100, blur: 20)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager,
  },
};
</script>

---
title: Core concepts
excerpt: "Gridsome makes it easy for developers to build static generated websites & apps that are fast by default 🚀"
date: 2020-05-01
tags: ["gridsome", "vuejs"]
excerpt_image: "/uploads/logo-gridsome.png"
---

<div class="post mb">

## [#](#pages)Pages

[Pages](https://gridsome.org/docs/pages/) are created by adding **Vue Components** in `src/pages` folder. They use a file-based routing system. For example, `src/pages/About.vue` will be `mywebsite.com/about`. Pages are used for simple pages and for pages that list collections (Like a `/blog`)

[Learn more about Pages](https://gridsome.org/docs/pages/)

## [#](#collections)Collections

[Collections](https://gridsome.org/docs/collections/) are useful if you are going to have blog posts, tags, products etc. on your site. Collections can be sourced from any **Headless CMS, content APIs or Markdown files** by using [Source plugins](https://gridsome.org/plugins) or the [Data Store API](https://gridsome.org/docs/data-store-api/).

![Collections](https://gridsome.org/assets/static/node-pages.0eae6d2.8581c59dbb258143a7ffcebb617ec5dc.png)

<noscript>![Collections](https://gridsome.org/assets/static/node-pages.0eae6d2.8581c59dbb258143a7ffcebb617ec5dc.png)</noscript>

Collections are stored in a temporary [local GraphQL data layer](https://gridsome.org/docs/data-layer/) and can be [queried anywhere](https://gridsome.org/docs/querying-data/), [filtered](https://gridsome.org/docs/filtering-data/), [paginated](https://gridsome.org/docs/pagination/) or [have relations](https://gridsome.org/docs/taxonomies/).

[Learn more about Collections](https://gridsome.org/docs/collections/)

## [#](#templates)Templates

[Templates](https://gridsome.org/docs/templates/) are responsible for displaying nodes (single pages) of collections. Templates are usually located in `src/templates`. Gridsome tries to locate a file with the same name as the Collection if no component has been specified in templates config.

Here is an example:

    <!-- src/templates/Post.vue -->
    <template>
      <Layout>
      	<h1 v-html="$page.post.title" />
      </Layout>
    </template>

    <page-query>
    query ($id: ID!) {
      post(id: $id) {
        title
      }
    }
    </page-query>

[Learn more about Templates](https://gridsome.org/docs/templates/)

## [#](#layouts)Layouts

Layouts are **Vue Components** that are used inside Pages and Templates to wrap the content. A layout usually contains Header & Footer.

Layouts are usually used like this in Pages:

    <template>
      <Layout>
      	<h1>About us</h1>
      </Layout>
    </template>

    <script>
    import Layout from '~/layouts/Default.vue'

    export default {
      components: {
        Layout
      }
    }
    </script>

🙌 Layouts can also be made [available globally](https://gridsome.org/docs/layouts#make-a-layout-global), so you don't need to import them per page. Note that the default template created by the Gridsome CLI will use a global layout component.

[Learn more about Layouts](https://gridsome.org/docs/layouts/)

## [#](#images)Images

Gridsome has a built-in `<g-image>` component that outputs an optimized progressive image. It also resizes and crops in real-time when developing if **width** and **height** is changed. `<g-images>` creates a super small **blurred inline base64 image** and then uses IntersectionObserver to lazy load image when in view.

[Learn more about g-image](https://gridsome.org/docs/images/)

## [#](#linking)Linking

Gridsome has a built-in `<g-link>` component that uses IntersectionObserver to prefetch linked pages when the link is in view. This makes browsing around in a Gridsome site very fast because the clicked page is already downloaded.

[Learn more about g-link](https://gridsome.org/docs/linking/)

</div>

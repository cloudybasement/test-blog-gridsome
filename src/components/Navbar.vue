<template>
  <header class="w-full">
    <nav
      class="flex items-center justify-between flex-wrap bg-white px-5 py-3 container"
      v-bind:class="{ 'shadow-md lg:border-b-0 lg:shadow-none': open }"
    >
      <g-link to="/" class="flex flex-row items-center mr-8">
        <img
          class="mr-4 h-12 lg:h-12 focus:outline-none"
          src="./logo.jpg"
          v-bind:alt="$static.metadata.siteName"
        />
      </g-link>

      <div class="block lg:hidden">
        <button
          @click="open = !open"
          class="flex items-center px-3 py-2 text-gray-800 hover:text-gray-900 focus:outline-none"
        >
          <svg
            class="block h-6 w-6"
            v-bind:class="{ hidden: open, block: !open }"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            class="h-6 w-6"
            v-bind:class="{ hidden: !open, block: open }"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        v-bind:class="{ hidden: !open, block: open }"
      >
        <div
          class="flex flex-col text-center lg:flex-grow  lg:text-left lg:flex-row"
        >
          <g-link
            class="block lg:inline-block mr-4 py-2 lg:mt-0 lg:py-0 text-gray-800 text-3xl lg:text-left lg:text-lg"
            v-for="item in menu"
            v-bind:key="item.path"
            v-bind:to="item.path"
            >{{ item.label }}</g-link
          >

          <a
            target="_blank"
            href="https://github.com/fullstack-rocket/gridsome-starter-netlify-cms"
          >
            <unicon name="github" fill="black"></unicon>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
const menu = [
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/faq", label: "Faq" },
  { path: "/contact", label: "Contact" },
];

export default {
  data: () => ({
    menu,
    open: false,
  }),
};
</script>

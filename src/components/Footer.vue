<template>
  <footer class="bg-primary py-5 mt-10">
    <div>
      <div class="container">
        <div class="flex flex-wrap">
          <div class="flex flex-col flex-grow">
            <ul>
              <li class="py-2">
                <g-link class="text-white" to="/">
                  Home
                </g-link>
              </li>
              <li class="py-2">
                <g-link class="text-white" to="/about">
                  About
                </g-link>
              </li>
            </ul>
          </div>
          <div class="flex flex-col flex-grow">
            <ul>
              <li class="py-2">
                <g-link class="text-white" to="/blog">
                  Blog
                </g-link>
              </li>
              <li class="py-2">
                <g-link class="text-white" to="/contact">
                  Contact
                </g-link>
              </li>
            </ul>
          </div>

          <div
            class="flex flex-wrap m-auto items-center text-white text-center p-2"
          >
            <a
              title="facebook"
              href="https://www.facebook.com/"
              class="flex-1 bg-white m-2 p-2 pb-0 table rounded-full"
            >
              <unicon name="facebook-f" alt="Facebook" />
            </a>
            <a
              title="twitter"
              href="https://twitter.com"
              class="flex-1 bg-white m-2 pb-0 p-2 table rounded-full"
            >
              <unicon name="twitter" alt="Twitter" />
            </a>
            <a
              title="instagram"
              href="https://instagram.com"
              class="flex-1 bg-white m-2 p-2 pb-0 table rounded-full"
            >
              <unicon name="instagram" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col text-center text-white text-sm py-6">
      <span>@company</span>
      <span>Les Champs Elysées, Paris, France</span>
      <span>hello@example.com</span>
      <div>
        Proudly propulsed by
        <a
          target="_blank"
          href="https://www.fullstackrocket.com"
          class="text-white"
        >
          FullStack Rocket
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["slotClass"],
};
</script>

<template>
  <Layout slotClass="mx-auto md:max-w-lg">
    <h1 class="text-center">Contact us</h1>
    <form
      name="contact "
      class="mt-10 m-6"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>
      <div class="sender-info">
        <div class="mb-6">
          <label for="name" class="mb-2 block font-semibold">Your name</label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            name="name"
            v-model="formData.name"
          />
        </div>
        <div class="mb-6">
          <label for="email" class="mb-2 block font-semibold">Your email</label>
          <input
            type="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            name="email"
            v-model="formData.email"
          />
        </div>
      </div>

      <div class="mb-6">
        <label for="message" class="mb-2 block font-semibold">Message</label>
        <textarea
          name="message"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          v-model="formData.message"
        ></textarea>
      </div>

      <button
        class="w-full font-bold py-2 px-4 rounded bg-primary-500 text-white hover:bg-primary-700 md:w-auto"
        type="submit"
      >
        Send
      </button>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push("/success"))
        .catch((error) => alert(error));
    },
  },
};
</script>

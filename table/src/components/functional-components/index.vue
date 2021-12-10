<template>
  <div>
    <h1>
      Страница сделана с бесконечным скролом
    </h1>
    <oz-table-function
      :rows='rows'
      :totalPages="50"
      :currentPage="currentPage"
      :staticPaging="false"
      @getPage="infGetPage"
      @getUrl="controlUrl"
      class="container"
    >
      <oz-table-column-function
        prop='id'
        title='ID'
      />
      <oz-table-column-function
        prop='postId'
        title='Post ID'
      />

      <oz-table-column-function prop='email'>
        <template #title>
          Email
        </template>
        <template #body='{ row }'>
          <a href="`mailto:${row.email}`">{{ row.email }}</a>
        </template>
      </oz-table-column-function>

      <oz-table-column-function
        prop='name'
        title='Name'
      />
    </oz-table-function>
  </div>
</template>

<script>
import OzTableFunction from "./OzTableFunction.vue";
import OzTableColumnFunction from "./OzTableColumnFunction.vue";

export default {
  name: "FunctionalWrapper",

  components: {
    OzTableFunction,
    OzTableColumnFunction,
  },

  data() {
    return {
      rows: [],
      currentPage: 1,
      baseUrl: "https://jsonplaceholder.typicode.com/comments?_limit=10",
      currentUrl: "",
    };
  },

  created() {
    this.currentUrl = this.baseUrl;
    this.blockingPromise = this.getPage(1);
  },

  methods: {
    async getPage(number) {
      try {
        const res = await fetch(`${this.currentUrl}&_page=${number}`);

        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }

        this.rows = await res.json();
        this.currentPage = number;
      } catch (err) {
        console.error(err);
      }
    },

    async infGetPage() {
      try {
        this.blockingPromise && (await this.blockingPromise);

        const res = await fetch(
          `${this.currentUrl}&_page=${this.currentPage + 1}`
        );

        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }

        const newRows = await res.json();
        this.rows = [...this.rows, ...newRows];
        this.currentPage++;
      } catch (err) {
        console.error(err);
      }
    },

    controlUrl(url) {
      this.currentUrl = `${this.baseUrl}${url}`;
      this.currentPage = 1;
      this.getPage(1);
    },
  },
};
</script>

<style scoped>
</style>
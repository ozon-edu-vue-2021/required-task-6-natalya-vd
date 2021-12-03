<template>
  <oz-table
    :rows='rows'
    :totalPages="50"
    :currentPage="currentPage"
    :staticPaging="true"
    @getPage="getPage"
    @getUrl="controlUrl"
    class="container"
  >
    <oz-table-column
      prop='id'
      title='ID'
    />
    <oz-table-column
      prop='postId'
      title='Post ID'
    />

    <oz-table-column prop='email'>
      <template #title>
        Email
      </template>
      <template #body='{ row }'>
        <a href="`mailto:${row.email}`">{{ row.email }}</a>
      </template>
    </oz-table-column>

    <oz-table-column
      prop='name'
      title='Name'
    />
  </oz-table>
</template>

<script>
import OzTable from "../base-table/OzTable.vue";
import OzTableColumn from "../base-table/OzTableColumn.vue";

export default {
  name: "PaginationWrapper",

  components: {
    OzTable,
    OzTableColumn,
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
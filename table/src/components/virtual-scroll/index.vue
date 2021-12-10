<template>
  <div class="container">

    <Head
      :propTitleTable='propTitleTable'
      :sortData='sortData'
      :filterProp='filterProp'
      :filterText='filterText'
      :class="$style.headerCellContent"
    />
    <RecycleScroller
      :items="rows"
      :item-size="55"
      :buffer="2000"
      page-mode
      key-field="id"
      v-slot="{ item, index }"
    >
      <Item
        :item="item"
        :index="index"
        :class="$style.cell"
      />
    </RecycleScroller>
  </div>
</template>

<script>
import Item from "./Item";
import Head from "./Head";

export default {
  name: "VirtalScrollWrapper",

  components: {
    Item,
    Head,
  },

  data() {
    return {
      rows: [],
      propTitleTable: {
        id: "ID",
        postId: "Post ID",
        email: "Email",
        name: "Name",
      },

      sortData: [],

      filterProp: "",

      filterText: "",
    };
  },

  async created() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);

      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }

      this.rows = await res.json();
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style module>
.headerCellContent,
.cell {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 3fr;
}
</style>
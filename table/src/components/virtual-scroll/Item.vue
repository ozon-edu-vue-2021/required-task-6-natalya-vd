<template>
  <div :class='getStyleRow'>
    <div :class="$style.cell">{{item.id}}</div>
    <div :class="$style.cell">{{item.postId}}</div>
    <div :class="$style.cell">{{item.email}}</div>
    <div :class="$style.cell">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },

    index: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    getStyleRow() {
      const style = [
        this.index % 2 === 0
          ? `${this.$style.cellGrey}`
          : `${this.$style.cellGreen}`,
      ];
      return style;
    },
  },
};
</script>

<style module>
.cell {
  text-align: left;
  padding: 1rem;
}

.cellGreen {
  background: rgba(70, 163, 88, 0.06);
}

.cellGrey {
  background: #fbfbfb;
}
</style>
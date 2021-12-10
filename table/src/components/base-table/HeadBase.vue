<script>
import FilterDropdown from "./FilterDropdown.vue";

export default {
  name: "HeadBase",

  props: {
    columnsOptions: {
      type: Array,
      default: () => [],
    },
    sortData: {
      type: Array,
      default: () => [],
    },
    filterProp: {
      type: String,
      default: "",
    },
    filterText: {
      type: String,
      default: "",
    },
  },

  render() {
    const { $style, filterProp, filterText, $listeners } = this;

    const {
      toggleSort,
      openFilterTooltip,
      closeFilterTooltip,
      setFilterText,
      runFilter,
      cleareFilterItem,
    } = $listeners;

    return (
      <thead>
        {this.columnsOptions.map((column) => {
          const renderedTitle = column.scopedSlots.title
            ? column.scopedSlots.title()
            : column.title;
          let sortIcon = "sort";

          const index = this.sortData.findIndex((item) => column.prop in item);
          if (index > -1) {
            sortIcon =
              this.sortData[index][column.prop] === "desc"
                ? "sort-amount-down"
                : "sort-amount-up";
          }

          return (
            <th key={column.prop} class={$style.headerCell}>
              <div class={$style.headerCellContent}>
                <span>{renderedTitle}</span>
                <font-awesome-icon
                  class={$style.sortIcon}
                  icon={sortIcon}
                  on={{ click: () => toggleSort(column.prop) }}
                />

                <FilterDropdown
                  columnProp={column.prop}
                  shown={column.prop === filterProp}
                  filterText={filterText}
                  on={{
                    openFilterTooltip: () => openFilterTooltip(column.prop),
                    closeFilterTooltip: () => closeFilterTooltip(),
                    setFilterText: (e) => setFilterText(e, column.prop),
                    runFilter: () => runFilter(),
                    cleareFilterItem: () => cleareFilterItem(column.prop),
                  }}
                />
              </div>
            </th>
          );
        })}
      </thead>
    );
  },
};
</script>

<style module>
.headerCell {
  padding: 1rem;
  background-color: #46a358;
  color: #fff;
  text-align: center;
}

.headerCellContent {
  display: flex;
  align-items: center;
}
.sortIcon {
  margin-left: 8px;
  margin-right: 24px;
}
.sortIcon:hover {
  cursor: pointer;
}
</style>
<script>
export default {
  name: "FilterDropdown",

  props: {
    columnProp: {
      type: String,
      default: "",
    },

    shown: {
      type: Boolean,
      default: false,
    },

    filterText: {
      type: String,
      default: "",
    },
  },

  render() {
    const { $style, shown, filterText, $listeners } = this;
    const {
      openFilterTooltip,
      setFilterText,
      closeFilterTooltip,
      runFilter,
      cleareFilterItem,
    } = $listeners;

    return (
      <v-dropdown
        class={$style.filterIcon}
        triggers={[]}
        autoHide={false}
        shown={shown}
      >
        <font-awesome-icon icon="filter" on={{ click: openFilterTooltip }} />
        <div slot="popper">
          <input
            class={$style.input}
            type={`${
              this.columnProp === "id" || this.columnProp === "postId"
                ? "number"
                : "text"
            }`}
            domProps={{ value: filterText }}
            on={{ input: setFilterText }}
          />
          <div class={$style.buttonsGroup}>
            <button
              class={$style.button}
              type="button"
              on={{ click: cleareFilterItem }}
            >
              Сбросить
            </button>
            <button
              class={$style.button}
              type="button"
              on={{ click: runFilter }}
            >
              Искать
            </button>
          </div>
          <font-awesome-icon
            icon="times"
            class={$style.closeIcon}
            on={{ click: closeFilterTooltip }}
          />
        </div>
      </v-dropdown>
    );
  },
};
</script>

<style module>
.filterIcon {
  margin-left: auto;
  margin-right: 8px;
}

.filterIcon:hover {
  cursor: pointer;
}

.input {
  width: 100%;
  margin: 10px 0 20px;
}

.buttonsGroup {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.button {
  padding: 10px 32px;
  border-radius: 6px;
  border: 0;
  outline: 0;
  background: #46a358;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}

.button:focus,
.button:hover {
  opacity: 0.85;
}

.button:active {
  transform: scale(0.75);
}

.closeIcon {
  position: absolute;
  top: 6px;
  right: 6px;
}

.closeIcon:hover {
  cursor: pointer;
}
</style>
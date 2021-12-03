<template>
  <div class="container">
    <h1>
      Сравнение различных вариантов
    </h1>
    <div class="text-wrapper text">
      <p>
        Сравнивала 4 варианта: таблица с бесконечным скроллом, таблица с бесконечным скроллом на функциональных компонентах, таблица со статичной пагинацией, таблица с виртуальным скроллом.
      </p>
      <p>
        Сравнивать таблицу с виртуальным скроллом с остальными таблицами, наверно не совсем правильно (т.к. в ней не реализованы фильтры). Но все же добавлю картинки, которые намеряла.
      </p>
    </div>
    <div class="text-wrapper text">
      <p>Выводы:</p>
      <p>На функциональных компонентах отрисовывается чуть быстрее чем на обычных (примерно в 4 раза).</p>
      <p>При первой загрузке таблица со статичной пагинацией выглядит по измеренным данных лучше, но не факт, что это будет и при отрисовке последующих страниц.</p>
      <p>CLF у виртуального скролла, лучше чем у остальных.</p>
    </div>
    <div class="text-wrapper text">
      <p>Почему-то не померял компоненты, которые были написаны на функциональных компонентах: FilterDropdownFunction, HeadFunction, RowsFunction.</p>
      <p>VDropdown, для которого родительским является функциональный компонент (FilterDropdownFunction) примерно в 4 раза быстрее отрисовался на функциональных компонентах, чем на обычных (FilterDropdown)</p>
    </div>
    <div class="content">
      <div class="wrapper">
        <div class="item">
          <p>
            Таблица с бесконечным скроллом, измерения Vue девтулз
          </p>
          <img
            class="image"
            src="../assets/images/base/base-vue.jpg"
            alt="base"
          >
        </div>
        <div class="item">
          <p>
            Таблица с бесконечным скроллом на функциональных компонентах, измерения Vue девтулз
          </p>
          <img
            class="image"
            src="../assets/images/function/function-vue.jpg"
            alt="function"
          >
        </div>
      </div>
      <p class="text">
        Неплохо выглядит шаблон со статичной пагинацией. VDropdown отрисовался так же как и на функциональных компонентах, шаблон, в котором собирается таблица (OzTable на обычных компонентах OzTableFunction на функциональных компонентах) со статичной пагинацией отрисовался в 3 раза быстрее чем на функциональных компонентах и в 3.4 раза быстрее чем с бесконечным скроллом не на функциональных компонентах
      </p>
      <div class="wrapper">
        <div class="item">
          <p>
            Таблица со статичной пагинацией, измерения Vue девтулз
          </p>
          <img
            class="image"
            src="../assets/images/static/static-vue.jpg"
            alt="static"
          >
        </div>
        <div class="item">
          <p>
            Таблица с виртуальным скроллом, измерения Vue девтулз
          </p>
          <img
            class="image"
            src="../assets/images/virtual/virtual-vue.jpg"
            alt="virtual"
          >
        </div>
      </div>
      <p class="text">
        Особой разницы в данных между таблицей с бесконечным скроллом не на функциональных компонентах и таблицей с бесконечным скроллом на функциональных компонентах я не увидела. Rendering компонентов не на функциональных компонентах 77ms, на функциональных 75ms
      </p>
      <div class="wrapper">
        <div class="item">
          <p>
            Таблица с бесконечным скроллом, измерения Devtoolse вкладка Perfomance
          </p>
          <img
            class="image"
            src="../assets/images/base/base-perfomance.jpg"
            alt="base"
          >
        </div>
        <div class="item">
          <p>
            Таблица с бесконечным скроллом на функциональных компонентах, измерения Devtoolse вкладка Perfomance
          </p>
          <img
            class="image"
            src="../assets/images/function/function-perfomance.jpg"
            alt="function"
          >
        </div>
      </div>
      <p class="text">
        Здесь тоже неплохо выглядит таблица со статичной пагинацией. Rendering со статичной пагинацией 5ms, с виртуальным скроллом 15ms
      </p>
      <div class="wrapper">
        <div class="item">
          <p>
            Таблица со статичной пагинацией, измерения Devtoolse вкладка Perfomance
          </p>
          <img
            class="image"
            src="../assets/images/static/static-perfomance.jpg"
            alt="static"
          >
        </div>
        <div class="item">
          <p>
            Таблица с виртуальным скроллом, измерения Devtoolse вкладка Perfomance
          </p>
          <img
            class="image"
            src="../assets/images/virtual/virtual-perfomance.jpg"
            alt="virtual"
          >
        </div>
      </div>
      <p class="text">
        Как-то все плохо...
      </p>
      <div class="wrapper">
        <div class="item">
          <p>
            Таблица с бесконечным скроллом, измерения Devtoolse вкладка Lighthouse
          </p>
          <img
            class="image"
            src="../assets/images/base/base-lighthouse.jpg"
            alt="base"
          >
        </div>
        <div class="item">
          <p>
            Таблица с бесконечным скроллом на функциональных компонентах, измерения Devtoolse вкладка Lighthouse
          </p>
          <img
            class="image"
            src="../assets/images/function/function-lighthouse.jpg"
            alt="function"
          >
        </div>
      </div>
      <p class="text">
        Здесь тоже не очень. Но покрайней мере CLS выглядит очень хорошо, особенно с виртуальным скроллом. Т.е. в этих 2-х случаях, при загрузке страницы ничего не скачет.
      </p>
      <div class="wrapper">
        <div class="item">
          <p>
            Таблица со статичной пагинацией, измерения Devtoolse вкладка Lighthouse
          </p>
          <img
            class="image"
            src="../assets/images/static/static-lighthouse.jpg"
            alt="static"
          >
        </div>
        <div class="item">
          <p>
            Таблица с виртуальным скроллом, измерения Devtoolse вкладка Lighthouse
          </p>
          <img
            class="image"
            src="../assets/images/virtual/virtual-lighthouse.jpg"
            alt="virtual"
          >
        </div>
      </div>
      <p class="text">
        Возможно такие плохие показатели получились из-за того, что я меряла их на dev сборке, а не на сборке для продакшена (что-то не поняла возможно ли локально запустить и померять сборку для продакшена... Получилось только сбилдить пакет для прода)
      </p>
      <img
        class="image image-margin"
        src="../assets/images/lighthouse.jpg"
        alt="lighthouse"
      >
      <div class="group-images">
        <img
          class="image image-border"
          src="../assets/images/base/base-lighthouse-task.jpg"
          alt="base"
        >
        <img
          class="image image-border"
          src="../assets/images/function/function-lighthouse-task.jpg"
          alt="function"
        >
        <img
          class="image image-border"
          src="../assets/images/static/static-lighthouse-task.jpg"
          alt="static"
        >
        <img
          class="image image-border"
          src="../assets/images/virtual/virtual-lighthouse-task.jpg"
          alt="virtual"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comparison",
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0 auto 20px;
}

.text-wrapper {
  margin: 0 0 20px;
}

.text {
  padding: 20px;
  border: 1px solid #46a358;
  border-radius: 6px;
  background-color: rgba(70, 163, 88, 0.06);
}

.item {
  padding: 10px;
  border: 1px solid #46a358;
  border-radius: 6px;
}

.image {
  width: 100%;
  height: auto;
}

.image-margin {
  margin: 0 0 20px;
}

.image-border {
  border: 1px solid #46a358;
}

.group-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
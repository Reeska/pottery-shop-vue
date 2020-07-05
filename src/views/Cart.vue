<template>
  <ui-cart :items.prop="items" :total="total" :totalWithPromo.prop="totalWithPromo"/>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {books} from "@/constants/books";

  @Component
  export default class Cart extends Vue {
    items = books.slice(0, 2)
    total = 65
    totalWithPromo = 50
  }
</script>

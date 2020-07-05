<template>
  <ui-book-list search="" :books.prop="books" @addToCart="addToCart"/>
</template>

<script>
  import {books} from '@/constants/books'

  export default {
    name: 'Home',
    data() {
      return {
        books,
      }
    },
    methods: {
      addToCart(event) {
        alert(`${event.detail} added to cart !`)
      }
    }
  }
</script>

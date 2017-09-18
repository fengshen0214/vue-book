<template>
  <div>
    <div class="col-md-3" v-for="book in books">
      <div class="panel panel-warning">
        <div class="panel-heading">
          书名：{{book.bookName}}
        </div>
        <div class="panel-body text-center">
          <img :src="book.bookImg" alt="">
        </div>
        <div class="panel-footer">
          价格：{{book.bookPrice | currency('￥')}}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  img{
    width:160px;
  }
</style>
<script>
  export default {
    filters:{
        currency(input,param1){
          return param1 + input;
        }
    },
    data(){
      return {
        books:[
          {bookName:'小说',bookPrice:'30','bookImg':'http://www.yinyuetai.com/mv/get-logo',id:'1'},
          {bookName:'小说',bookPrice:'30','bookImg':'http://www.yinyuetai.com/mv/get-logo',id:'2'}
        ]
      }
    }
  }
</script>

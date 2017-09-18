<template>
  <div>
    <form action="">
      <div class="form-group">
        <label for="bookName" class="control-label">书名</label>
        <input type="text" id="bookName" class="form-control" placeholder="请输入书名" autocomplete="off" v-model="book.bookName">
      </div>
      <div class="form-group">
        <label for="bookImg" class="control-label">书的封面</label>
        <input type="text" id="bookImg" class="form-control" placeholder="请输入封面" autocomplete="off" v-model="book.bookImg">
      </div>
      <div class="form-group">
        <label for="bookPrice" class="control-label">书的价格</label>
        <input type="text" id="bookPrice" class="form-control" placeholder="请输入价格" autocomplete="off" v-model="book.bookPrice">
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="add">添加图书</button>
      </div>
    </form>
  </div>
</template>
<style>

</style>
<script>
  export default {
    data(){
      return {
        book:{
          bookName:'',
          bookPrice:'',
          bookImg:''
        }
      }
    },
    component:{},
    methods:{
      add(){
        this.$http.post('/book',this.book).then(()=>{
          this.$router.push('/list');
        })

      }
    },
  }
</script>

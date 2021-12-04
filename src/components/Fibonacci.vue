<template>
  <div class="hello">

    <input type="text" v-model="counter">
    <button @click="countFibonacciHandler">
      Policz iteracyjnie
    </button>

    <button @click="countFibonacciRecursiveHandler">
      Policz rekurencyjnie
    </button>

    <span v-show="result !== null">Wynik = {{result}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      counter: null,
      result: null,
    }
  },

  methods: {
    countFibonacci(counter){

      if(parseInt(counter) === 0){
        return 0;
      }else if(parseInt(counter) === 1){
        return 1;
      }else{

        let firstElem = 1;
        let secondElem = 1;
        let result;

        for(let i = 2; i < counter; i++){
          result = firstElem + secondElem;
          firstElem = secondElem;
          secondElem = result;
        }

        return result;
      }
    },

    countFibonacciHandler(){
      this.result = this.countFibonacci(this.counter);
    },

    countFibonacciRecursiveHandler(){
      this.result = this.countFibonacciRecursive(this.result, this.counter);
    },

    countFibonacciRecursive(result, counter){
      if(parseInt(counter) === 0){
        return 0;
      }else if (parseInt(counter) === 1) {
        return 1;
      } else{
        return this.countFibonacciRecursive(result, counter - 2)
          + this.countFibonacciRecursive(result, counter - 1);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

import Vue from 'vue'
import Fibonacci from '../../../src/components/Fibonacci'
import {mount, shallowMount} from "@vue/test-utils";

describe('Fibonacci.vue', () => {

  const wrapper = shallowMount(Fibonacci, {
    data() {
      return {
        counter: null,
        result: null,
      }
    }
  });

  it('fib 5', () => {
    expect(wrapper.vm.countFibonacci(5)).toEqual(5);
  })

  it('fib 10', () => {
    expect(wrapper.vm.countFibonacci(10)).toEqual(55);
  })

  it('fib 19', () => {
    expect(wrapper.vm.countFibonacci(19)).toEqual(4181);
  })
})

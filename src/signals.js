import { signal, effect, computed } from '@preact/signals-react';

export const count = signal(0);

export const doubleCount = computed(() => { if(count.value>5) return count.value *2});

export const increment = () => count.value++;

// export const promiseFunc = async (num) =>
//   new Promise((res) => {
//     setTimeout(() => res(num), 1000);
//   });

effect(() => {
  console.log(count.value)
});

effect(() => {
    if(count.value>5)
    console.log(count.value)
  });

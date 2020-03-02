import Vue from 'vue';

/** Como o Nuxt não possui um bus de evento global,
 *  cria um injetor em todas as instâncias.
 */
export default (ctx, inject) => {
  const bus = new Vue;
  inject('bus', bus);
};

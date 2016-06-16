import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(item) {
    this.get('products').pushObject(item);
    console.log(this.products.length);
    console.log(this.products);
  }
});

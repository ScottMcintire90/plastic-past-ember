import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(item) {
    this.get('products').pushObject(item);
  }
});

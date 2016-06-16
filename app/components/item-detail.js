import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.set('item.cart', true);
      this.item.save();
    }
  }
});

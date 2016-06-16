import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('item', {
      orderBy: 'cart',
      equalTo: true
    });
  },

  actions: {
  remove(item) {
    item.set('cart', false);
    item.save();
    this.transitionTo('cart');
    }
  }
});

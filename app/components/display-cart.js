import Ember from 'ember';

export default Ember.Component.extend({
  priceSum: Ember.computed('items.[]', function() {
    var prices = 0;
    var items = this.get('items');
    items.forEach(function(item) {
      prices += parseInt(item.get('price'));
    });
    return prices;
  }),
  actions: {
    remove(item) {
      this.sendAction('remove', item);
    }
  }
});

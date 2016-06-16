import Ember from 'ember';

export default Ember.Component.extend({
  prices: 0,
  priceSum: Ember.computed('item.price', function() {
    parseInt(this.get('item.price')) += prices;
    console.log(prices);
    return prices;
  })
});

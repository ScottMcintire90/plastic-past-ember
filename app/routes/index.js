import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category')
    });
  }

});

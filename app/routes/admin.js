import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category')
    });
  },
    actions: {
    save(params) {
      console.log(params);
      console.log(params.Object.category.id);
      var newItem = this.store.createRecord('item', params);
      var newCategory = params.category.get(id);
      category.get('item').addObject(newItem);
      newItem.save().then(function() {
        return newCategory.save();
      });
      this.transitionTo('admin');
    }
  }
});

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
      console.log(params.category);
      var newItem = this.store.createRecord('item', params);
      var category = params.category;
      category.get('items').addObject(newItem);
      newItem.save().then(function() {
        return category.save();
      });
      this.transitionTo('admin');
    },
    delete(item) {
      item.destroyRecord();
      this.transitionTo('admin');
    },
    update(item, params) {
      Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         item.set(key,params[key]);
       }
     });
     item.save();
     this.transitionTo('admin');
    }
  }
});

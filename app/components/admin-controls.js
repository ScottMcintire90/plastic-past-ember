import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        name: this.get('name'),
        category: this.get('category-select'),
        year: this.get('year'),
        description: this.get('description'),
        rating: this.get('rating'),
        price: this.get('price'),
        image: this.get('image'),
        condition: this.get('condition'),
      };
        this.set('updateItemForm', false);
        this.set('name', "");
        this.set('year', "");
        this.set('description', "");
        this.set('price', "");
        this.set('image', "");
      this.sendAction('update', item, params);
    },
    delete(item) {
      if (confirm('Are you sure you want to delete this awesome toy?')) {
        this.sendAction('delete', item);
      }
    }
  }
});

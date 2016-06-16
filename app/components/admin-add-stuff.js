import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        category: this.get('category-select'),
        year: this.get('year'),
        description: this.get('description'),
        rating: this.get('rating'),
        price: this.get('price'),
        image: this.get('image'),
        condition: this.get('condition'),
        cart: false
      };
        this.set('name', "");
        this.set('year', "");
        this.set('description', "");
        this.set('price', "");
        this.set('image', "");
      this.sendAction('save', params);
    }
  }
});

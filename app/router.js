import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('category', {path: '/category/:category_id'});
  this.route('item', {path: '/item/:item_id'});
  this.route('cart');
});

export default Router;

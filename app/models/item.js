import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  category: belongsTo('category', {async:true}),
  year: attr(),
  description: attr(),
  rating: attr(),
  price: attr(),
  image: attr(),
  condition: attr(),
});

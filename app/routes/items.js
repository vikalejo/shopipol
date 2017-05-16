import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'Recycling',
      title: 'Glass CD sky',
      owner: 'Maria A',
      city: 'Valladolid',
      type: 'Paint',
      price: 8,
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Microwaved-CD-2.jpg',
      description: 'Old CD painted by me.'
    }, {
      id: 'Painting',
      title: 'Moonlight',
      owner: 'Rosi M',
      city: 'Valladolid',
      type: 'Paint',
      price: 100,
      image: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FarMu4f8rnBk%2Fmaxresdefault.jpg&f=1',
      description: 'My monlight version'

    }];
  }
});

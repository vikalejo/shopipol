export default function() {
  this.namespace = '/api';

  this.get('/items', function(){
    return {
      data:[{
        type: 'items',
        id: 'Recycling',
        attributes: {
          title: 'Glass CD sky',
          owner: 'Maria A',
          city: 'Valladolid',
          type: 'Paint',
          price: 8,
          image: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Microwaved-CD-2.jpg',
          description: 'Old CD painted by me.'
          }
        }, {
        type: 'items',
        id: 'Painting',
        attributes: {
          title: 'Moonlight',
          owner: 'Rosi M',
          city: 'Valladolid',
          type: 'Paint',
          price: 100,
          image: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FarMu4f8rnBk%2Fmaxresdefault.jpg&f=1',
          description: 'My monlight version'
        }
      }]
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}

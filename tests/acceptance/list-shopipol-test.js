import { test } from 'qunit';
import moduleForAcceptance from 'shopipol/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-shopipol');

test('visiting /list-items', function(assert) {
  visit('/');

  moduleForAcceptance('Acceptance | list-rentals');

  test('should show items as the home page', function (assert) {
  });

  test('should link to information about the artist.', function (assert) {
  });

  test('should link to contact information.', function (assert) {
  });

  test('should list available items.', function (assert) {
  });

  test('should filter the list of items by artist.', function (assert) {
  });

  test('should show details for a selected item', function (assert) {
  });

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

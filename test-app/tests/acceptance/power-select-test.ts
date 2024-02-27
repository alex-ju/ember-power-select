import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'test-app/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | power select', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /power-select', async function (assert) {
    await visit('/power-select');

    assert.strictEqual(currentURL(), '/power-select');
  });

  test('power-select page passes automated a11y checks', async function (assert) {
    await visit('/power-select');
    await a11yAudit();

    assert.ok(true, 'a11y automation audit passed');
  });
});

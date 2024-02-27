import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'test-app/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | helpers testing single power select', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /helpers-testing-single-power-select', async function (assert) {
    await visit('/helpers-testing-single-power-select');

    assert.strictEqual(currentURL(), '/helpers-testing-single-power-select');
  });
  test('helpers-testing-single-power-select page passes automated a11y checks', async function (assert) {
    await visit('/helpers-testing-single-power-select');
    await a11yAudit();

    assert.ok(true, 'a11y automation audit passed');
  });
});

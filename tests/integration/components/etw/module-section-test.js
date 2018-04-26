import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('etw/module-section', 'Integration | Component | etw/module section', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{etw/module-section}}`);
  assert.equal(this.$().text().trim(), 'Syntax');
});

import Component from '@ember/component';
import layout from '../../templates/components/etw/module-section';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  shouldDisplayEvenly: computed('moduleStyles', function() {
    if (this.moduleStyles && this.moduleStyles.length) {
      switch (this.moduleStyles[0].module) {
        case 'colors': return true;
        case 'font-weights': return true;
        case 'height': return true;
        case 'margin': return true;
        case 'max-width': return true;
        case 'min-height': return true;
        case 'negative-margin': return true;
        case 'padding': return true;
        case 'width': return true;
        default: return false;
      }
    }
  })

});

import Component from '@ember/component';
import { computed } from '@ember/object';
import { later } from '@ember/runloop';
import classesForModuleStyle from 'ember-cli-tailwind/utils/classes-for-module-style';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Component.extend({
  tagName: '',
  etwTailwindStyleguide: service(),
  moduleStyle: reads('etwTailwindStyleguide.selectedModuleStyle'),

  moduleName: computed('moduleStyle', function() {
    let moduleStyle = this.get('moduleStyle');
    switch (moduleStyle.module) {
      case "border-radius": return "Border radius";
      case "border-widths": return "Border width";
      case "colors": return "Color";
      case "font-weights": return "Font weight";
      case "height": return "Height";
      case "text-sizes": return "Text size";
      case "margin": return "Margin";
      case "max-height": return "Max height";
      case "max-width": return "Max width";
      case "min-height": return "Min height";
      case "min-width": return "Min width";
      case "negative-margin": return "Negative margin";
      case "opacity": return "Opacity";
      case "padding": return "Padding";
      case "shadows": return "Shadow";
      case "svg-fill": return "SVG fill";
      case "svg-stroke": return "SVG stroke";
      case "width": return "Width";
      case "z-index": return "Z index";
      default: return "";
    }
  }),

  activeResponsiveClass: 'all',
  activeState: 'none',

  detailStyles: computed('moduleStyle', 'activeResponsiveClass', 'activeState', function() {
    let moduleStyle = this.get('moduleStyle');
    let activeResponsiveClass = this.get('activeResponsiveClass');
    let responsivePrefix = activeResponsiveClass === 'all' ? '' : `${activeResponsiveClass}:`;
    let activeState = this.get('activeState');
    let statePrefix = activeState === 'none' ? '' : `${activeState}:`;

    return classesForModuleStyle(moduleStyle).map(cssClass => {
      return `${responsivePrefix}${statePrefix}${cssClass}`;
    });
  }),

  actions: {
    highlightStyle(style) {
      this.set('highlightedStyle', style);
      later(() => {
        this.set('highlightedStyle', null);
      }, 1500);
    }
  }

});

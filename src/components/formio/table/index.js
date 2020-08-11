import BaseComponent from '../base';
import { toHtml } from './plugins';
import _ from 'lodash';

class TableComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);

    if (this.rows && _.isArray(this.rows)) {
      _.forEach(this.rows, (row) => {

        _.forEach(row, (c) => {
          let components = [];

          _.forEach(c.components, (comp) => {
            console.log('table - el', comp);
            components.push(this.createComponent(comp, data));
          });
          c.components = components;
        });
        // column.components = components;
      });
    }
    console.log('table', this, this.rows);
  }

  toHtml (element) {
    return toHtml(element, this);
  }
}

export default TableComponent;

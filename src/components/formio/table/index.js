import BaseComponent from '../base';

class TableComponent extends BaseComponent {
  constructor (component, data, options) {
    console.log('table', component, data, options);
    super(component, data, options);
  }
}

export default TableComponent;

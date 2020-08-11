import BaseComponent from '../base';
import { toHtml } from './plugins';

class HtmlComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  toHtml (element) {
    return toHtml(element, this);
  }
}

export default HtmlComponent;

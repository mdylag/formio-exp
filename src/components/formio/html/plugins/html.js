import FormioExportUtils from '../../../../utils';
import _ from 'lodash';

export default (element, component) => {
  if (component) {
    let valueElement = FormioExportUtils.createElement(component.tag, {
      innerHTML: component.content,
      class: 'component-value card-body'
    });

    if (component.attrs) {
      _.forEach(component.attrs, (a) => {

        if (a.attr === 'style') {
          console.log('htmlel11', valueElement, component, component.content);
          valueElement.setAttribute('style', a.value);
        }
      });
    }
    console.log('htmlel', valueElement, component, component.content, component.attrs);
    return valueElement;
  }
  return null;
};

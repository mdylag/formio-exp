import FormioExportUtils from '../../../../utils';
import _ from 'lodash';

export default (element, component) => {
  if (component) {
    let componentElement = FormioExportUtils.createElement('div', {
      class: `formio-component ${component.type}-component card after`,
      id: Math.random().toString(36).substring(7)
    });
    let valueElement = FormioExportUtils.createElement('div', {
      innerHTML: component.html,
      class: 'component-value card-body'
    });

    componentElement.appendChild(valueElement);
    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }

    return componentElement;
  }
  return null;
};

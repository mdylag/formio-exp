import FormioExportUtils from '../../../../utils';

export default (element, component) => {
  if (component) {
    let valueElement = FormioExportUtils.createElement('div', {
      innerHTML: component.html,
      class: 'component-value card-body'
    });

    return valueElement;
  }
  return null;
};

import _ from 'lodash';
import FormioExportUtils from '../../../../utils';

export default (element, component) => {

  if (component) {
    let componentElement = FormioExportUtils.createElement('div', {
      class: `formio-component ${component.type}-component card after`,
      style: 'border-collapse: collapse;',
      id: Math.random().toString(36).substring(7)
    });

    let tableComponent = FormioExportUtils.createElement('table', {
      class: 'table',
      style: 'border-collapse: collapse;',
      id: Math.random().toString(36).substring(7)
    });

    tableComponent.className += component._options.bordered ? ' table-bordered' : '';

    console.log('ftable', component.rows);

    _.forEach(component.rows, (row) => {

      let rowComponent = FormioExportUtils.createElement('tr', {
        style: 'border-collapse: collapse;'
      });

      console.log('frow', row);

      _.forEach(row, (comp) => {

        let columnComponent = FormioExportUtils.createElement('td', {
          class: 'cellBorder'
        });

        _.forEach(comp.components, (c) => {

          let chtml = c.toHtml(columnComponent);

          columnComponent.appendChild(chtml);
          console.log('fcall', c, columnComponent);
        });
        rowComponent.appendChild(columnComponent);

      });
      tableComponent.appendChild(rowComponent);
    });
    componentElement.append(tableComponent);
    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }
    console.log('formioexp4', element, componentElement);

    // componentElement.className += component._options.ignoreLayout ? ' no-layout' : '';
    return componentElement;

  }
  return null;
};

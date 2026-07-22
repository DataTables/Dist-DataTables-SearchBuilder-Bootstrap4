/*! SearchBuilder Bootstrap 4 styling 2.0.0 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

import DataTable from 'datatables.net-bs4';
import SearchBuilder from 'datatables.net-searchbuilder';

Object.assign(DataTable.SearchBuilder.classes, {
    clearAll: 'btn btn-light dtsb-clearAll'
});
Object.assign(DataTable.Group.classes, {
    add: 'btn btn-light dtsb-add',
    clearGroup: 'btn btn-light dtsb-clearGroup',
    logic: 'btn btn-light dtsb-logic',
    search: 'btn btn-light dtsb-search'
});
Object.assign(DataTable.Criteria.classes, {
    condition: 'form-control dtsb-condition',
    data: 'form-control dtsb-data',
    delete: 'btn btn-light dtsb-delete',
    left: 'btn btn-light dtsb-left',
    right: 'btn btn-light dtsb-right',
    value: 'form-control dtsb-value'
});


export default DataTable;


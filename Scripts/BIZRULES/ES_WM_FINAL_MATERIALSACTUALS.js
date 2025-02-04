/*
Subscript Name: ES_WM_FINAL_MATERIALSACTUALS.js
Converted from Std Choice: ES_WM_FINAL_MATERIALSACTUALS
Called From Scripts:
ES_WM_FINAL_ASIUA
 */

removeASITable('MATERIAL ACTUALS');
if (typeof(MATERIALACTUALS) == 'object') {
    removeASITable('MATERIAL ACTUALS');
    for (x in MATERIALACTUALS)
        include('ES_WM_FINAL_MATERIALSACTUALS_LOOP'); /* replaced branch(ES_WM_FINAL_MATERIALSACTUALS_LOOP) */
    addASITable('MATERIAL ACTUALS', MATERIALACTUALS);
}

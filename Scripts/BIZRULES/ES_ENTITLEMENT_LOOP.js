/*
Subscript Name: ES_ENTITLEMENT_LOOP.js
Converted from Std Choice: ES_ENTITLEMENT_LOOP
Called From Scripts:
ApplicationSpecificInfoUpdateAfter
ApplicationSubmitAfter
 */

entShortNotes = '';
if (typeof(PROJECT) == 'object') {
    for (eachrow in PROJECT) {
        feeRow = PROJECT[eachrow];
        if (eachrow == 0) {
            entShortNotes = feeRow['Project Type'] + '';
        }

        if (eachrow > 0) {
            entShortNotes = entShortNotes + ',' + feeRow['Project Type'];
        }
    }
}

comment('This is the length of the variable = ' + entShortNotes.length);
if (entShortNotes.length <= 120) {
    updateShortNotes(entShortNotes);
}

if (entShortNotes.length > 120) {
    updateShortNotes(entShortNotes.substring(0, 119));
}

if (entShortNotes.length > 0) {
    include('ES_PLN_DEFAULT_FEES'); /* replaced branch(ES_PLN_DEFAULT_FEES) */
}

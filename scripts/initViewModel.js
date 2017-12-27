/**
 * init ViewModel object
 *
 * @todo load cache
 * @todo paths aliases for sources
 *
 * @param vm - ViewModel object
 * @param elemId - dom element id
 * @param templateCollectionName - name of template collection
 */
function initViewModel(vm, elemId, templateCollectionName) {
    vm.templateCollectionName = templateCollectionName || vm.templateCollectionName || 'common';
    $.get('templates/' + vm.templateCollectionName + '.html', function (data) {
        $('body').append(data);
        ko.applyBindings(vm, document.getElementById(elemId) || null);
    });
}

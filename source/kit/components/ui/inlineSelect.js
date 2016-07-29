(function(undefined) {
    'use strict';

    angular
        .module('bmg.components.ui')
        .directive('inlineSelect', inlineSelect);

    function inlineSelect($timeout, $templateCache, $compile) {
        return {
            replace: true,
            scope: {
                ngModel: '=',
                placeholder: '@',
                oncommit: '&',
                items: '='
            },
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel, transclude) {
                // like ngTransclude, but manual …
                var children = elem.children();
                var template = angular.element($templateCache.get('bmg/template/inline/select.html'));

                template.find('.ui-select-choices').append(children);

                elem.html('');
                elem.append(template);

                var uiSelect = elem.find('.inline-select');
                $compile(uiSelect)(scope);

                $timeout(function() {
                    var dropdownHint = angular.element('<span class="dropdown-hint fa fa-angle-down"></span>');
                    var inputWrapper = $(elem).find('div.selectize-input');

                    inputWrapper.append(dropdownHint);

                    scope.$on('uiSelect:open', function(e, opened) {
                        if (opened) {
                            dropdownHint.hide();
                        } else {
                            dropdownHint.show();
                        }
                    });
                });
            }
        };
    }
})();

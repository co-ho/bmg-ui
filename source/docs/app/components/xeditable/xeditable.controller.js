(function(angular) {
    'use strict';

    angular.module('bmg-ui.docs')
        .controller('XEditableController', XEditableController);

    XEditableController.$inject = ['$filter'];

    function XEditableController($filter) {

        this.site = {
            value: 2
        };
        this.data = {
            'sites' : [
                {value: 1, text: 'BMG Rights Management UK'},
                {value: 2, text: 'BMG Rights Management GE'},
                {value: 3, text: 'BMG Rights Management US'}
            ],
            'barcode' : '5016027101519',
            'productCode' : 'BFFP151',
            'altProductCode' : '',
            'artistName': 'The Merry Pranksters',
            'title': 'Peggy the Pistol/Hogs Are a Coming',
            'date': new Date(1999, 4, 15),
            'stateOfBirth': 'Arkansas'
        };

        this.showSites = function() {
            var selected = $filter('filter')(this.data.sites, {value: this.site.value});
            return (this.site.value && selected.length) ? selected[0].text : 'Not set';
        };

        this.opened = {};

        this.open = function($event, elementOpened) {
            $event.preventDefault();
            $event.stopPropagation();

            this.opened[elementOpened] = !this.opened[elementOpened];
        };

        this.updateDate = function(newDate) {
            this.data.date = newDate;
        };

        this.datepickerOptions = {
            maxDate: new Date(),
            minMode: 'day',
            datepickerMode: 'month',
            showWeeks: false,
            startingDay: 1
        };

        this.datepickerModelOptions = {
            //timezone: '+0000'
        };

        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }

})(angular);

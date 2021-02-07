"use strict";
const DefaultDataSource = require('./dataSource');

module.exports = FilterModel;

function FilterModel(dataSource) {
    /**
     * Prevent use without new
     */
    if (!(this instanceof FilterModel)) {
        return new FilterModel(dataSource);
    }

    this.areMismatchesHiding = areMismatchesHiding;
    this.getData = getData;
    this.getInput = getInput;
    this.hideMismatches = hideMismatches;
    this.resetInput = resetInput;

    let _input = '';
    let _hideMismatches = false;
    let _dataSource = dataSource || new DefaultDataSource();

    /**
     * Return data
     * @returns {Array}
     */
    function getData() {
        return _dataSource.getData();
    }

    /**
     * Return input string
     * @returns {string}
     */
    function getInput() {
        return _input;
    }

    /**
     * Set hide mismatched rows or not
     * @param hide
     */
    function hideMismatches(hide = true) {
        _hideMismatches = hide;
    }

    /**
     * Returns hide flag
     * @returns {boolean}
     */
    function areMismatchesHiding() {
        return _hideMismatches;
    }

    /**
     * Reset input string
     * @param input
     */
    function resetInput(input) {
        _input = input
    }

}


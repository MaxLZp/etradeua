"use strict";
const $ = require('jquery');

module.exports = View;

function View(containerId) {

    /**
     * Prevent use without new
     */
    if (!(this instanceof View)) {
        return new View(containerId);
    }

    this.isCheckboxChecked = isCheckboxChecked;
    this.render = render;
    this.resetData = resetData;
    this.resetCheckboxChangeHandler = resetCheckboxChangeHandler;
    this.resetTextFieldChangeHandler = resetTextFieldChangeHandler;
    this.textInputValue = textInputValue;
    this.update = update;

    const checkboxId = 'filterCheckbox';
    const container = tryGetContainer(containerId);
    const textInputId = 'filterText';
    const tableId = 'filterTable';

    /**
     * Check if checkbox is checked
     * @returns {boolean}
     */
    function isCheckboxChecked() {
        return getCheckbox().checked === true;
    }

    /**
     * Generate table content
     * @param data
     */
    function generateTableHTML(data) {
        let html = '';
        data.forEach((row) => {
            let rowString = '';
            row.forEach((item) => {
                rowString += `<td class="filter-table__cell">${item}</td>`;
            });
            html += `<tr class="filter-table__row">${rowString}</tr>`;
        });
        return html;
    }

    /**
     * Returns checkbox input
     */
    function getCheckbox() {
        return getInputBy(`#${container.id} #${checkboxId}`);
    }

    /**
     * Get input by it's id
     * @param selector
     * @returns {jQuery|HTMLElement}
     */
    function getInputBy(selector) {
        const input = $(`${selector}`);
        if (input.length > 0) {
            return input[0];
        }
        throw `Input ${selector} not found. Probably view is not rendered yet.`
    }

    /**
     * Create Layout
     * @returns {string}
     */
    function getLayout() {
        return layout.replace('%%textInputId%%', textInputId)
            .replace('%%filterCheckbox%%', checkboxId)
            .replace('%%tableId%%', tableId)
            .replace('%%tableContent%%', []);
    }

    /**
     * Returns Text input
     */
    function getTextField() {
        return getInputBy(`#${container.id} #${textInputId}`);
    }

    /**
     * Hide all rows
     */
    function hideAllRows() {
        const classToToggle = 'filter-table__row--hidden';
        $(`#${container.id} tr`).addClass(classToToggle);
    }

    /**
     * Highlight cell that contain text supplied
     * @param text
     */
    function highlightCellsContaining(text) {
        const classToToggle = 'filter-table__cell--match';
        $(`#${container.id} td`).removeClass(classToToggle);
        if (text.length > 0) {
            $(`#${container.id} td:contains(${text})`).addClass(classToToggle);
        }
    }

    /**
     * Override jquery contains selector for case insensitive search
     */
    function overrideJQueryContainsCaseInsesitive() {
        $.expr[":"].contains = $.expr.createPseudo(function (arg) {
            return function (elem) {
                return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
            };
        });
    }

    /**
     * Reset table data
     * @param data
     */
    function resetData(data) {
        const table = $(`#${container.id} #${tableId}`)[0];
        table.innerHTML = generateTableHTML(data);
    }

    /**
     * Reset checkbox change-event handler
     * @param callback
     */
    function resetCheckboxChangeHandler(callback) {
        if (typeof callback === 'function') {
            $(getCheckbox()).on('input', callback);
        }
    }

    /**
     * Reset text input change-event handler
     * @param callback
     */
    function resetTextFieldChangeHandler(callback) {
        if (typeof callback === 'function') {
            $(getTextField()).on('input', callback);
        }
    }

    /**
     * Renders view
     * @param text
     * @param hideMismatches
     */
    function render(text = '', hideMismatches = true) {
        if (container) {
            container.innerHTML += getLayout();
            getCheckbox().checked = hideMismatches;
            getTextField().value = text;
            return;
        }
        throw 'Cannot render view';
    }

    /**
     * Show all rows
     */
    function showAllRows() {
        const classToToggle = 'filter-table__row--hidden';
        $(`#${container.id} tr`)
            .removeClass(classToToggle);
    }

    /**
     * Show rows with text supplied
     * @param text
     */
    function showRowsWith(text) {
        const classToToggle = 'filter-table__row--hidden';
        if (text.length > 0) {
            $(`#${container.id} td:contains(${text})`).parent().removeClass(classToToggle);
        }
    }

    /**
     *
     * @returns {jQuery|HTMLElement}
     */
    function textInputValue() {
        return getTextField().value;
    }

    /**
     * Try to get container
     *
     * @param componentClassId
     * @returns {*}
     */
    function tryGetContainer(componentClassId) {
        const components = $(componentClassId);
        if (components.length > 0) {
            return components[0];
        }
        throw 'Filter Component not found';
    }

    /**
     * Update view
     */
    function update(text, hide) {
        highlightCellsContaining(text);
        showAllRows();
        if (hide) {
            hideAllRows();
            showRowsWith(text);
        }
    }
}

const layout = `
        <h4 class="table-filter__header">Demo</h4>
        <div class="table-filter__inputs filter-input">
            <input id="%%textInputId%%" type="text" class="filter-input__text" placeholder="Фильтр...">
            <label class="filter-input__hide-label">
                <input id="%%filterCheckbox%%" type="checkbox" class="filter-input__hide-checkbox">
                Скрывать строки, в которых не найдены соответствия
            </label>
        </div>
        <table id="%%tableId%%" class="table-filter__table filter-table">
            %%tableContent%%
        </table>
`;
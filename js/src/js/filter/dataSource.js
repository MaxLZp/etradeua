"use strict";

module.exports = DataSource;

function DataSource() {
    /**
     * Prevent use without new
     */
    if (!(this instanceof DataSource)) {
        return new DataSource();
    }

    this.getData = getData;

    /**
     * Return data
     * @param rows
     * @param columns
     * @returns {Array}
     */
    function getData(rows = 10, columns = 10) {
        let data = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < columns; j++) {
                row.push(String.fromCharCode(97 + i + j) + String.fromCharCode(98 + i + j));
            }
            data.push(row);
        }
        return data;
    }

}


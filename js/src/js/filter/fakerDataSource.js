"use strict";
const faker = require('faker');
const DataSource = require('./dataSource');

module.exports = FakerDataSource;

function FakerDataSource() {

    /**
     * Prevent use without new
     */
    if (!(this instanceof FakerDataSource)) {
        return new FakerDataSource();
    }

    DataSource.call(this);
    this.getData = getData;

    /**
     * Return data
     * @returns {Array}
     */
    function getData(rows = 10, columns = 10) {
        let data = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < columns; j++) {
                row.push(faker.address.country());
            }
            data.push(row);
        }
        return data;
    }

}


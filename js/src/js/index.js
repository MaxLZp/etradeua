"use strict";
import '../scss/main.scss';

const FilterComponent = require('./filter/filterComponent');
const FilterModel = require('./filter/model');
const FilterView = require('./filter/view');
const FakerDataSource = require('./filter/fakerDataSource');

const filter = new FilterComponent(
    new FilterModel(new FakerDataSource()),
    new FilterView('#table-filter')
);
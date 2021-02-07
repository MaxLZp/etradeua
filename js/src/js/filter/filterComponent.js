"use strict";

module.exports = FilterComponent;

function FilterComponent(
    model,
    view
) {

    /**
     * Prevent use without new
     */
    if (!(this instanceof FilterComponent)) {
        return new FilterComponent(
            model,
            view
        );
    }

    const _model = model;
    const _view = view;

    (function init() {
        _view.render(_model.getInput(), _model.areMismatchesHiding());
        _view.resetData(_model.getData());
        _view.resetTextFieldChangeHandler(onTextFieldChanged);
        _view.resetCheckboxChangeHandler(onCheckboxChanged);
        updateView();
    })();

    /**
     * View's Checkbox change event handler
     * @param event
     */
    function onCheckboxChanged(event) {
        _model.hideMismatches(_view.isCheckboxChecked());
        updateView();
    }

    /**
     * View's TextField change event handler
     * @param event
     */
    function onTextFieldChanged(event) {
        _model.resetInput(event.target.value);
        updateView();
    }

    /**
     * UpdateView
     */
    function updateView() {
        _view.update(_model.getInput(), _model.areMismatchesHiding());
    }

}


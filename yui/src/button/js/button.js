// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * Atto addToolbarMenu example.
 *
 * @package    atto_toolbarmenu
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_addToolbarMenu-button
 */

/**
 * Atto
 *
 * @namespace M.atto_toolbarmenu
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_toolbarmenu').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
     initializer: function() {

        // Array to ToolbarMenu.
        // Text: text shown on toolbar.
        // callbackArgs: callback arguments.
        // callback: callback method for each element. Not mandatory, a global callback can be used.
        var items = [{text: 'Italic', callbackArgs: 'italic'}, {text:'Bold', callbackArgs: 'bold'}];

        this.addToolbarMenu({
            // Global callback.
            globalItemConfig: {
                callback: this._setStyle
            },
            icon: '',
            items: items
        });
    },

    _setStyle: function(e, style) {
        document.execCommand(style, false, null);
        this.markUpdated();
    }
});


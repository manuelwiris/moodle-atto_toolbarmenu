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

        var items = [];

        Y.Array.each(this._objectToArray(this.get('langs')), function(lang) {
            items.push({
                text: lang.value,
                callbackArgs: lang.key
            });
        });

            this.addToolbarMenu({
                globalItemConfig: {
                    callback: this._setLangTag
                },
                icon: 'icon',
                iconComponent: 'atto_toolbarmenu',
                items: items
            });
        },

    _setLangTag: function(e, lang) {
        var host = this.get('host');
        if (host === false || host.getSelection()[0].collapsed) {
            return;
        }
        var langOpenNode = Y.Node.create('<span>' + '{' + lang + '}' + '</span>');
        var langCloseNode = Y.Node.create('<span>' + '{/' + lang + '}' + '</span>');
        langOpenNode.addClass = 'langClass';
        langCloseNode.addClass = 'langClass';
        var parentSelectedNode = Y.Node(host.getSelectionParentNode());

        parentSelectedNode.insert(langOpenNode, 'before');
        parentSelectedNode.insert(langCloseNode, 'after');

        // Mark the textarea as updated.
        this.markUpdated();
    },

    /**
     * Transform a JSON object {key1:value1, key2:value2,..} in an array of object
     * [{key1:value1}, {key2:value2},.....]
     * @param  {Object} o {key:value}  object.
     * @return {Array} [{key:value}] Array
     */
    _objectToArray: function(o) {
        var arrayValues = Y.Object.values(o);
        var arrayKeys = Y.Object.keys(o);
        var arrayObject = Array.prototype.map.call(arrayKeys, function(x){
                var obj = {};
                 obj.key = x;
                 obj.value = arrayValues[arrayKeys.indexOf(x)];
                return obj;}
        );
        return arrayObject;
    }
},
    {
    ATTRS: {
        langs: {
            value: {}
        }
    }

});


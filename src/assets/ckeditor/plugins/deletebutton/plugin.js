CKEDITOR.plugins.add('deletebutton',
{
    init: function (editor) {

       
        editor.ui.addButton("deletebutton",
        {
            label: 'Delete textbox',
            command: 'delete',
            icon: this.path + "Deletebutton.png"
        });
        var cmd = editor.addCommand('delete', { exec: showDeleteMessage });
        var defaultConfig = {
            deletefunction: function(currentLength, maxLength) {
                dispatchEvent('deletefunction', currentLength, maxLength);
            },
        }
        var config = CKEDITOR.tools.extend(defaultConfig, editor.config.deletebutton || {}, true);
    }
});
function showDeleteMessage(e) {
    CKEDITOR.currentInstance.config.deletebutton.deletefunction();
}
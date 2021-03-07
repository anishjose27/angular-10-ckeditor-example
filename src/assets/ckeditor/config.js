/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

 CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here
	
    config.toolbar = [
     { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', 'RemoveFormat'] },
     { name: 'table', items: ['Table'] },
     { name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo'] },
     { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'CreateDiv'] },
     { name: 'styles', items: ['Format', 'Font', 'FontSize'] },
     { name: 'colors', items: ['TextColor', 'BGColor'] },
     { name: 'flite', items: ["flite-toggletracking", "flite-toggleshow", "flite-acceptall", "flite-rejectall", "flite-acceptone", "flite-rejectone"] },
     { name: 'deletebutton', items: ['deletebutton'] }
    ];
     config.extraPlugins = 'flite,autogrow,wordcount';
     config.removePlugins =
      'elementspath,magicline,contextmenu,liststyle,tabletools,tableselection,colordialog';
  };


  
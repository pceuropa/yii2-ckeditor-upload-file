/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	CKEDITOR.on('dialogDefinition', function (ev) {
        // Take the dialog name and its definition from the event data.
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
		
        if (dialogName == 'image') {
            
            var infoTab = dialogDefinition.getContents('info');
            
           // infoTab.remove('browse');
            infoTab.remove('txtHSpace');
            infoTab.remove('txtVSpace');
            infoTab.remove('txtBorder');
           // infoTab.remove('txtAlt');
            infoTab.remove('txtWidth');
            infoTab.remove('txtHeight');
            infoTab.remove('htmlPreview');
           // infoTab.remove('cmbAlign');
            infoTab.remove('ratioLock');
			
		
        }
    });
config.enterMode = CKEDITOR.ENTER_BR;
config.shiftEnterMode = CKEDITOR.ENTER_P;
config.autoParagraph = false;
config.skin = 'bootstrapck';
config.language = 'pl';
config.height = 300;
config.filebrowserBrowseUrl = '../js/ckeditor/kcfinder/browse.php';
config.filebrowserUploadUrl = '../js/ckeditor/kcfinder/upload.php';
config.entities = false;
config.entities_latin = true;
config.plugins = 'dialogui,dialog,dialogadvtab,basicstyles,bidi,button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,toolbar,enterkey,entities,popup,filebrowser,fakeobjects,floatingspace,listblock,richcombo,font,format,horizontalrule,htmlwriter,wysiwygarea,image,indent,indentblock,indentlist,justify,menubutton,link,list,liststyle,magicline,pagebreak,pastefromword,preview,removeformat,showblocks,showborders,sourcearea,tab,table,tabletools,undo,lineutils,widget,widgetbootstrap';
config.skin = 'bootstrapck';
config.toolbar = [
		{ name: 'document', items: ['Undo', 'Redo', 'Preview'] },
		{ name: 'basicstyles', items: [  'Bold', 'Italic', 'Underline', 'Strike','TextColor', 'BGColor', 'RemoveFormat'] },
		{ name: 'links', items: ['Image','Link', 'Anchor'] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock',  ] },
		{ name: 'insert', items: [ 'Glyphicons', 'WidgetbootstrapLeftCol', 'WidgetbootstrapRightCol', 'WidgetbootstrapTwoCol', 'WidgetbootstrapThreeCol', 'WidgetbootstrapAlert', 'WidgetbootstrapX', 'Table', 'HorizontalRule',  ] },
		{ name: 'styles', items: [ 'Styles', 'Format',  'FontSize' ] },
		{ name: 'tools', items : [ 'Source' ] }
	];
};

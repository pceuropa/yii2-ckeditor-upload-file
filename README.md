# Ckeditor for Yii2 Framework with the possibility of upload files
installation by copy/paste js file without composer


### Installation
Add the following code to the file view (e.g _form.php)

```php
$this->registerJsFile('@web/js/ckeditor/ckeditor.js');

<?= $form->field($model, 'description')->textarea(['class' => 'ckeditor']) ?>
```


### Configuration ckeditor

Configuration is file /js/ckeditor/config.js


### Configuration upload file ([kcfinder](https://github.com/sunhater/kcfinder))

Configuration is file /js/ckeditor/kcfinder/config.php


# yii2-ckeditor
installation by copy/paste js file without composer


## Installation
In view (e.g _form.php)

```php
$this->registerJsFile('@web/js/ckeditor/ckeditor.js');

<?= $form->field($model, 'description')->textarea(['class' => 'ckeditor']) ?>
```


## Configuration ckeditor

Configuration is file /js/ckeditor/config.js


## Configuration upload file ([kcfinder](sunhater/kcfinder))

Configuration is file /js/ckeditor/kcfinder/config.php


# PHP 

## Задание
Есть три расширения файлов (txt, doc, xml). Необходимо написать ООП-код, который в зависимости от типа файлов, имел бы свою логику его обработки (саму логику писать не нужно).

## Демо

FileProcessor instances are created using factory methods of FileProcessor:
```php
$doc = FileProcessor::doc();
$txt = FileProcessor::txt();
$xml = FileProcessor::xml();
//or
$doc2 = FileProcessor::create(new DocFileProcessorFactory());
$txt2 = FileProcessor::create(new TxtFileProcessorFactory());
$xml2 = FileProcessor::create(new XmlFileProcessorFactory());
```

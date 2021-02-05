<?php
namespace maxlzp\etrade\FileProcessor;

/**
 * Class XmlFileProcessorFactory
 *
 * @package maxlzp\etrade\FileProcessor
 */
class XmlFileProcessorFactory implements FileProcessorFactoryInterface
{

    /**
     * Create FileProcessor
     *
     * @return FileProcessorInterface
     */
    public function create(): FileProcessorInterface
    {
        return new XmlFileProcessor();
    }
}
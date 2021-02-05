<?php
namespace maxlzp\etrade\FileProcessor;

/**
 * Class DocFileProcessorFactory
 *
 * @package maxlzp\etrade\FileProcessor
 */
class DocFileProcessorFactory implements FileProcessorFactoryInterface
{

    /**
     * Create FileProcessor
     *
     * @return FileProcessorInterface
     */
    public function create(): FileProcessorInterface
    {
        return new DocFileProcessor();
    }
}
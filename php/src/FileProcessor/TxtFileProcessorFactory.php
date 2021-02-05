<?php
namespace maxlzp\etrade\FileProcessor;

/**
 * Class TxtFileProcessorFactory
 *
 * @package maxlzp\etrade\FileProcessor
 */
class TxtFileProcessorFactory implements FileProcessorFactoryInterface
{

    /**
     * Create FileProcessor
     *
     * @return FileProcessorInterface
     */
    public function create(): FileProcessorInterface
    {
        return new TxtFileProcessor();
    }
}
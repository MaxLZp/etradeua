<?php
namespace maxlzp\etrade\FileProcessor;

/**
 * Interface FileProcessorFactoryInterface
 *
 * @package maxlzp\etrade\FileProcessor
 */
interface FileProcessorFactoryInterface
{
    /**
     * Create FileProcessor
     *
     * @return FileProcessorInterface
     */
    public function create(): FileProcessorInterface;
}
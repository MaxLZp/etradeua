<?php
namespace maxlzp\etrade\FileProcessor;

/**
 * Interface FileProcessorInterface
 *
 * @package maxzp\etrade\FileProcessor
 */
interface FileProcessorInterface
{
    /**
     * Process file
     *
     * @return mixed
     */
    public function process();
}
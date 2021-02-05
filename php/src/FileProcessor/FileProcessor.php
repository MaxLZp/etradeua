<?php
namespace maxlzp\etrade\FileProcessor;

/**
 * Class FileProcessor
 *
 * @package maxzp\etrade\FileProcessor
 */
abstract class FileProcessor
{
    /**
     * Create FileProcessor with Factory supplied
     *
     * @param $factory
     *
     * @return FileProcessorInterface
     */
    public static function create(FileProcessorFactoryInterface $factory): FileProcessorInterface
    {
        return $factory->create();
    }

    /**
     * Create DocFileProcessor
     *
     * @return FileProcessorInterface
     */
    public static function doc(): FileProcessorInterface
    {
        return new DocFileProcessor();
    }

    /**
     * Create TxtFileProcessor
     *
     * @return FileProcessorInterface
     */
    public static function txt(): FileProcessorInterface
    {
        return new TxtFileProcessor();
    }

    /**
     * Create XmlFileProcessor
     *
     * @return FileProcessorInterface
     */
    public static function xml(): FileProcessorInterface
    {
        return new XmlFileProcessor();
    }
}
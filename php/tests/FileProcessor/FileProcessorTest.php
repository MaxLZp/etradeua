<?php
namespace maxlzp\etrade\tests\FileProcessor;

use maxlzp\etrade\FileProcessor\DocFileProcessorFactory;
use maxlzp\etrade\FileProcessor\FileProcessor;
use maxlzp\etrade\FileProcessor\TxtFileProcessorFactory;
use maxlzp\etrade\FileProcessor\XmlFileProcessorFactory;
use PHPUnit\Framework\TestCase;

/**
 * Class FileProcessorTest
 *
 * @package maxlzp\etrade\tests\FileProcessor
 */
class FileProcessorTest extends TestCase
{
    /**
     * @test
     */
    public function shouldCreateDocFileProcessor()
    {
        $processor = FileProcessor::doc();
        $this->assertInstanceOf('maxlzp\etrade\FileProcessor\DocFileProcessor', $processor);
    }

    /**
     * @test
     */
    public function shouldCreateDocFileProcessorWithFactory()
    {
        $processor = FileProcessor::create(new DocFileProcessorFactory());
        $this->assertInstanceOf('maxlzp\etrade\FileProcessor\DocFileProcessor', $processor);
    }

    /**
     * @test
     */
    public function shouldCreateTxtFileProcessor()
    {
        $processor = FileProcessor::txt();
        $this->assertInstanceOf('maxlzp\etrade\FileProcessor\TxtFileProcessor', $processor);
    }

    /**
     * @test
     */
    public function shouldCreateTxtFileProcessorWithFactory()
    {
        $processor = FileProcessor::create(new TxtFileProcessorFactory());
        $this->assertInstanceOf('maxlzp\etrade\FileProcessor\TxtFileProcessor', $processor);
    }

    /**
     * @test
     */
    public function shouldCreateXmlFileProcessor()
    {
        $processor = FileProcessor::xml();
        $this->assertInstanceOf('maxlzp\etrade\FileProcessor\XmlFileProcessor', $processor);
    }

    /**
     * @test
     */
    public function shouldCreateXmlFileProcessorWithFactory()
    {
        $processor = FileProcessor::create(new XmlFileProcessorFactory());
        $this->assertInstanceOf('maxlzp\etrade\FileProcessor\XmlFileProcessor', $processor);
    }
}

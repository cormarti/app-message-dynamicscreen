<?php

namespace Vendor\MyApp;


use App\Domain\Module\Model\Module;
use DynamicScreen\SdkPhp\Slide\SlideHandler;
use DynamicScreen\SdkPhp\Slide\ISlide;

class Message extends SlideHandler
{
    private Module $module;

    public function __construct(Module $module)
    {
        $this->module = $module;
    }

    public function getName(): string
    {
        return $this->module->name;
    }

    public function getDescription()
    {
        return $this->module->description;
    }

    public function getIdentifier()
    {
        return $this->module->identifier;
    }

    public function fetch(ISlide $slide): array
    {
        return [
            'title' => $slide->getOption('title', $this->getDefaultOptions()['title']),
            'message' => $slide->getOption('message', $this->getDefaultOptions()['message']),
            'backgroundColor' => $slide->getOption('backgroundColor', $this->getDefaultOptions()['title']),
        ];
    }

    public function getDefaultOptions(): array
    {
        return [
            'title' => '',
            'message' => '',
            'backgroundColor' => '#D42500',
        ];
    }
}

<?php

namespace DynamicScreen\Message\SimpleMessage;

use App\Domain\Module\Model\Module;
use DynamicScreen\SdkPhp\Handlers\SlideHandler;
use DynamicScreen\SdkPhp\Interfaces\ISlide;

class SimpleMessageHandler extends SlideHandler
{
    public function __construct(Module $module)
    {
        parent::__construct($module);
    }

    public function fetch(ISlide $slide): array
    {
        $default = $this->getDefaultOptions();

        return [
            'title' => $slide->getOption('title', $default['title']),
            'message' => $slide->getOption('message', $default['message']),
            'backgroundColor' => $slide->getOption('backgroundColor', $default['color']),
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

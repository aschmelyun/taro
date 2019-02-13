<?php

class LocalValetDriver extends BasicValetDriver
{
    /**
     * Mutates the incoming URI.
     *
     * @param string $uri
     * @return void
     */
    public function mutateUri($uri)
    {
        return rtrim("/dist{$uri}/");
    }

    /**
     * Determine if the driver serves the request.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return bool
     */
    public function serves($sitePath, $siteName, $uri)
    {
        return is_dir("{$sitePath}/dist/");
    }
}

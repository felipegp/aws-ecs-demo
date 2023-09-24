package com.example.demo.entrypoint;

import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/v1/hello")
public class DemoController {

    @GetMapping
    public String hello(@RequestParam(required = false) String name) {
        if (StringUtils.hasLength(name)) {
            return "Hello world, " + name + "!";
        }

        return "Hello world!";
    }
}

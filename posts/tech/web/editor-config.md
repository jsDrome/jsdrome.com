# Configure Editorconfig

&nbsp;

## Summary

This plugin attempts to override user/workspace settings with settings found in `.editorconfig` files. Below is my configuration.
EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

## Install

Make sure you have installed the editorconfig extension for VS code.

## Configure

Create a file called `.editorconfig` at the root of the project with the following code.

## Code
    ; Unix-style newlines
    [*]
    charset = utf-8
    end_of_line = LF
    indent_size = 2
    indent_style = space
    trim_trailing_whitespace = true

<img src="/img/vscode-preferences.jpg" title="vscode-preferences" class="post-first-image" />

# VS Code preferences

&nbsp;

Given below is my VS Code preferences JSON file. Use this to give VS Code a dark theme with smaller font. Allows you to see many things at once. Or you could tweak this later.

    {
        "editor.wordWrap": "off",
        "editor.multiCursorModifier": "ctrlCmd",
        "editor.renderWhitespace": "none",
        "editor.renderIndentGuides": true,
        "editor.renderControlCharacters": false,
        "editor.formatOnPaste": false,
        "editor.formatOnType": false,
        "editor.formatOnSave": false,
        "editor.wrappingIndent": "none",
        "editor.minimap.enabled": false,
        "editor.accessibilitySupport": "off",
        "eslint.alwaysShowStatus": true,
        "extensions.autoUpdate": false,
        "files.associations": {
          "*.js": "javascriptreact",
          "*.jsx": "javascriptreact",
          "*Jenkinsfile*": "groovy"
        },
        "files.exclude": {
          "**/.git": true,
          "**/.svn": true,
          "**/.hg": true,
          "**/.DS_Store": true,
          "**/.vscode": true,
          "**/node_modules": true
        },
        "gitlens.advanced.messages": {
          "suppressCommitHasNoPreviousCommitWarning": false,
          "suppressCommitNotFoundWarning": false,
          "suppressFileNotUnderSourceControlWarning": true,
          "suppressGitVersionWarning": false,
          "suppressLineUncommittedWarning": false,
          "suppressNoRepositoryWarning": false,
          "suppressResultsExplorerNotice": false,
          "suppressShowKeyBindingsNotice": true,
          "suppressUpdateNotice": false,
          "suppressWelcomeNotice": false
        },
        "gitlens.keymap": "alternate",
        "markdown.preview.lineHeight": 1.2,
        "markdown.preview.fontSize": 12,
        "terminal.integrated.cursorStyle": "line",
        "terminal.integrated.cursorBlinking": true,
        "terminal.integrated.confirmOnExit": true,
        "window.zoomLevel": -1,
        "workbench.iconTheme": "vscode-icons",
        "workbench.startupEditor": "none",
        "workbench.statusBar.visible": true,
        "workbench.activityBar.visible": true,
        "workbench.editor.enablePreview": false,
        "workbench.colorCustomizations": {
          "editor.background": "#000000",
          "terminal.background": "#121226",
          "sideBar.background": "#000011",
          "activityBar.background": "#000000",
        },
      }
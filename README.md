<div align="left">

  <h1>custom-affix-css-loader</h1>

</div>
<h2 align="left">Introduction</h2>

    This is a tool for adding CSS affixes,Its runtime depends on the webpack packaging environment。

<h2 align="left">Install</h2>

```bash
npm install --save-dev custom-affix-css-loader
```

<h2 align="left">Usage</h2>
    After install the loader, adding the following code in your webpack.config.js:<br>
        loaders:[
            { 
                test: /\.css$/,
                loader: 'style-loader!css-loader!custom-affix-css-loader?{"type":"css","pre":"pre","suf":"suf"}'
            },
            { 
                test: /\.html$/,
                loader: 'html-loader!custom-affix-css-loader?{"type":"html","pre":"pre","suf":"suf"
                }'
            }
        ]
<h3 align="left">options</h3>
    You can configure your loader in the form of parameters, like this:
    {"type":"css","pre":"pre","suf":"suf"}',Where "type" refers to the file type, "pre" refers to the class prefix, "suf" refers to the class suffix。
    (css)for example:
    .container {
        background: #FFF;
    }
    after packing:
    .pre-container-suf {
        background: #FFF;
    }
    (html)for example:
    <div class="container"></div>
    after packing:
    <div class="pre-container-suf"></div>


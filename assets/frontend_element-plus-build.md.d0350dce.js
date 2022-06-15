import{_ as e,c as t,o as s,d as n}from"./app.05e3c997.js";const f='{"title":"Element-plus\u7684\u6784\u5EFA\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8F93\u5165\u548C\u8F93\u51FA","slug":"\u8F93\u5165\u548C\u8F93\u51FA"},{"level":3,"title":"\u8F93\u5165","slug":"\u8F93\u5165"},{"level":3,"title":"\u8F93\u51FA","slug":"\u8F93\u51FA"},{"level":2,"title":"\u6784\u5EFA\u6D41\u7A0B","slug":"\u6784\u5EFA\u6D41\u7A0B"},{"level":3,"title":"\u6D41\u7A0B\u6846\u67B6","slug":"\u6D41\u7A0B\u6846\u67B6"},{"level":3,"title":"\u6E05\u7406\u7684\u539F\u7406","slug":"\u6E05\u7406\u7684\u539F\u7406"},{"level":3,"title":"runTask\u539F\u7406","slug":"runtask\u539F\u7406"},{"level":3,"title":"buildModules\u7684\u539F\u7406","slug":"buildmodules\u7684\u539F\u7406"},{"level":3,"title":"buildFullBundle\u7684\u539F\u7406","slug":"buildfullbundle\u7684\u539F\u7406"},{"level":3,"title":"generateTypesDefinitions\u7684\u539F\u7406","slug":"generatetypesdefinitions\u7684\u539F\u7406"},{"level":3,"title":"buildHelper\u7684\u539F\u7406","slug":"buildhelper\u7684\u539F\u7406"},{"level":3,"title":"buildThemeChalk\u539F\u7406","slug":"buildthemechalk\u539F\u7406"},{"level":3,"title":"copyTypesDefinitions\u539F\u7406","slug":"copytypesdefinitions\u539F\u7406"},{"level":3,"title":"copyFiles\u7684\u539F\u7406","slug":"copyfiles\u7684\u539F\u7406"},{"level":2,"title":"\u591A\u8FDB\u7A0B\u65B9\u6848","slug":"\u591A\u8FDB\u7A0B\u65B9\u6848"}],"relativePath":"frontend/element-plus-build.md"}',a={},l=n(`<h1 id="element-plus\u7684\u6784\u5EFA\u539F\u7406" tabindex="-1">Element-plus\u7684\u6784\u5EFA\u539F\u7406 <a class="header-anchor" href="#element-plus\u7684\u6784\u5EFA\u539F\u7406" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u8F93\u5165\u548C\u8F93\u51FA">\u8F93\u5165\u548C\u8F93\u51FA</a><ul><li><a href="#\u8F93\u5165">\u8F93\u5165</a></li><li><a href="#\u8F93\u51FA">\u8F93\u51FA</a></li></ul></li><li><a href="#\u6784\u5EFA\u6D41\u7A0B">\u6784\u5EFA\u6D41\u7A0B</a><ul><li><a href="#\u6D41\u7A0B\u6846\u67B6">\u6D41\u7A0B\u6846\u67B6</a></li><li><a href="#\u6E05\u7406\u7684\u539F\u7406">\u6E05\u7406\u7684\u539F\u7406</a></li><li><a href="#runtask\u539F\u7406">runTask\u539F\u7406</a></li><li><a href="#buildmodules\u7684\u539F\u7406">buildModules\u7684\u539F\u7406</a></li><li><a href="#buildfullbundle\u7684\u539F\u7406">buildFullBundle\u7684\u539F\u7406</a></li><li><a href="#generatetypesdefinitions\u7684\u539F\u7406">generateTypesDefinitions\u7684\u539F\u7406</a></li><li><a href="#buildhelper\u7684\u539F\u7406">buildHelper\u7684\u539F\u7406</a></li><li><a href="#buildthemechalk\u539F\u7406">buildThemeChalk\u539F\u7406</a></li><li><a href="#copytypesdefinitions\u539F\u7406">copyTypesDefinitions\u539F\u7406</a></li><li><a href="#copyfiles\u7684\u539F\u7406">copyFiles\u7684\u539F\u7406</a></li></ul></li><li><a href="#\u591A\u8FDB\u7A0B\u65B9\u6848">\u591A\u8FDB\u7A0B\u65B9\u6848</a></li></ul></div></p><h2 id="\u8F93\u5165\u548C\u8F93\u51FA" tabindex="-1">\u8F93\u5165\u548C\u8F93\u51FA <a class="header-anchor" href="#\u8F93\u5165\u548C\u8F93\u51FA" aria-hidden="true">#</a></h2><h3 id="\u8F93\u5165" tabindex="-1">\u8F93\u5165 <a class="header-anchor" href="#\u8F93\u5165" aria-hidden="true">#</a></h3><p>packages/\u4E0B\u7684\u5404\u4E2A\u5305\uFF1A</p><ul><li>\u90FD\u5305\u542B\u6709\u5165\u53E3\u6587\u4EF6\u3002</li><li>\u5FC5\u8981\u7684\u5904\u7406\u547D\u4EE4\uFF0C\u65B9\u4FBF\u5916\u90E8\u8C03\u7528\u3002</li><li>\u7EC4\u4EF6\u7684Js\u4E0Ecss\u5206\u79BB\u3002</li></ul><h3 id="\u8F93\u51FA" tabindex="-1">\u8F93\u51FA <a class="header-anchor" href="#\u8F93\u51FA" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u6587\u4EF6</th><th style="text-align:left;">\u7C7B\u578B\u8BF4\u660E</th><th style="text-align:left;">\u8F93\u51FA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">unpkg(\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165)</td><td style="text-align:left;">dist/index.full.js</td><td style="text-align:left;">\u53EF\u4EE5\u901A\u8FC7CDN\u94FE\u63A5\u7684\u65B9\u5F0F\u52A0\u8F7D,\u5F15\u5165\u540E\uFF0C\u53EF\u4EE5\u5728html\u4E2D\u76F4\u63A5\u4F7F\u7528el-button\u7C7B\u7684\u6807\u7B7E</td><td style="text-align:left;">\u8F93\u51FA\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u51FD\u6570</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">dist/index.full.min.js</td><td style="text-align:left;">\u5E26\u4EE3\u7801\u538B\u7F29</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">dist/index.full.mjs</td><td style="text-align:left;">es6\u6A21\u5757</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">dist/index.full.min.mjs</td><td style="text-align:left;">\u5E26\u538B\u7F29\u7684es6\u6A21\u5757</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">dist/index.css</td><td style="text-align:left;">\u5408\u5E76\u53CA\u538B\u7F29\u540E\u7684\u6240\u6709css</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">*.map</td><td style="text-align:left;">\u76F8\u5173\u7684sourcemap\u6587\u4EF6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">lib</td><td style="text-align:left;">lib/index.js</td><td style="text-align:left;">CommandJS\u7C7B\u578B\u7684\u6A21\u5757\uFF0C\u4F7F\u7528require\u53CAmodule.exports\u6765\u7BA1\u7406\u6A21\u5757</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">module</td><td style="text-align:left;">es/index.mjs</td><td style="text-align:left;">ES6\u7684\u6A21\u5757\uFF0C\u4F7F\u7528import\u53CAexport\u6765\u7BA1\u7406\u6A21\u5757</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">theme-chalk</td><td style="text-align:left;">src/*</td><td style="text-align:left;">scss\u7684\u6E90\u7801</td><td style="text-align:left;">\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u5F15\u5165scss\uFF0C\u4E0E\u9879\u76EE\u4E00\u8D77\u7F16\u8BD1</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">el-*.css</td><td style="text-align:left;">\u6BCF\u4E2A\u7EC4\u4EF6\u7684css</td><td style="text-align:left;">\u8F6C\u8BD1\u5E76\u538B\u7F29\u597D\u7684css\u6587\u4EF6</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">index.css</td><td style="text-align:left;">\u6240\u6709css\u7684\u5408\u5E76</td><td style="text-align:left;">\u540Cdist/index.css</td></tr><tr><td style="text-align:left;">package.json\u7B49\u6587\u4EF6</td><td style="text-align:left;">package.json<br> README.md<br>global.d.ts</td><td style="text-align:left;">\u5305\u7684\u8BF4\u660E\u6587\u4EF6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">types</td><td style="text-align:left;">types/**/*.d.ts</td><td style="text-align:left;">\u7EC4\u4EF6\u53CA.ts\u6587\u4EF6\u7684typescript\u7C7B\u578B</td><td style="text-align:left;">\u5728\u6700\u540E\u4E00\u6B65\u65F6\uFF0C\u4F1A\u62F7\u8D1D\u5230lib\u53CAes\u4E2D\uFF0C\u6240\u4EE5\u53D1\u7248\u7684\u65F6\u5019\uFF0C\u4E0D\u9700\u8981\u518D\u5E26\u4E0A</td></tr></tbody></table><h2 id="\u6784\u5EFA\u6D41\u7A0B" tabindex="-1">\u6784\u5EFA\u6D41\u7A0B <a class="header-anchor" href="#\u6784\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a></h2><h3 id="\u6D41\u7A0B\u6846\u67B6" tabindex="-1">\u6D41\u7A0B\u6846\u67B6 <a class="header-anchor" href="#\u6D41\u7A0B\u6846\u67B6" aria-hidden="true">#</a></h3><ul><li>pnpm run build: \u89E6\u53D1\u6784\u5EFA\u547D\u4EE4</li><li>pnpm run start -C internal/build: \u6267\u884Cinternal/build\u4E0B\u7684start\u547D\u4EE4</li><li>gulp --require sucrase/register/ts -f gulpfile.ts: \u52A0\u8F7Dts\u89E3\u6790\u6A21\u5757\uFF0C\u89E6\u53D1gulpfile\u7684\u9ED8\u8BA4\u5BFC\u51FA\u51FD\u6570\u7684\u6267\u884C</li><li>\u4F7F\u7528series api\u6765\u5E8F\u5217\u5316\u76F8\u5173\u64CD\u4F5C <ul><li>\u6E05\u7406\uFF1A\u6267\u884Cnpm run clean \u6E05\u9664\u4E0A\u6B21\u7684\u64CD\u4F5C\u3002 <ul><li>pnpm run clean:dist &amp;&amp; pnpm run clean --filter ./packages/ --stream <ul><li>rimraf dist</li></ul></li></ul></li><li>createOutput: \u521D\u59CB\u5316\u8F93\u51FA\u76EE\u5F55</li><li>\u5E76\u884C\u6267\u884C\u4E0D\u540C\u7C7B\u578B\u7684\u6784\u5EFA\u64CD\u4F5C <ul><li>buildModules\uFF1A \u6A21\u5757\u6784\u5EFA\uFF0C\u8F93\u51FAlib\u548Ces</li><li>buildFullBundle: \u6784\u5EFAunpkg\u5305</li><li>generateTypesDefinitions\uFF1A \u751F\u6210type</li><li>buildHelper: \u751F\u6210 IDE \u652F\u6301\uFF0Cweb-types.json\uFF0C\u652F\u6301webstorm, vetur\uFF1A attributes.json\u53CAtags.json</li></ul></li><li>buildThemeChalk\uFF1A \u6253\u5305css\uFF0C\u5E76\u590D\u5236\u5230theme-chalk\u76EE\u5F55</li><li>copyTypesDefinitions\uFF1A\u590D\u5236\u7C7B\u578B\u5B9A\u4E49\u5230types</li></ul></li></ul><h3 id="\u6E05\u7406\u7684\u539F\u7406" tabindex="-1">\u6E05\u7406\u7684\u539F\u7406 <a class="header-anchor" href="#\u6E05\u7406\u7684\u539F\u7406" aria-hidden="true">#</a></h3><p>pnpm run clean --filter ./packages/ --stream</p><p>filter\u8868\u793A\u6307\u5B9Apackages\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u5B50\u5305\u3002--stream\u8868\u793A\u4ECEpackages\u518D\u8F93\u51FA\u4E00\u4E2A\u6D41\uFF0C\u8BFB\u53D6\u4E0D\u540C\u7684\u6587\u4EF6\u6D41\uFF0C\u5E76\u884C\u64CD\u4F5C \u6548\u679C\u662F\u6267\u884C\u6240\u6709\u5B50\u5305\u7684clean\u547D\u4EE4\u3002</p><p>\u76EE\u524D\u53EA\u6709 theme-chalk\u5305\u6709clean\u64CD\u4F5C</p><h3 id="runtask\u539F\u7406" tabindex="-1">runTask\u539F\u7406 <a class="header-anchor" href="#runtask\u539F\u7406" aria-hidden="true">#</a></h3><p>\u4F5C\u7528\u662F\u628A\u76F8\u5E94\u7684\u4EFB\u52A1\u540D\u79F0\u4E0Egulp\u7684\u914D\u7F6E\u6587\u4EF6\u5173\u8054\uFF0C\u6267\u884C\u76F8\u5E94\u7684gulp\u51FD\u6570\uFF0C\u5982\uFF1A</p><ul><li>runTask(&#39;buildModules&#39;),</li><li>\u4F7F\u7528withTaskName \u8BBE\u7F6E\u76F8\u5E94\u7684\u4EFB\u52A1\u540D\u79F0: \u5B9E\u9645\u539F\u7406\u662F\u4E3A\u51FD\u6570\u6DFB\u52A0displayName\u7684\u5C5E\u6027</li><li>\u65B0\u5F00\u4E00\u4E2A\u8FDB\u884C\uFF0C\u6267\u884C\uFF1Apnpm run start buildModules\u547D\u4EE4</li><li>\u5BF9\u5E94\u7684\u539F\u59CB\u547D\u4EE4\u662F\uFF1Agulp --require sucrase/register/ts -f gulpfile.ts buildModules</li><li>buildModules\u4E3Agulpfile\u5BFC\u51FA\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u5BF9\u5E94src/tasks/modules.ts</li><li>\u6267\u884C\u8BE5buildModules\u51FD\u6570</li></ul><h3 id="buildmodules\u7684\u539F\u7406" tabindex="-1">buildModules\u7684\u539F\u7406 <a class="header-anchor" href="#buildmodules\u7684\u539F\u7406" aria-hidden="true">#</a></h3><h4 id="\u6267\u884C\u8FC7\u7A0B" tabindex="-1">\u6267\u884C\u8FC7\u7A0B <a class="header-anchor" href="#\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a></h4><ol><li>\u8BFB\u53D6\u51FA packages \u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5E76\u8FC7\u6EE4\u6389node_modules\u3001test\u3001mock\u3001gulpfile\u3001dist\u7B49\u76EE\u5F55</li><li>\u5C06input\u4F20\u5165rollup\uFF0C\u6CA1\u6709\u914D\u7F6Eoutput\uFF0C\u8FD4\u56DEbundle</li><li>\u6839\u636Ebundle\u914D\u7F6E\uFF0C\u5199\u5165\u6587\u4EF6</li></ol><h4 id="\u6587\u4EF6\u8DEF\u5F84" tabindex="-1">\u6587\u4EF6\u8DEF\u5F84 <a class="header-anchor" href="#\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a></h4><ol><li>\u4F7F\u7528fast-glob\u904D\u5386\uFF0C\u53EA\u8BFB\u53D6\u6587\u4EF6\uFF0C\u8FC7\u6EE4\u6389\u76EE\u5F55\u3002</li><li>\u8FD4\u56DE\u7684\u8DEF\u5F84\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002\u4E14\u53EA\u8BFB\u53D6\u4E00\u7EA7\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF0C\u5982\uFF1A\u67D0\u4E2A\u7EC4\u4EF6\uFF0C\u53EA\u8BFB\u53D6index.ts</li><li>\u8FC7\u6EE4\u6389\u8DEF\u5F84\u4E2D\u6709\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u540D\u79F0</li><li>\u50CFconstants\u8FD9\u6837\u6CA1\u6709src\uFF0C\u6587\u4EF6\u90FD\u5728\u5916\u5C42\uFF0C\u4F1A\u91CD\u590D\u5904\u7406\u3002</li><li>\u6CA1\u6709theme-chalk\u4E0B\u7684css\u76F8\u5173\u6587\u4EF6\u3002</li></ol><h4 id="rollup\u7684\u5E94\u7528" tabindex="-1">rollup\u7684\u5E94\u7528 <a class="header-anchor" href="#rollup\u7684\u5E94\u7528" aria-hidden="true">#</a></h4><ul><li>input\uFF1A\u53EA\u9488\u5BF9js</li><li>plugins\uFF1A <ul><li>Element-plus-alias-plugin: \u81EA\u5B9A\u4E49\u7684plugin\uFF0C\u5C06\u7EC4\u4EF6\u91CC\u7684 element-plus/theme-chalk/el-*** \u8F6C\u5316\u4E3Aelement-plus/theme-chalk/el-***\u3002\u548C\u5305\u7684\u5BFC\u51FA\u65B9\u5F0F\u4FDD\u6301\u4E00\u81F4</li><li>DefineOptions: \u89E3\u6790\u5355\u6587\u4EF6\u7EC4\u4EF6\u91CC\u7684defineOptions\u51FD\u6570</li><li>vue\u53CAvuejsx: \u89E3\u6790vue\u7684\u5355\u6587\u4EF6\u7EC4\u4EF6\uFF0C\u652F\u6301jsx\u8BED\u6CD5</li><li>nodeResolve\uFF1A\u6253\u5305\u7B2C\u4E09\u65B9\u4F9D\u8D56</li><li>Commonjs: \u652F\u6301commonjs\u6A21\u5757</li><li>esbuild: \u5C06ts\u53CA\u65B0\u7684es\u8BED\u6CD5\uFF0C\u8F6C\u5316\u6210\u76F8\u5E94\u7684\u4EE3\u7801\uFF0C\u5E76\u538B\u7F29\u3002\u5F53\u524D\u662F\u8F6C\u4E3A\u5230es2018</li></ul></li><li>external: <ul><li>\u5C01\u88C5\u6210\u51FD\u6570\uFF0C\u4ECEpkg\u4E2D\u8BFB\u53D6\u540C\u7EA7\u7684\u4F9D\u8D56\u8FC7\u6EE4\u3002</li><li>\u6839\u636Eelement-plus/package.json\u4E0B\u7684peerdependencies\u6765\u8FC7\u6EE4\u6389\u4E0D\u9700\u8981\u7684\u4F9D\u8D56</li></ul></li><li>treeshake\uFF1A\u8FC7\u6EE4\u6389\u4E0D\u9700\u8981\u7684\u4EE3\u7801\uFF0C\u73B0\u5728\u662F\u5173\u95ED\u7684\u3002</li></ul><h4 id="\u8F93\u51FA\u6587\u4EF6" tabindex="-1">\u8F93\u51FA\u6587\u4EF6 <a class="header-anchor" href="#\u8F93\u51FA\u6587\u4EF6" aria-hidden="true">#</a></h4><p>\u4F7F\u7528rollup\u8FD4\u56DE\u7684bundle\u5BF9\u8C61\u7684write API \u53CA\u4E24\u79CD\u7C7B\u578B\u7684\u914D\u7F6E\u8F93\u51FA\u5185\u5BB9\u5230\u6587\u4EF6\u4E2D\u3002\u6709\u4E24\u79CD\u683C\u5F0F\uFF1Aesm\u548Ccjs:</p><div class="language-js"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;/Users/dc/httpdocs/homeking/fe-element-plus/dist/element-plus/es&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token literal-property property">preserveModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">preserveModulesRoot</span><span class="token operator">:</span> <span class="token string">&#39;/Users/dc/httpdocs/homeking/fe-element-plus/packages/element-plus&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&#39;[name].mjs&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;/Users/dc/httpdocs/homeking/fe-element-plus/dist/element-plus/lib&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token string">&#39;named&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">preserveModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">preserveModulesRoot</span><span class="token operator">:</span> <span class="token string">&#39;/Users/dc/httpdocs/homeking/fe-element-plus/packages/element-plus&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u8F93\u51FA\u51FD\u6570: \u8F93\u51FA\u64CD\u4F5C\u662F\u5F02\u6B65\u7684\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6EPromise.all\uFF0C\u5E76\u7B49\u5F85\u6267\u884C\u5B8C\uFF0C\u6574\u4E2A\u8FDB\u7A0B\u4F1A\u63D0\u524D\u7ED3\u675F</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">writeBundles</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">bundle</span><span class="token operator">:</span> RollupBuild<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> OutputOptions<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> bundle<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="buildfullbundle\u7684\u539F\u7406" tabindex="-1">buildFullBundle\u7684\u539F\u7406 <a class="header-anchor" href="#buildfullbundle\u7684\u539F\u7406" aria-hidden="true">#</a></h3><h4 id="\u6267\u884C\u8FC7\u7A0B-1" tabindex="-1">\u6267\u884C\u8FC7\u7A0B <a class="header-anchor" href="#\u6267\u884C\u8FC7\u7A0B-1" aria-hidden="true">#</a></h4><ol><li>\u521B\u5EFA buildFullMinified \u53CA buildFull\u7684\u4EFB\u52A1\uFF0C\u90FD\u8C03\u7528buildFull\uFF0C\u4F20\u5165\u4E0D\u540C\u7684minify\u8BBE\u7F6E</li><li>\u89E6\u53D1buildFullEntry\u53CAbuildFullLocaler\u7684\u6267\u884C\uFF0Clocaler\u751F\u6210\u591A\u8BED\u8A00\u5305\uFF0C\u5DF2\u7ECF\u5220\u9664</li><li>buildFullEntry</li><li>\u6839\u636E element-plus/index.ts\u7684\u5165\u53E3\u6587\u4EF6\u5BFB\u627E\u4F9D\u8D56\u6253\u5305</li><li>\u8F93\u51FAumd\u53CAesm\u7684\u4E24\u79CDfull\u5305\uFF0C\u8F93\u51FA\u914D\u7F6E\u5982\u4E0B\uFF1A</li></ol><div class="language-js"><pre><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>
        epOutput<span class="token punctuation">,</span>
        <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span>
        <span class="token function">formatBundleFilename</span><span class="token punctuation">(</span><span class="token string">&#39;index.full&#39;</span><span class="token punctuation">,</span> minify<span class="token punctuation">,</span> <span class="token string">&#39;js&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token string">&#39;named&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;HomekingUI&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> minify<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>
        epOutput<span class="token punctuation">,</span>
        <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span>
        <span class="token function">formatBundleFilename</span><span class="token punctuation">(</span><span class="token string">&#39;index.full&#39;</span><span class="token punctuation">,</span> minify<span class="token punctuation">,</span> <span class="token string">&#39;mjs&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> minify<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
</code></pre></div><h4 id="esbuild\u7684\u914D\u7F6E\u5DEE\u5F02" tabindex="-1">esbuild\u7684\u914D\u7F6E\u5DEE\u5F02 <a class="header-anchor" href="#esbuild\u7684\u914D\u7F6E\u5DEE\u5F02" aria-hidden="true">#</a></h4><ul><li>minify\uFF1A \u662F\u5426\u538B\u7F29\u4EE3\u7801\u7684\u63A7\u5236 \uFF0CbuildModules\u4E0D\u538B\u7F29\uFF0CbuildFullBundle\u5728\u751F\u6210.min\u65F6\u538B\u7F29</li><li>sourceMap\u7684\u63A7\u5236\uFF1AbuildModules\u9ED8\u8BA4\u662Ftrue,buildFullBundle\u5728\u6CA1\u6709\u538B\u7F29\u65F6\uFF0C\u4E0D\u751F\u6210</li><li><code>production</code>\u7684\u8BBE\u7F6E\uFF1AbuildModules\u6CA1\u6709\uFF0CbuildFullBundle\u624D\u6709</li></ul><h4 id="\u8F93\u51FA\u6587\u4EF6-1" tabindex="-1">\u8F93\u51FA\u6587\u4EF6 <a class="header-anchor" href="#\u8F93\u51FA\u6587\u4EF6-1" aria-hidden="true">#</a></h4><p>index.full\u7CFB\u5217\u76845\u4E2A\u6587\u4EF6 Sourcemap: \u53EA\u5728\u538B\u7F29\u7684\u60C5\u51B5\u4E0B\u624D\u751F\u6210</p><h3 id="generatetypesdefinitions\u7684\u539F\u7406" tabindex="-1">generateTypesDefinitions\u7684\u539F\u7406 <a class="header-anchor" href="#generatetypesdefinitions\u7684\u539F\u7406" aria-hidden="true">#</a></h3><ul><li>\u904D\u5386packages\u4E0B.js\uFF0C .ts\u53CAvue\u6587\u4EF6</li><li>\u501F\u52A9 ts-morph\uFF0C\u751F\u6210\u6240\u6709\u7684.ts\u6587\u4EF6\u7C7B\u578B\uFF08\u9664\u4E3B\u5E93\u5916\u7684\u6587\u4EF6\uFF09</li><li>\u8F93\u5165\u6587\u4EF6\u5230dist/types\u4E0B</li></ul><h3 id="buildhelper\u7684\u539F\u7406" tabindex="-1">buildHelper\u7684\u539F\u7406 <a class="header-anchor" href="#buildhelper\u7684\u539F\u7406" aria-hidden="true">#</a></h3><ul><li>\u6839\u636E components-helper \u751F\u6210 \u5BF9webstorm\u53CAvscode\u7684\u63D2\u4EF6\u914D\u7F6E\u652F\u6301</li><li>\u6709attributes.json\u3001tags.json\u53CAweb-types.json</li></ul><h3 id="buildthemechalk\u539F\u7406" tabindex="-1">buildThemeChalk\u539F\u7406 <a class="header-anchor" href="#buildthemechalk\u539F\u7406" aria-hidden="true">#</a></h3><ul><li>\u6267\u884Cpackages\u5305\u4E0B\u7684\u6240\u6709build\u547D\u4EE4\uFF1Apnpm run --filter ./packages/ build --parallel</li><li>\u89E6\u53D1theme-chalk\u4E0B\u7684build\u547D\u4EE4\u6267\u884C</li><li>\u89E6\u53D1 buildThemeChalk <ul><li>\u4F7F\u7528gulp\u7684src\u53CAdest api\u590D\u5236theme-chalk\u4E0B\u7684src\u5230dist/theme-chalk/src\u4E0B</li><li>\u4F7F\u7528src\u8BFB\u53D6\u6240\u6709\u7684scss\u6587\u4EF6</li><li>\u4F7F\u7528gulp-sass \u5904\u7406scss</li><li>\u4F7F\u7528gulp-autoprefixer\u6DFB\u52A0\u5B8C\u5584css</li><li>\u4F7F\u7528gulp-clean-css\u538B\u7F29css,\u5E76\u663E\u793A\u5927\u5C0F\u53D8\u5316\u4FE1\u606F</li><li>\u4F7F\u7528gulp-rename\u91CD\u547D\u540D\u6587\u4EF6\uFF0C\u6DFB\u52A0el-\u524D\u7F00</li><li>\u8F93\u51FA\u5230theme-chalk\u7684dist\u4E0B</li></ul></li><li>\u89E6\u53D1 copyThemeChalkBundle\uFF0C \u590D\u5236them-chalk\u4E0B\u7684dist\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u5230\u5916\u56F4\u7684dist/element-plus/theme-chalk\u76EE\u5F55\u4E0B</li><li>\u590D\u5236index.css\u5230dist/element-plus/dist\u4E0B\uFF0C\u4E0Eindex.full***\u7EC4\u6210\u5B8C\u6574\u7684\u5E93</li></ul><h3 id="copytypesdefinitions\u539F\u7406" tabindex="-1">copyTypesDefinitions\u539F\u7406 <a class="header-anchor" href="#copytypesdefinitions\u539F\u7406" aria-hidden="true">#</a></h3><ul><li>\u590D\u5236types\u4E0B\u7684.d.ts\u5230es\u53CAlib\u4E2D</li><li>\u4F7F\u7528fs-extra\u7684copy API</li></ul><h3 id="copyfiles\u7684\u539F\u7406" tabindex="-1">copyFiles\u7684\u539F\u7406 <a class="header-anchor" href="#copyfiles\u7684\u539F\u7406" aria-hidden="true">#</a></h3><ul><li>\u590D\u5236element-plus\u4E0B\u7684package.json</li><li>\u590D\u5236\u9879\u76EE\u7684README.md\u53CAglobal.d.ts</li></ul><h2 id="\u591A\u8FDB\u7A0B\u65B9\u6848" tabindex="-1">\u591A\u8FDB\u7A0B\u65B9\u6848 <a class="header-anchor" href="#\u591A\u8FDB\u7A0B\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u6700\u591A\u65F6\u4F1A\u52067\u4E2A\u8FDB\u7A0B</p><ul><li>buildModules</li><li>buildFullBundle <ul><li>\u538B\u7F29\u7248\u672C</li><li>\u975E\u538B\u7F29\u7248\u672C</li></ul></li><li>generateTypesDefinitions</li><li>buildHelper</li><li>buildThemeChalk</li></ul><p>\u6700\u540E\u7684\u6587\u4EF6\u590D\u5236\u4E5F\u662F\u5206\u4E24\u4E2A\u8FDB\u7A0B\u5904\u7406\uFF1A</p><ul><li>\u590D\u5236type\uFF0C\u4F9D\u8D56\u4E8EbuildModules\u53CAgenerateTypesDefinitions\u4EFB\u52A1\u7684\u5B8C\u6210</li><li>\u590D\u5236\u8BF4\u660E\u5305\u7684\u8BF4\u660E\u6587\u4EF6</li></ul>`,53),p=[l];function i(o,r,u,d,c,h){return s(),t("div",null,p)}var y=e(a,[["render",i]]);export{f as __pageData,y as default};

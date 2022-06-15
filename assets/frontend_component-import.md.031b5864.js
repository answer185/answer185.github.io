import{_ as e,c as t,o as n,d as o}from"./app.05e3c997.js";const h='{"title":"\u7EC4\u4EF6\u5E93\u52A0\u8F7D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u52A0\u8F7D\u65B9\u5F0F","slug":"\u52A0\u8F7D\u65B9\u5F0F"},{"level":2,"title":"\u5B9E\u73B0\u539F\u7406","slug":"\u5B9E\u73B0\u539F\u7406"},{"level":3,"title":"\u6309\u9700\u52A0\u8F7D","slug":"\u6309\u9700\u52A0\u8F7D"},{"level":3,"title":"\u624B\u52A8\u52A0\u8F7D","slug":"\u624B\u52A8\u52A0\u8F7D"}],"relativePath":"frontend/component-import.md"}',l={},s=o(`<h1 id="\u7EC4\u4EF6\u5E93\u52A0\u8F7D" tabindex="-1">\u7EC4\u4EF6\u5E93\u52A0\u8F7D <a class="header-anchor" href="#\u7EC4\u4EF6\u5E93\u52A0\u8F7D" aria-hidden="true">#</a></h1><h2 id="\u52A0\u8F7D\u65B9\u5F0F" tabindex="-1">\u52A0\u8F7D\u65B9\u5F0F <a class="header-anchor" href="#\u52A0\u8F7D\u65B9\u5F0F" aria-hidden="true">#</a></h2><ol><li>unpkg\u5BFC\u5165\uFF1A\u901A\u8FC7script\u6807\u7B7E\u52A0\u8F7D\u6574\u4E2A\u5E93\u7684js\uFF0C\u9700\u8981\u653E\u5728head\u4E2D</li></ol><div class="language-"><pre><code>&lt;head&gt;
  &lt;!-- \u5BFC\u5165\u6837\u5F0F --&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;//unpkg.com/element-plus/dist/index.css&quot; /&gt;
  &lt;!-- \u5BFC\u5165 Vue 3 --&gt;
  &lt;script src=&quot;//unpkg.com/vue@next&quot;&gt;&lt;/script&gt;
  &lt;!-- \u5BFC\u5165\u7EC4\u4EF6\u5E93 --&gt;
  &lt;script src=&quot;//unpkg.com/element-plus&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre></div><p>\u4E0D\u8DB3\uFF1A\u591A\u4E00\u6B21http\u8BF7\u6C42\uFF0C\u6574\u4E2A\u5E93\u5FC5\u987B\u5B8C\u6574\u5F15\u5165</p><ol start="2"><li>\u5B8C\u6574\u5BFC\u5165\uFF1A\u4F7F\u7528import\u7684\u65B9\u5F0F\uFF0C\u5728\u5E94\u7528\u7684\u5165\u53E3\u6587\u4EF6\u5904\u52A0\u8F7D\u6574\u4E2A\u4F9D\u8D56\uFF0C\u5E76\u6CE8\u518C</li></ol><div class="language-"><pre><code>// main.ts
import { createApp } from &#39;vue&#39;
import ElementPlus from &#39;element-plus&#39;
import &#39;element-plus/dist/index.css&#39;
import App from &#39;./App.vue&#39;

const app = createApp(App)

app.use(ElementPlus)
app.mount(&#39;#app&#39;)
</code></pre></div><p>\u4F18\u70B9\uFF1A\u5728\u5F00\u53D1\u65F6\uFF0C\u4E0D\u9700\u8981\u518D\u5BFC\u5165\u76F8\u5173\u7684\u7EC4\u4EF6\u3002</p><p>\u4E0D\u8DB3\uFF1A\u6253\u5305\u65F6\uFF0C\u6574\u4E2Aelement-plus\u4F1A\u5168\u90E8\u6253\u8FDB\u53BB\u3002</p><ol start="3"><li>\u6309\u9700\u52A0\u8F7D\uFF1A</li></ol><p>\u6839\u636E\u7EC4\u4EF6\u6216API\u7684\u524D\u7F00\u7B49\u89C4\u5219\uFF0C\u5728\u8FD0\u884C\u53CA\u6784\u5EFA\u65F6\u81EA\u52A8\u89E3\u6790\u4F9D\u8D56\u3002</p><p>\u4F18\u70B9\uFF1A\u53EF\u4EE5\u50CF\u5B8C\u6574\u5BFC\u5165\u4E00\u6837\uFF0C\u5728\u4EFB\u610F\u4F4D\u7F6E\u4F7F\u7528\u7EC4\u4EF6\u6216API\uFF0C\u6784\u5EFA\u65F6\uFF0C\u6839\u636E\u5B9E\u9645\u7684\u4F7F\u7528\u60C5\u51B5\u6253\u5305\u3002</p><p>\u7F3A\u70B9\uFF1A\u914D\u7F6E\u53CA\u8C03\u67E5\u95EE\u9898\u590D\u6742</p><div class="language-"><pre><code>&lt;template&gt;
  &lt;el-row class=&quot;mb-4&quot;&gt;
    &lt;el-button disabled&gt;Default&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; disabled&gt;Primary&lt;/el-button&gt;
    &lt;el-button type=&quot;success&quot; disabled&gt;Success&lt;/el-button&gt;
    &lt;el-button type=&quot;info&quot; disabled&gt;Info&lt;/el-button&gt;
    &lt;el-button type=&quot;warning&quot; disabled&gt;Warning&lt;/el-button&gt;
    &lt;el-button type=&quot;danger&quot; disabled&gt;Danger&lt;/el-button&gt;
  &lt;/el-row&gt;

  &lt;el-row&gt;
    &lt;el-button plain disabled&gt;Plain&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; plain disabled&gt;Primary&lt;/el-button&gt;
    &lt;el-button type=&quot;success&quot; plain disabled&gt;Success&lt;/el-button&gt;
    &lt;el-button type=&quot;info&quot; plain disabled&gt;Info&lt;/el-button&gt;
    &lt;el-button type=&quot;warning&quot; plain disabled&gt;Warning&lt;/el-button&gt;
    &lt;el-button type=&quot;danger&quot; plain disabled&gt;Danger&lt;/el-button&gt;
  &lt;/el-row&gt;
&lt;/template&gt;
</code></pre></div><ol start="4"><li>\u624B\u52A8\u52A0\u8F7D\uFF1A</li></ol><p>\u5728\u5F00\u53D1\u65F6\uFF0C\u624B\u52A8\u52A0\u8F7D\u76F8\u5173\u7684\u4F9D\u8D56\u3002\u6784\u5EFA\u65F6\uFF0C\u6839\u636E\u7EC4\u4EF6\u7684\u4F9D\u8D56\u5173\u7CFB\u6253\u5305\u3002</p><p>\u4F18\u70B9\uFF1A\u6839\u636E\u5B9E\u9645\u4F7F\u7528\u60C5\u51B5\u6253\u5305\uFF0C\u800C\u4E0D\u662F\u5B8C\u6574\u7684\u6784\u5EFA</p><p>\u4E0D\u8DB3\uFF1A\u6BCF\u4E2A\u7EC4\u4EF6\u65F6\u5019\u65F6\uFF0C\u9700\u8981\u53BB\u5199\u76F8\u5173\u7684\u5BFC\u5165\u4EE3\u7801\u3002</p><div class="language-"><pre><code>&lt;template&gt;
  &lt;el-button&gt;I am ElButton&lt;/el-button&gt;
&lt;/template&gt;
&lt;script&gt;
  import { ElButton } from &#39;element-plus&#39;
  export default {
    components: { ElButton },
  }
&lt;/script&gt;
</code></pre></div><h2 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1">\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h2><h3 id="\u6309\u9700\u52A0\u8F7D" tabindex="-1">\u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h3><h4 id="element-plus\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1">element-plus\u7684\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#element-plus\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h4><p>element-plus\u7684\u5B9E\u73B0\u662F\u57FA\u4E8E unplugin-auto-import \u53CA unplugin-vue-components \u5B9E\u73B0\u3002</p><p>\u5728\u8BC6\u522B\u5230\u7EC4\u4EF6\u4EE3\u7801\u4E2D\u6709\u672A\u5BFC\u5165\u7684\u4F9D\u8D56\u65F6\uFF0C\u4F1A\u89E6\u53D1\u6267\u884C\u3002</p><p>\u5982\u679C\u5F53\u524D\u7684\u4F9D\u8D56\u540D\u79F0\u4EE5El\u5F00\u5934\uFF0C\u5219\u4F1A\u5728\u4EE3\u7801\u4E2D\u589E\u52A0\u76F8\u5173\u4F9D\u8D56\u7684\u5BFC\u5165\u4EE3\u7801\u3002\u5982ElButton\uFF0C\u4F1A\u6DFB\u52A0\uFF1A</p><div class="language-"><pre><code>import { ElButton as __unplugin_components_0 } from &#39;/node_modules/.vite/deps/element-plus_es.js?v=51ca5312&#39;;
import &#39;/node_modules/.vite/deps/element-plus_es_components_button_style_css.js?v=51ca5312&#39;;
</code></pre></div><p>\u52A0\u8F7D\u4E86\u76F8\u5173\u7EC4\u4EF6\u53CAcss\u7684\u4EE3\u7801\u3002</p><p>\u8C03\u8BD5: \u53EF\u4EE5\u5728chrome\u7684source\u4E0B\uFF0C\u627E\u5230\u76F8\u5E94\u7684vue\u6587\u4EF6\u67E5\u770B\u3002</p><h4 id="unplugin-auto-import\u53CAunplugin-vue-components" tabindex="-1">unplugin-auto-import\u53CAunplugin-vue-components <a class="header-anchor" href="#unplugin-auto-import\u53CAunplugin-vue-components" aria-hidden="true">#</a></h4><h5 id="\u539F\u7406" tabindex="-1">\u539F\u7406 <a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a></h5><p>\u8FD9\u4E24\u4E2A\u5E93\u662F\u6309\u9700\u52A0\u8F7D\u7684\u89E3\u51B3\u65B9\u6848\u4E4B\u4E00\uFF0Cimport\u5E93\u9488\u5BF9\u7684\u662FAPI, components\u5E93\u9488\u5BF9\u7684\u662F\u7EC4\u4EF6\u3002</p><p>\u5185\u7F6E\u652F\u6301\u4E86\u4E3B\u6D41\u7684\u6784\u5EFA\u5DE5\u5177\u53CA\u4F18\u79C0\u7684\u7EC4\u4EF6\u5E93\u3002\u5982\u679C\u53EA\u662F\u7B80\u5355\u4F7F\u7528\u7684\u8BDD\uFF0C\u57FA\u672C\u4E0A\u4E0D\u9700\u8981\u518D\u5F00\u53D1\u3002</p><p>\u5B9E\u73B0\u7684\u539F\u7406\u5C31\u662F\u62E6\u622A\u6A21\u5757\u7684\u89E3\u6790\uFF0C\u6839\u636Eresolver\u51FD\u6570\u7684\u8FD4\u56DE\u4FE1\u606F\u4E3A\u5E94\u7528\u8865\u5168\u76F8\u5E94\u7684\u4F9D\u8D56\u3002\u8865\u5168\u7684\u65B9\u5F0F\u67094\u79CD\uFF1A</p><div class="language-"><pre><code>export function stringifyImport(info: ImportInfo | string) {
  if (typeof info === &#39;string&#39;)
    return \`import &#39;\${info}&#39;\`
  if (!info.as)
    return \`import &#39;\${info.from}&#39;\`
  else if (info.name)
    return \`import { \${info.name} as \${info.as} } from &#39;\${info.from}&#39;\`
  else
    return \`import \${info.as} from &#39;\${info.from}&#39;\`
}
</code></pre></div><p>\u6CA1\u6709 import { ElButton } from &#39;element-plus&#39; \u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5\u4F20\u5165name\u65F6\uFF0C\u4E00\u5B9A\u4E5F\u8981\u6709as\u5C5E\u6027\u3002</p><h5 id="\u6269\u5C55" tabindex="-1">\u6269\u5C55 <a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a></h5><p>\u4E24\u4E2A\u7EC4\u4EF6\u90FD\u652F\u6301\u5BF9resolvers\u8FDB\u884C\u6269\u5C55\uFF0C\u4E00\u822C\u53EA\u8981\u4E66\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u51FD\u6570\uFF0C\u5E76\u8FD4\u56DE\u4F9D\u8D56\u7684\u76F8\u5173\u4FE1\u606F\u3002\u51FD\u6570\u53EF\u4EE5\u63A5\u6536\u5230\u4F9D\u8D56\u7684\u540D\u79F0\u3002\u5982\u4E0B\uFF1A</p><div class="language-"><pre><code>Components({
  resolvers: [
    // example of importing Vant
    (componentName) =&gt; {
      // where \`componentName\` is always CapitalCase
      if (componentName.startsWith(&#39;Van&#39;))
        return { name: componentName.slice(3), from: &#39;vant&#39; }
    },
  ],})
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-"><pre><code>export function ElementPlusResolver(
  options: ElementPlusResolverOptions = {},
): ComponentResolver[] {
  let optionsResolved: ElementPlusResolverOptionsResolved

  async function resolveOptions() {
    if (optionsResolved)
      return optionsResolved
    optionsResolved = {
      ssr: false,
      version: await getPkgVersion(&#39;element-plus&#39;, &#39;2.2.2&#39;),
      importStyle: &#39;css&#39;,
      directives: true,
      exclude: undefined,
      ...options,
    }
    return optionsResolved
  }

  return [
    {
      type: &#39;component&#39;,
      resolve: async (name: string) =&gt; {
        return resolveComponent(name, await resolveOptions())
      },
    },
    {
      type: &#39;directive&#39;,
      resolve: async (name: string) =&gt; {
        return resolveDirective(name, await resolveOptions())
      },
    },
  ]
}
</code></pre></div><h5 id="sideeffects" tabindex="-1">sideEffects <a class="header-anchor" href="#sideeffects" aria-hidden="true">#</a></h5><p>\u8BE5\u5C5E\u6027\u7684\u4F7F\u7528\u573A\u666F\u662F\uFF1A\u4F9D\u8D56\u9700\u8981\u518D\u52A0\u8F7D\u5176\u4ED6\u6587\u4EF6\u540E\uFF0C\u5305\u624D\u53EF\u4EE5\u6267\u884C\u65F6\u4F7F\u7528\u3002\u5373\u4E00\u4E2A\u4F9D\u8D56\u540D\u79F0\u9700\u8981\u751F\u6210\u591A\u4E2A\u3002element-plus\u81EA\u8EAB\u5373\u4E3A\u8FD9\u79CD\u573A\u666F\uFF0C\u7EC4\u4EF6\u5E93\u8FD8\u4F9D\u8D56\u4E8E\u76F8\u5E94\u7684css:</p><div class="language-"><pre><code>function getSideEffects(dirName: string): SideEffectsInfo {
  const themeFolder = &#39;homeking-ui/theme-chalk&#39;
  const esComponentsFolder = &#39;homeking-ui/es/components&#39;
  let ssr = false
  return ssr ? \`\${themeFolder}/el-\${dirName}.css\` : \`\${esComponentsFolder}/\${dirName}/style/css\`
}
function HomekingUIResolver(name) {
  if (!name.match(/^Hk[A-Z]/)) {
    return
  }
  const partialName = kebabCase(name.slice(2))// HkTableColumn -&gt; table-column
   return {
    name,
    from: &#39;homeking-ui/es&#39;,
    sideEffects: getSideEffects(partialName),
  }
}
</code></pre></div><h5 id="\u4F9D\u8D56\u7684\u5E93\u4E5F\u662F\u6309\u9700\u52A0\u8F7D" tabindex="-1">\u4F9D\u8D56\u7684\u5E93\u4E5F\u662F\u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#\u4F9D\u8D56\u7684\u5E93\u4E5F\u662F\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h5><p>\u5982\uFF1A\u5F53\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u5E93\u4F9D\u8D56\u4E0Eelement-plus\u7684\u67D0\u4E2A\u7EC4\u4EF6\u65F6\uFF0Celement-plus\u7684\u7EC4\u4EF6\u5E76\u4E0D\u4F1A\u81EA\u52A8\u52A0\u8F7D\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A\u76F8\u5E94\u7684import\u4EE3\u7801\u662F\u6839\u636Eresolver\u6765\u751F\u6210\uFF0C unplugin-vue-components\u5E93\u53EA\u5904\u7406\u8BE5\u8FD4\u56DE\u503C\uFF0C\u4E0D\u4F1A\u5904\u7406\u66F4\u6DF1\u5C42\u7EA7\u5E93\u7684\u60C5\u51B5\u3002</p><p>\u9700\u8981\u901A\u8FC7\u7EF4\u62A4\u7EC4\u4EF6\u4E0Eelement-plus\u7EC4\u4EF6\u7684\u5173\u7CFB\uFF0C\u901A\u8FC7sideEffects\u8865\u5168\u3002 \u518D\u7ED3\u5408\u624B\u52A8\u52A0\u8F7D\u7684\u914D\u7F6E\uFF0C\u624D\u53EF\u4EE5\u4FDD\u8BC1\u4E24\u4E2A\u5E93\u90FD\u81EA\u52A8\u6309\u9700\u52A0\u8F7D\u3002</p><h3 id="\u624B\u52A8\u52A0\u8F7D" tabindex="-1">\u624B\u52A8\u52A0\u8F7D <a class="header-anchor" href="#\u624B\u52A8\u52A0\u8F7D" aria-hidden="true">#</a></h3><p>element-plus\u662F\u901A\u8FC7 <a href="https://www.npmjs.com/package/unplugin-element-plus" target="_blank" rel="noopener noreferrer">unplugin-element-plus</a> \u5B9E\u73B0\u3002 \u539F\u7406\u662F\uFF1A</p><ol><li>\u6839\u636E\u914D\u7F6E\u5C06element-plus\u6307\u5411lib\u6216es\u76EE\u5F55\u3002</li><li>\u6839\u636Eimport\u7684\u7EC4\u4EF6\u540D\u79F0\uFF0C\u81EA\u52A8\u6DFB\u52A0\u7EC4\u4EF6 css\u7684\u5BFC\u5165\u4EE3\u7801</li></ol>`,50),a=[s];function r(i,p,u,d,c,m){return n(),t("div",null,a)}var f=e(l,[["render",r]]);export{h as __pageData,f as default};

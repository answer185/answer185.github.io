import{_ as s,c as n,o as a,d as l}from"./app.64149c3d.js";const y=JSON.parse('{"title":"组件库加载","description":"","frontmatter":{},"headers":[{"level":2,"title":"加载方式","slug":"加载方式","link":"#加载方式","children":[]},{"level":2,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[{"level":3,"title":"按需加载","slug":"按需加载","link":"#按需加载","children":[]},{"level":3,"title":"手动加载","slug":"手动加载","link":"#手动加载","children":[]}]}],"relativePath":"frontend/component-import.md"}'),e={name:"frontend/component-import.md"},p=l(`<h1 id="组件库加载" tabindex="-1">组件库加载 <a class="header-anchor" href="#组件库加载" aria-hidden="true">#</a></h1><h2 id="加载方式" tabindex="-1">加载方式 <a class="header-anchor" href="#加载方式" aria-hidden="true">#</a></h2><ol><li>unpkg导入：通过script标签加载整个库的js，需要放在head中</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;!-- 导入样式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;link rel=&quot;stylesheet&quot; href=&quot;//unpkg.com/element-plus/dist/index.css&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;!-- 导入 Vue 3 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script src=&quot;//unpkg.com/vue@next&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;!-- 导入组件库 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script src=&quot;//unpkg.com/element-plus&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>不足：多一次http请求，整个库必须完整引入</p><ol start="2"><li>完整导入：使用import的方式，在应用的入口文件处加载整个依赖，并注册</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ElementPlus from &#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(ElementPlus)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>优点：在开发时，不需要再导入相关的组件。</p><p>不足：打包时，整个element-plus会全部打进去。</p><ol start="3"><li>按需加载：</li></ol><p>根据组件或API的前缀等规则，在运行及构建时自动解析依赖。</p><p>优点：可以像完整导入一样，在任意位置使用组件或API，构建时，根据实际的使用情况打包。</p><p>缺点：配置及调查问题复杂</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;el-row class=&quot;mb-4&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button disabled&gt;Default&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;primary&quot; disabled&gt;Primary&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;success&quot; disabled&gt;Success&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;info&quot; disabled&gt;Info&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;warning&quot; disabled&gt;Warning&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;danger&quot; disabled&gt;Danger&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/el-row&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;el-row&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button plain disabled&gt;Plain&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;primary&quot; plain disabled&gt;Primary&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;success&quot; plain disabled&gt;Success&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;info&quot; plain disabled&gt;Info&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;warning&quot; plain disabled&gt;Warning&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-button type=&quot;danger&quot; plain disabled&gt;Danger&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/el-row&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>手动加载：</li></ol><p>在开发时，手动加载相关的依赖。构建时，根据组件的依赖关系打包。</p><p>优点：根据实际使用情况打包，而不是完整的构建</p><p>不足：每个组件时候时，需要去写相关的导入代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;el-button&gt;I am ElButton&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import { ElButton } from &#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: { ElButton },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-hidden="true">#</a></h2><h3 id="按需加载" tabindex="-1">按需加载 <a class="header-anchor" href="#按需加载" aria-hidden="true">#</a></h3><h4 id="element-plus的实现原理" tabindex="-1">element-plus的实现原理 <a class="header-anchor" href="#element-plus的实现原理" aria-hidden="true">#</a></h4><p>element-plus的实现是基于 unplugin-auto-import 及 unplugin-vue-components 实现。</p><p>在识别到组件代码中有未导入的依赖时，会触发执行。</p><p>如果当前的依赖名称以El开头，则会在代码中增加相关依赖的导入代码。如ElButton，会添加：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { ElButton as __unplugin_components_0 } from &#39;/node_modules/.vite/deps/element-plus_es.js?v=51ca5312&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;/node_modules/.vite/deps/element-plus_es_components_button_style_css.js?v=51ca5312&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>加载了相关组件及css的代码。</p><p>调试: 可以在chrome的source下，找到相应的vue文件查看。</p><h4 id="unplugin-auto-import及unplugin-vue-components" tabindex="-1">unplugin-auto-import及unplugin-vue-components <a class="header-anchor" href="#unplugin-auto-import及unplugin-vue-components" aria-hidden="true">#</a></h4><h5 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-hidden="true">#</a></h5><p>这两个库是按需加载的解决方案之一，import库针对的是API, components库针对的是组件。</p><p>内置支持了主流的构建工具及优秀的组件库。如果只是简单使用的话，基本上不需要再开发。</p><p>实现的原理就是拦截模块的解析，根据resolver函数的返回信息为应用补全相应的依赖。补全的方式有4种：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function stringifyImport(info: ImportInfo | string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof info === &#39;string&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`import &#39;\${info}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!info.as)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`import &#39;\${info.from}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  else if (info.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`import { \${info.name} as \${info.as} } from &#39;\${info.from}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  else</span></span>
<span class="line"><span style="color:#A6ACCD;">    return \`import \${info.as} from &#39;\${info.from}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>没有 import { ElButton } from &#39;element-plus&#39; 的方式，所以传入name时，一定也要有as属性。</p><h5 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-hidden="true">#</a></h5><p>两个组件都支持对resolvers进行扩展，一般只要书写一个简单的函数，并返回依赖的相关信息。函数可以接收到依赖的名称。如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Components({</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolvers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    // example of importing Vant</span></span>
<span class="line"><span style="color:#A6ACCD;">    (componentName) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // where \`componentName\` is always CapitalCase</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (componentName.startsWith(&#39;Van&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">        return { name: componentName.slice(3), from: &#39;vant&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>也可以直接返回一个数组：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function ElementPlusResolver(</span></span>
<span class="line"><span style="color:#A6ACCD;">  options: ElementPlusResolverOptions = {},</span></span>
<span class="line"><span style="color:#A6ACCD;">): ComponentResolver[] {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let optionsResolved: ElementPlusResolverOptionsResolved</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  async function resolveOptions() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (optionsResolved)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return optionsResolved</span></span>
<span class="line"><span style="color:#A6ACCD;">    optionsResolved = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      ssr: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      version: await getPkgVersion(&#39;element-plus&#39;, &#39;2.2.2&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      importStyle: &#39;css&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      directives: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      exclude: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...options,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return optionsResolved</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: &#39;component&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve: async (name: string) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return resolveComponent(name, await resolveOptions())</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: &#39;directive&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve: async (name: string) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return resolveDirective(name, await resolveOptions())</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="sideeffects" tabindex="-1">sideEffects <a class="header-anchor" href="#sideeffects" aria-hidden="true">#</a></h5><p>该属性的使用场景是：依赖需要再加载其他文件后，包才可以执行时使用。即一个依赖名称需要生成多个。element-plus自身即为这种场景，组件库还依赖于相应的css:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function getSideEffects(dirName: string): SideEffectsInfo {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const themeFolder = &#39;homeking-ui/theme-chalk&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const esComponentsFolder = &#39;homeking-ui/es/components&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let ssr = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  return ssr ? \`\${themeFolder}/el-\${dirName}.css\` : \`\${esComponentsFolder}/\${dirName}/style/css\`</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function HomekingUIResolver(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!name.match(/^Hk[A-Z]/)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  const partialName = kebabCase(name.slice(2))// HkTableColumn -&gt; table-column</span></span>
<span class="line"><span style="color:#A6ACCD;">   return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name,</span></span>
<span class="line"><span style="color:#A6ACCD;">    from: &#39;homeking-ui/es&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    sideEffects: getSideEffects(partialName),</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="依赖的库也是按需加载" tabindex="-1">依赖的库也是按需加载 <a class="header-anchor" href="#依赖的库也是按需加载" aria-hidden="true">#</a></h5><p>如：当自定义的组件库依赖与element-plus的某个组件时，element-plus的组件并不会自动加载。</p><p>这是因为相应的import代码是根据resolver来生成， unplugin-vue-components库只处理该返回值，不会处理更深层级库的情况。</p><p>需要通过维护组件与element-plus组件的关系，通过sideEffects补全。 再结合手动加载的配置，才可以保证两个库都自动按需加载。</p><h3 id="手动加载" tabindex="-1">手动加载 <a class="header-anchor" href="#手动加载" aria-hidden="true">#</a></h3><p>element-plus是通过 <a href="https://www.npmjs.com/package/unplugin-element-plus" target="_blank" rel="noreferrer">unplugin-element-plus</a> 实现。 原理是：</p><ol><li>根据配置将element-plus指向lib或es目录。</li><li>根据import的组件名称，自动添加组件 css的导入代码</li></ol>`,50),t=[p];function o(c,i,r,C,A,u){return a(),n("div",null,t)}const m=s(e,[["render",o]]);export{y as __pageData,m as default};

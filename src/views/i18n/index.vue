<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-17 14:19:37
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 16:46:07
-->
<template>
  <div class="i18n">
    <article class="_2rhmJa">
      <h3>1.安装yarn add vue-i18n</h3>
      <br />
      <h3>2.配置main.js文件</h3>
      <div class="_2Uzcx_">
        <!-- <button class="VJbwyy" type="button" aria-label="复制代码">
          <i aria-label="icon: copy" class="anticon anticon-copy"
            ><svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="copy"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
              ></path></svg
          ></i>
        </button> -->
        <pre
          class="line-numbers language-jsx"
        ><code class="  language-jsx"><span class="token keyword">import</span> VueI18n <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span>    <span class="token comment">// 引入VueI18n </span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> cn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./static/lang/cn'</span>    <span class="token comment">// 引入lang文件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> en <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./static/lang/en'</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locale<span class="token punctuation">:</span> <span class="token string">'en'</span><span class="token punctuation">,</span>   <span class="token comment">// 设置语言</span>
  messages<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    cn<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>cn <span class="token punctuation">}</span><span class="token punctuation">,</span>
    en<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>en <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueI18n<span class="token punctuation">)</span>     <span class="token comment">// 使用VueI18n</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  i18n<span class="token punctuation">,</span>     <span class="token comment">// 挂载</span>
  <span class="token function-variable function">render</span><span class="token punctuation">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>
      </div>
      <br />
      <h3>3.增加lang文件，比如cn.js</h3>
      <div class="_2Uzcx_">
        <!-- <button class="VJbwyy" type="button" aria-label="复制代码">
          <i aria-label="icon: copy" class="anticon anticon-copy"
            ><svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="copy"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
              ></path></svg
          ></i>
        </button> -->
        <pre
          class="line-numbers language-dart"
        ><code class="  language-dart"><span class="token keyword">export</span> <span class="token keyword">const</span> cn <span class="token operator">=</span> <span class="token punctuation">{</span>
  test<span class="token punctuation">:</span> <span class="token string">'测试'</span><span class="token punctuation">,</span>
  test1<span class="token punctuation">:</span> <span class="token string">'测试1'</span>
<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code></pre>
      </div>
      <br />
      <h3>4.使用，任何一个组件里，直接格式化数据</h3>
      <div class="_2Uzcx_">
        <!-- <button class="VJbwyy" type="button" aria-label="复制代码">
          <i aria-label="icon: copy" class="anticon anticon-copy"
            ><svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="copy"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
              ></path></svg
          ></i>
        </button> -->
        <pre
          class="line-numbers language-bash"
        ><code class="  language-bash">&lt;div&gt;{{$t('test')}}&lt;/div&gt;
<span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
      </div>
      <br />
      <h3>5.后面即可更改main里面的locale，实现国际化语言变更</h3>
      <p>
        每个组件都包含一个引用为 $i18n 属性的 VueI18n
        实例，该实例也可用于更改语言环境<br />
        如中英切换的方法，方法执行，页面会跟着变更
      </p>
      <div class="_2Uzcx_">
        <!-- <button class="VJbwyy" type="button" aria-label="复制代码">
          <i aria-label="icon: copy" class="anticon anticon-copy"
            ><svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="copy"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
              ></path></svg
          ></i>
        </button> -->
        <pre
          class="line-numbers language-kotlin"
        ><code class="  language-kotlin"><span class="token function">changeLang</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$i18n<span class="token punctuation">.</span>locale
      <span class="token keyword">if</span> <span class="token punctuation">(</span>temp <span class="token operator">===</span> <span class="token string">'cn'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$i18n<span class="token punctuation">.</span>locale <span class="token operator">=</span> <span class="token string">'en'</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$i18n<span class="token punctuation">.</span>locale <span class="token operator">=</span> <span class="token string">'cn'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "i18n",
};
</script>

<style lang="scss" scoped>
._2rhmJa pre,
._2rhmJa pre[class*="language-"] {
  color: #cfcfcf;
  background: #2d2d2d;
}
</style>
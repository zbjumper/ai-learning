import{_ as a,o as s,c as e,Q as l}from"./chunks/framework.18d5c1a4.js";const x=JSON.parse('{"title":"Linux 基础","description":"","frontmatter":{},"headers":[],"relativePath":"basic/linux.md","filePath":"basic/linux.md"}'),n={name:"basic/linux.md"},o=l('<h1 id="linux-基础" tabindex="-1">Linux 基础 <a class="header-anchor" href="#linux-基础" aria-label="Permalink to &quot;Linux 基础&quot;">​</a></h1><h2 id="_1-linux-简介" tabindex="-1">1. Linux 简介 <a class="header-anchor" href="#_1-linux-简介" aria-label="Permalink to &quot;1. Linux 简介&quot;">​</a></h2><h2 id="_2-常用命令" tabindex="-1">2. 常用命令 <a class="header-anchor" href="#_2-常用命令" aria-label="Permalink to &quot;2. 常用命令&quot;">​</a></h2><h3 id="_2-1-文件操作" tabindex="-1">2.1 文件操作 <a class="header-anchor" href="#_2-1-文件操作" aria-label="Permalink to &quot;2.1 文件操作&quot;">​</a></h3><h4 id="_2-1-1-rsync" tabindex="-1">2.1.1 rsync <a class="header-anchor" href="#_2-1-1-rsync" aria-label="Permalink to &quot;2.1.1 rsync&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rsync</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-avzP</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--delete</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--exclude-from=exclude.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">source_dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">target_dir</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rsync</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-avzP</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--delete</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--exclude-from=exclude.txt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">source_dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">target_dir</span></span></code></pre></div><ul><li>-a, --archive 归档模式，表示以递归方式传输文件，并保持所有文件属性，等于-rlptgoD</li><li>-v, --verbose 详细模式输出</li><li>-z, --compress 压缩文件传输</li><li>-P 等于 --partial --progress，--partial：保留那些因故没有完全传输的文件，并在下一次传输时继续传输。--progress：显示传输过程</li><li>--delete 删除那些在接收端（target_dir）已经不存在的文件，即删除目标端多余文件</li><li>--exclude-from=exclude.txt 排除文件，exclude.txt中的内容为要排除的文件名，每行一个文件名</li><li>source_dir 源目录</li><li>target_dir 目标目录*</li></ul>',7),t=[o];function r(i,c,p,d,u,_){return s(),e("div",null,t)}const y=a(n,[["render",r]]);export{x as __pageData,y as default};
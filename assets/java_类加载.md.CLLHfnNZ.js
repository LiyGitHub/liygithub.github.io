import{_ as o,c as l,ae as s,j as r,a as e,G as i,w as n,B as d,o as h}from"./chunks/framework.qVOFP1fh.js";const C=JSON.parse('{"title":"Java类加载机制","description":"","frontmatter":{},"headers":[],"relativePath":"java/类加载.md","filePath":"java/类加载.md"}'),_={name:"java/类加载.md"};function p(J,a,c,v,m,u){const t=d("clinit");return h(),l("div",null,[a[3]||(a[3]=s('<h1 id="java类加载机制" tabindex="-1">Java类加载机制 <a class="header-anchor" href="#java类加载机制" aria-label="Permalink to &quot;Java类加载机制&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>Java中的类加载机制是指JVM在运行时将class文件加载到内存中并进行解释的过程。类加载机制是Java的基础，它保证了Java程序的可移植性、安全性和灵活性。在本文中，我们将深入探讨Java类加载机制的工作原理和相关的知识点。</p><h2 id="类加载的过程" tabindex="-1">类加载的过程 <a class="header-anchor" href="#类加载的过程" aria-label="Permalink to &quot;类加载的过程&quot;">​</a></h2><p>类加载的过程可以分为以下三个阶段：</p><h3 id="_1-加载阶段" tabindex="-1">1.加载阶段 <a class="header-anchor" href="#_1-加载阶段" aria-label="Permalink to &quot;1.加载阶段&quot;">​</a></h3><p>在加载阶段，JVM会根据类的全限定名（例如：com.example.MyClass）来读取相应的class文件，并将其转换为JVM内部的Class对象。在这个过程中，JVM并不会执行任何的class代码。</p><h3 id="_2-连接阶段" tabindex="-1">2.连接阶段 <a class="header-anchor" href="#_2-连接阶段" aria-label="Permalink to &quot;2.连接阶段&quot;">​</a></h3><p>在连接阶段，JVM会进行以下三个步骤：</p><ul><li>验证：JVM会对class文件进行验证，以确保其符合JVM规范并且不包含任何安全漏洞。</li><li>准备：JVM会为类变量分配内存并设置默认初始值。例如：对于一个static int类型的变量，JVM会为其分配内存并将其初始值设置为0。</li><li>解析：JVM会将类中的符号引用转换为直接引用。例如：将一个变量名转换为其在内存中的地址。</li></ul><h3 id="_3-初始化阶段" tabindex="-1">3.初始化阶段 <a class="header-anchor" href="#_3-初始化阶段" aria-label="Permalink to &quot;3.初始化阶段&quot;">​</a></h3>',11)),r("p",null,[a[1]||(a[1]=e("在初始化阶段，JVM会执行类构造器")),i(t,null,{default:n(()=>a[0]||(a[0]=[e("()方法中的代码。类构造器")])),_:1}),a[2]||(a[2]=e("()方法是Java中的静态构造器，用于执行类变量的初始化和静态代码块的代码。"))]),a[4]||(a[4]=s('<h2 id="类加载器" tabindex="-1">类加载器 <a class="header-anchor" href="#类加载器" aria-label="Permalink to &quot;类加载器&quot;">​</a></h2><p>类加载器是Java中的重要概念之一，它用于加载类文件并创建类的Class对象。在Java中，有三种类型的类加载器：</p><h3 id="_1-bootstrap-classloader" tabindex="-1">1.Bootstrap ClassLoader <a class="header-anchor" href="#_1-bootstrap-classloader" aria-label="Permalink to &quot;1.Bootstrap ClassLoader&quot;">​</a></h3><p>Bootstrap ClassLoader是Java中最顶层的类加载器，它负责加载Java的核心类库。Bootstrap ClassLoader是用C++编写的，因此无法通过Java代码直接调用它的方法。</p><h3 id="_2-extension-classloader" tabindex="-1">2.Extension ClassLoader <a class="header-anchor" href="#_2-extension-classloader" aria-label="Permalink to &quot;2.Extension ClassLoader&quot;">​</a></h3><p>Extension ClassLoader是Java中的扩展类加载器，它负责加载Java的扩展类库。Java的扩展类库位于$JAVA_HOME/lib/ext目录下。Extension ClassLoader是由Java编写的，因此可以通过Java代码直接调用它的方法。</p><h3 id="_3-system-classloader" tabindex="-1">3.System ClassLoader <a class="header-anchor" href="#_3-system-classloader" aria-label="Permalink to &quot;3.System ClassLoader&quot;">​</a></h3><p>System ClassLoader是Java中的系统类加载器，它负责加载应用程序的类文件。在默认情况下，所有使用ClassLoader.getSystemClassLoader()方法获取的类加载器都是System ClassLoader的实例。System ClassLoader是由Java编写的，因此可以通过Java代码直接调用它的方法。</p><h2 id="类的加载顺序" tabindex="-1">类的加载顺序 <a class="header-anchor" href="#类的加载顺序" aria-label="Permalink to &quot;类的加载顺序&quot;">​</a></h2><p>Java类加载器可以将类文件加载到内存中，并将其转换为Java对象。Java中的类加载器采用的是委托模型，即在类的加载过程中，每个类加载器都会先请求其父类加载器加载类，如果父类加载器无法加载，则尝试自己加载。</p><p>Java类加载器的加载过程分为三个步骤：加载、链接和初始化。其中，加载是指将class文件加载到内存中；链接是指将class文件转换为可执行代码，包括验证、准备和解析；初始化是指执行类的静态初始化代码。</p><p>Java类加载器有四种类型：引导类加载器、扩展类加载器、系统类加载器和用户自定义类加载器。其中，引导类加载器是最顶层的类加载器，它负责加载Java的核心类库；扩展类加载器负责加载Java的扩展类库；系统类加载器负责加载应用程序的类文件；用户自定义类加载器负责加载用户自定义的类文件。</p>',12))])}const x=o(_,[["render",p]]);export{C as __pageData,x as default};

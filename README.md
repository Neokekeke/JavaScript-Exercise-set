# JavaScript-Exercise-set
JavaScript练习集
CSS练习集

个人的前端知识练习记录，总结。

前端性能优化：

# 1、http缓存（304），请求header包括response header(etag ，last-modified) 和 request header(If-Modified-Since)
其中目的是利用了浏览器的缓存机制，从第一次浏览器请求服务器资源，第一次拿到资源后会对资源在一定时间内进行缓存，(强制缓存和对比缓存)
在一段时间内服务器资源未发生改变，下一次再请求服务器资源时，

（1）强制缓存是指在本地有缓存了，就使用本地的缓存，不再请求服务器

（2）对比缓存是通过etag ，last-modified字段去服务器对比If-Modified-Since时间字段，如果服务器资源发生变化，则强制刷新页面重新拉取服务器资源，再缓存到本地。

# 2、http2.0(网页渲染速度的优化)和https

（1）多路复用，即单个连接上同时进行多个业务单元数据的传输。

（2）二进制分帧：HTTP 2.0 的所有帧都采用二进制编码

（3）请求优先级
    服务器可以根据流的优先级，控制资源分配（CPU、内存、带宽），而在响应数据准备好之后，优先将最高优先级的帧发送给客户端。
    
（4）header压缩 
     HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP/2使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了  重复header的传输，又减小了需要传输的大小。
     
（5）服务端推送 
    服务端推送能把客户端所需要的资源伴随着index.html一起发送到客户端，省去了客户端重复请求的步骤。正因为没有发起请求，建立连接等操作，所以静态资源通过服务端推送的方式可以极大地提升速度。

# 3、jquery的作用，相比js

jquery能兼容低版本的ie浏览器这也是它的一个特点，链式操作等

# 4、模块化，es6怎么实现的模块化，require.js是在es6之前怎么实现的模块化，common.js为什么不能运行在前端

es6 （import，export）

require.js（require() , define()）

common.js （浏览器没有node提供的环境不能执行common.js，通过闭包立即执行,提供module，export，module.export这几个变量）

# 5、es6的一些新特性，比如let的作用，TDZ是什么（也就是变量在一个块内未声明就不能直接赋值使用，暂时性死区）

# 6、webpack的理解

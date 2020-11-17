import React from 'react';
import { ThunderboltOutlined, EllipsisOutlined, TagsOutlined } from '@ant-design/icons'

import "./appdetails.scss";

import AppFoot from "../../components/AppFoot"
import { Flex } from 'antd-mobile';

function Appdetails() {
    return (
        <div className="appdetails-box">
            <article style={{ background: '#ffffff' }}>
                <div className="article-header">
                    <div className="article-banner">
                        <img src="https://cdn.sspai.com/2020/11/11/9846ac0e39e0f0abc9080b185007146d.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!750x412r/gravity/Center/crop/750x412/interlace/1" alt="" />
                    </div>
                    <div className="articleWidth-content">
                        <div className="article-title">
                            如何自己动手，给真无线蓝牙耳机改装无线充电？
                        </div>
                        <div className="article-author">
                            <div className="author-box">
                                <div className="article-header-author">
                                    <div className="avatar">
                                        <img src="https://cdn.sspai.com/2020/05/31/65cc0130969128e35b919621b28007fd.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64/interlace/1" alt="" />
                                    </div>
                                    <span className="nickname">
                                        极客Geeking
                                    </span>
                                </div>
                                <div className="timer">
                                    11月11日
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-body">
                    <div className="articleWidth-content">
                        <div className="wangEditor-txt">
                            {/* 来自数据请求 */}
                            <p>不支持无线充电的蓝牙耳机还能叫真无线吗？——我觉得不能。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/eaad9f5375862d4e533ca361967e00aa?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1603888845786.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/eaad9f5375862d4e533ca361967e00aa" /></figure><p>在半个多月前，我入手了这款西圣 Ares 真无线蓝牙耳机，这也是我用的第一款真无线蓝牙耳机，通过这段时间的使用体验，最大的感受就是性价比很能打，综合表现尚可，但是它并不支持无线充电功能，这也是目前我在实际使用体验中感受到这款耳机的最大短板。</p><p>既然耳机厂商不给做，那就自己加装，改装一个真正的真无线蓝牙耳机其实并不难，为耳机充电仓内部加装一个无线充电接收模块，然后配合无线充电器就可以实现无线充电啦！</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/6a6b0c83c9ea20aec9adbb97fb7406bd?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604929022458.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/6a6b0c83c9ea20aec9adbb97fb7406bd" /></figure><p>正文开始，以下是为真无线蓝牙耳机改装无线充电的详细过程，也是完整教程。</p><p>以下内容主要包括「必要的准备」「拆解充电仓」「焊接导线」「组装还原」「上电测试」和「常见问题解答 FAQ」六大部分。</p><h2>一、必要的准备</h2><p>首先需要准备好无线充电接收模块、电烙铁、合适的螺丝刀等元器件和工具。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/1702a3e716a97f746a3ba7f6e1ffcefe?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604927584231.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/1702a3e716a97f746a3ba7f6e1ffcefe" /></figure><p> </p><p><strong>➀ 无线充电接收模块</strong></p><p>这也是给蓝牙耳机改装无线充电需要准备的核心元器件，正是由它接收无线充电器发出的电磁波并转化为电能，然后供给充电仓的。这个无线充电接收模块在某宝很容易就能买到，要根据充电仓的内部结构和尺寸选择合适大小的模块，所以建议在购买之前拆开充电仓，对要购买模块的尺寸和安装位置有个初步了解。</p><p> </p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/bb4deb0fff72a6e8bf410cd827d70afd?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="原理图.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/bb4deb0fff72a6e8bf410cd827d70afd" /><figcaption>电磁感应无线充电原理示意图</figcaption></figure><p>以我这次改装为例，买的是如下图这种模块，电路板尺寸 15×10×1.3mm，接收线圈尺寸外径 24mm，内径 8mm，厚度 0.5mm。一般类如这样尺寸的接收模块也可以适用于绝大多数无线蓝牙耳机充电仓的改装。这个模块输出电压电流5V/0.6A，最高功率 3W。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/cc414ae125c4221cc61236fe76e5b08d?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/cc414ae125c4221cc61236fe76e5b08d" /></figure><p>除了电路板和接收线圈，隔磁片也是必不可少的一个元器件，购买模块时一般会赠送，如下图黑色圆片状的就是。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/492d864ad71b96746803c0839fc50038?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="2.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/492d864ad71b96746803c0839fc50038" /></figure><p> </p><p>隔磁片有三大重要作用：导磁+挡磁+导热。导磁是为了使无线充电效率最大化；挡磁是为了避免无线充电器发出的交变电磁场对充电仓和耳机的电路产生干扰；导热是为了有效把接收线圈的发热传导至周围导热介质。</p><p><strong>➁ 电烙铁</strong></p><p>这个没什么要展开说的，也不需要很大功率，例如我用的 40W 功率就完全够用，还有焊锡也不可缺少。</p><p><strong>➂ 螺丝刀</strong></p><p>只要是合适规格的螺丝刀就可以，一般需要准备十字的。</p><p><strong>➃ </strong>其它的一些辅助工具，比如胶带和双面胶等，具体用处下文会讲到。</p><h2>二、拆解充电仓</h2><p>把必要的准备做好，下面就可以动手拆解充电仓了。</p><p><strong>1、打开内部结构</strong></p><p>首先观察充电仓的外部结构，主要结构一般有三个部分，最上面的活动盖、盆状底盒以及中部的固定盖板，从固定盖板作为突破口打开充电仓。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/9a0159e95220110b910cd3cfb7a5894e?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="3.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/9a0159e95220110b910cd3cfb7a5894e" /></figure><p>而且绝大多数充电仓的固定盖板与底盒的固定方式都是卡扣方式，使用翘片或者硬卡片很容易就能打开，这一步需要一点技巧和耐心，切不可大力出奇迹。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/cbd2dd442f2dcaac44ba62cc1634c04e?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604994117897.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/cbd2dd442f2dcaac44ba62cc1634c04e" /></figure><p><strong>2、取出电路板</strong></p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/0aa9574e86e52c22c7271716b3875335?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604928939042.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/0aa9574e86e52c22c7271716b3875335" /></figure><p>电路板一般是采用螺丝固定方式，所以需要使用合适规格的螺丝刀拧下即可，然后一并取出电路板和导线。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/c3ccdba7253bcacb5b32d98ba75c0185?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604929139862.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/c3ccdba7253bcacb5b32d98ba75c0185" /></figure><p><strong>3、取出配重块</strong></p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/35f11ecf3f5dd793b4b3374bf5501178?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="4.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/35f11ecf3f5dd793b4b3374bf5501178" /></figure><p>某些真无线蓝牙耳机的充电仓为了平衡重量，在底部还会有一个配重块。金属块会直接影响无线充电器的正常工作，更无法进行无线充电，甚至损坏无线充电器。所以对于含有配重块的充电仓，一定要拿出配重块。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/6beef4b2560b9164ed521e7e3f24973d?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604982779687.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/6beef4b2560b9164ed521e7e3f24973d" /></figure><p>就比如我拆解的这个充电仓就是如此，而且配重块体积还不小，看了一下是用胶水和底部固定的，尝试了很多次从正面拿不掉，改装过程遇到了一点小阻碍，不过还是想到一个办法：在充电仓底部钻一个小孔，然后用螺丝刀从底部下手把配重块顶出来，实践也证实这方法完全可行，不过就是在底部留下了一个小孔，当然如果有热熔胶的话，之后再封堵上即可。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/d2f1f6368d80b45e8d0e4539675ab4d8?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604983132979.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/d2f1f6368d80b45e8d0e4539675ab4d8" /></figure><p>取出配重块之后要清理充电仓底部残留的固定胶，尽量保持底部平整。</p><h2>三、焊接导线</h2><p>把耳机仓中的电路板和导线取出，再拿出准备好的无线充电接收模块，准备焊接，这一步需要用到电烙铁。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/b3df297fdef54fe851b0f6f157a90929?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="5.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/b3df297fdef54fe851b0f6f157a90929" /></figure><p>无线充电接收模块电源输出有 2 根导线，分别为正极和负极。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/a6400033c9de5df3aa6a65041c2c3844?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604994494582.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/a6400033c9de5df3aa6a65041c2c3844" /></figure><p>再观察充电仓的电路板，从主电路板引出的有 2 对导线，一组连接到电池，一组连接到充电小板。简单的电学常识，应该把无线充电接收模块的电源输出导线和后者并联，也就是和连接充电小板的那组导线连接到一起。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/6b19bb6245274f5960c8666d3fdc38a5?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="6.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/6b19bb6245274f5960c8666d3fdc38a5" /></figure><p>这样既可以实现无线充电功能也不会影响到原本的 USB -C 有线充电。</p><p>连接导线要注意正极-正极、负极-负极要分别连接对应，切不可接反，而且建议在正式焊接之前试接导线，然后把线圈放置到无线充电器上看充电仓是否可以正常无线充电，如果顺利的话，后面就可以开始焊接导线了。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/962d4c66f8e62d596a43c27349953b90?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604995261464.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/962d4c66f8e62d596a43c27349953b90" /><figcaption>焊接导线完成！</figcaption></figure><p>焊接导线是改装全过程中最重要也是相对较难的一步，需要一点的技巧，使用电烙铁焊接过程中需要注意不能使正负极焊锡相互接触，否则会造成短路。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/13b52fe662ffd85f524698f4d72718e9?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604995261447.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/13b52fe662ffd85f524698f4d72718e9" /><figcaption>导线焊接特写</figcaption></figure><p>我已经好久没用过电烙铁了，焊得不是很好，望轻喷。</p><h2>四、组装还原</h2><p>把导线焊接好以后就可以开始组装充电仓了。</p><p><strong>1、安装接收线圈和隔磁片</strong></p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/6acccf7ccf815dc9cc300009b325f12a?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604996053845.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/6acccf7ccf815dc9cc300009b325f12a" /></figure><p>这一步使用双面胶分别把这两个元件分层固定到充电仓底部即可。这两个元件也是安装过程中最需要注意的，前面也介绍到了，隔磁片具有导磁+挡磁+导热的重要作用，所以在安装时，要把线圈置于最底端，上面一层才是隔磁片，也就是隔磁片相对于线圈，距离无线充电器较远。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/9397d1a3c183e3e4419e93465851c903?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604996118844.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/9397d1a3c183e3e4419e93465851c903" /></figure><p>由于我这个耳机充电仓底部开了小孔，而且还没有热熔胶，所以就用透明胶和双面胶在底部多贴了几层，这样就可以充分保证内部不会进入异物和灰尘了。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/30c626147f8d41cc6443190aade11b78?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604995838825.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/30c626147f8d41cc6443190aade11b78" /></figure><p><strong>2、</strong>安装还原电路板和盖板等部分，这一步是前文拆解的逆向应用，所以就同理可得，不再赘述。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/e1c78abd5126d5e7cc682911de7aad5d?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604996429842.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/e1c78abd5126d5e7cc682911de7aad5d" /></figure><p>这里有一点需要注意的是由于模块在工作时，线圈和电路板都会发热，所以为了避免两者相互影响，安装位置应尽量错开。</p><h2>五、上电测试</h2><p>这也是改装的最后一步。在正式安装固定盖之前建议先上电测试一下，如下图充电指示灯闪烁，代表无线充电正常。之后就可以安装固定盖了。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/651defb3a3a8066b8cc403108dd84ff7?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604996661081.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/651defb3a3a8066b8cc403108dd84ff7" /></figure><p>这一无线充电接收模块支持 Qi 无线充电协议，所以搭配任意支持 Qi 协议的无线充电器使用均可，我使用的是小米 20W 风冷无线充电器，也就是 2019 年 2 月份小米 9 发布会上发布的那款。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/017b24abaf75205b967d1d24e03deef8?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="捕获.JPG" data-original="https://cdn.sspai.com/2020/11/11/article/017b24abaf75205b967d1d24e03deef8" /></figure><p>（《小米 20W 风冷无线充电器完整开箱评测体验》正在做了，敬请期待~）</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/714efffb6ee93e8fcda52c734634ba31?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1604997337854.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/714efffb6ee93e8fcda52c734634ba31" /></figure><p>最终成品如上图所示。给无线充电器插上小米 65W 氮化镓充电器，然后把耳机和充电仓放置到无线充电器面板上，充电仓指示灯开始闪烁，至此改装无线充圆满成功！</p><p>小米65W 氮化镓充电器深度开箱评测体验传送门：</p><span class="ss-linkCard" link-card-href="https://sspai.com/post/63328"> </span><p>在充电仓低电量状态下，无线充电器输入电压电流 12V/0.25A，功率约为 3W，这个充电仓有线充电的输入电压电流为 5V/0.3A，最大功率约 1.5W。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/c9a3b8be96f9fc355c1b57975bb34899?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="7.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/c9a3b8be96f9fc355c1b57975bb34899" /></figure><h2>六、常见问题解答 FAQ</h2><p>以下是前 2 天发出那条改装无线充电的动态之后，评论和私信问到最多的问题的汇总和解答，也很有代表性。</p><p>1、无线充电接收模块电源输出的 2 根线和哪里并联？</p><p>——和充电仓电路板电源输入端并联，注意正负极分别对应，切不可并联到电池部分。关于这里前文还有详细讲解。</p><p>2、无线充电接收模块最高功率 3W，20W 或者更高功率的无线充能用吗？</p><p>——能，别说 20W，即使是目前商用最高的 55W 无线充都能正常用。</p><p>这就和「65W 充电器能充 iPhone 12 吗？」本质上是一个问题，不论无线充最高功率是多少，模块的实际最高功率也是取决于自身能支持的数值。</p><p>3、充电仓要加降压模块吗？</p><p>——由前面的问题 2 可得完全不用加。</p><p>4、无线充给充电仓进行无线充电的兼容性问题？</p><p>——无线充电接收模块支持 Qi 充电标准，所以无线充只要支持 Qi 协议就能给充电仓无线充电。</p><p>5、充电仓 USB-A 接口能改装 USB-C 接口吗？</p><p>——能，方法由上文改装无线充电同理可得。</p><p>给耳机充电仓改装无线充电后，充电从此就方便了很多，放到无线充上就能开始充电的便捷性，那就是谁用谁知道啊！万物皆可无线化，其实不仅仅是真无线蓝牙耳机。</p><figure class="image ss-img-wrapper"><img src="https://cdn.sspai.com/2020/11/11/article/870424ddd6a41a1059fd753efc392e76?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="1605000300967.jpg" data-original="https://cdn.sspai.com/2020/11/11/article/870424ddd6a41a1059fd753efc392e76" /></figure><p>以上就是给真无线蓝牙耳机改装无线充电详细教程的全部内容，这篇教程写得贼累，原创不易，你们的点赞关注收藏转发就是对我最大的支持，感谢！</p><p>&gt; 下载少数派 <a href="https://sspai.com/page/client">客户端</a>、关注 <a href="https://sspai.com/s/J71e">少数派公众号</a>，找到数字时代更好的生活方式 🎊</p><p>&gt; 特惠、好用的硬件产品，尽在 <a href="https://shop549593764.taobao.com/?spm=a230r.7195193.1997079397.2.2ddc7e0bPqKQHc">少数派sspai官方店铺</a> 🛒</p>
                        </div>
                    </div>
                </div>
                <div className="article-copyrights">
                    <div className="followUpAdmin">
                        <span className="nickname">
                            本文责编：@会飞的三羊店长
                        </span>
                    </div>
                </div>
                <div className="article-tag">
                    <div className="tag-container">
                        <a>
                            <span className="">
                                #
                            </span>
                            Matrix首页推荐
                        </a>
                    </div>
                </div>
                <div className="article-actionBar">
                    <div className="charge-btn">
                        <ThunderboltOutlined className="icon-charge" />
                        <span className="count">14</span>
                    </div>
                    <div className="charge-user">
                        <TagsOutlined className="icon-charge" />
                        <EllipsisOutlined className="icon-charge" />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="article-author">
                    <div style={{display:'flex'}}>
                        <div className="avatar">
                            <img src="https://cdn.sspai.com/2020/05/31/65cc0130969128e35b919621b28007fd.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!100x100r/gravity/Center/crop/100x100/interlace/1" alt=""/>
                        </div>
                        <div className="container">
                            <div className="nickname">
                                极客Geeking
                                <span>
                                    <img className="matrix_writer_active" src="https://cdn.sspai.com/ui/badge/matrix_zuozhe.png" alt=""/>
                                </span>
                            </div>
                            <div className="bio">
                                会写文章会做视频的学生里最好学的科技数码自媒体。
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div className="advertisement-box">
                <img src="https://cdn.sspai.com/article/43d1717d-37f6-8824-e4e1-e2c36758cd52.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1096x252r/gravity/Center/crop/1096x252/interlace/1" alt=""/>
            </div>
            <AppFoot />
        </div>
    )
}

export default Appdetails
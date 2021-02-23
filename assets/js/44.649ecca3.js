(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{409:function(r,a,e){"use strict";e.r(a);var t=e(40),s=Object(t.a)({},(function(){var r=this,a=r.$createElement,e=r._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"《深入浅出docker》"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《深入浅出docker》"}},[r._v("#")]),r._v(" 《深入浅出Docker》")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://training.play-with-docker.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Play with Docker"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("这本书读起来挺难的，大概是因为我缺乏后端和运维的经验，所以容器化每一步不知道怎么回事。在补充了Linux知识和稍微部署一些小项目再翻阅一下。")]),r._v(" "),e("p",[r._v("用时：2小时51分 2020年7月12日")]),r._v(" "),e("h2",{attrs:{id:"第1章-容器发展之路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第1章-容器发展之路"}},[r._v("#")]),r._v(" 第1章  容器发展之路")]),r._v(" "),e("p",[r._v("Kubernetes是保证容器部署和运行的软件体系中很重要的一部分。")]),r._v(" "),e("h2",{attrs:{id:"第2章-走进docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第2章-走进docker"}},[r._v("#")]),r._v(" 第2章  走进Docker")]),r._v(" "),e("p",[r._v("Docker公司的一个核心哲学通常被称为“含电池，但可拆卸”。意思是许多Docker内置的组件都可以替换为第三方的组件，网络技术栈就是一个很好的例子。")]),r._v(" "),e("p",[r._v("Docker内置的“电池”仍然是可插拔的，然而越来越不需要将它们移除了。")]),r._v(" "),e("p",[r._v("虽然竞争是一件好事，但是标准的竞争通常不是。因为它会导致困扰，降低用户接受度，对谁都无益。")]),r._v(" "),e("p",[r._v("考虑到这一点，所有相关方都尽力用成熟的方式处理此事，共同成立了OCI——一个旨在管理容器标准的轻量级的、敏捷型的委员会。")]),r._v(" "),e("p",[r._v("OCI已经发布了两分规范（标准）：镜像规范和运行时规范。")]),r._v(" "),e("h2",{attrs:{id:"第3章-docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第3章-docker安装"}},[r._v("#")]),r._v(" 第3章  Docker安装")]),r._v(" "),e("p",[r._v("Mac版Docker只能运行基于Linux的Docker容器。")]),r._v(" "),e("h2",{attrs:{id:"第4章-纵观docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第4章-纵观docker"}},[r._v("#")]),r._v(" 第4章 纵观Docker")]),r._v(" "),e("p",[r._v("在运维视角中，主要包括下载镜像、运行新的容器、登录新容器、在容器内运行命令，以及销毁容器。")]),r._v(" "),e("p",[r._v("在开发视角中，更多关注与应用相关的内容。本书会从Github拉取一些应用代码，解释其中的Dockerfile，将应用容器化，并在容器中运行它们。")]),r._v(" "),e("p",[r._v("Docker世界中，镜像实际上等价于未运行的容器。如果读者是一名开发者，可以将镜像比作类。")]),r._v(" "),e("p",[r._v("docker container run告诉Docker daemon启动新的容器。")]),r._v(" "),e("h2",{attrs:{id:"第5章-docker引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第5章-docker引擎"}},[r._v("#")]),r._v(" 第5章  Docker引擎")]),r._v(" "),e("h2",{attrs:{id:"第6章-docker镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第6章-docker镜像"}},[r._v("#")]),r._v(" 第6章  Docker镜像")]),r._v(" "),e("p",[r._v("镜像由多个层组成，每层叠加之后，从外部看来就如一个独立的对象。镜像内部是一个精简的操作系统（OS），同时还包含应用运行所必须的文件和依赖包。因为容器的设计初衷但就是快速和小巧，所以镜像通常都比较小。")]),r._v(" "),e("p",[r._v("一旦容器从镜像启动后，二者之间就变成了相互依赖的关系，并且在镜像上启动的容器全部停止之前，镜像是无法被删除的。")]),r._v(" "),e("p",[r._v("容器的目的就是运行应用或者服务，这意味着容器中的镜像中必须包含应用/服务运行所必需的操作系统和应用文件。")]),r._v(" "),e("p",[r._v("镜像中还不包含内核——容器都是共享所在Docker主机的内核。所以有时会说容器仅包含必要的操作系统（通常只有操作系统文件和文件系统对象）。")]),r._v(" "),e("p",[r._v("Docker镜像存储在镜像仓库服务当中。Docker客户端的镜像仓库服务是可配置的，默认使用Docker Hub。")]),r._v(" "),e("p",[r._v("一个镜像可以根据用户需要设置多个标签。这是因为标签是存放在镜像元数据中的任意数字或字符串。")]),r._v(" "),e("p",[r._v("latest是一个非强制标签，不保证指向仓库中最新的镜像！")]),r._v(" "),e("h2",{attrs:{id:"第7章-docker容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第7章-docker容器"}},[r._v("#")]),r._v(" 第7章  Docker容器")]),r._v(" "),e("p",[r._v("Hypervisor是硬件虚拟化——hypervisor将硬件物理资源划分为虚拟资源；另外，容器是操作系统虚拟化（OS Virtualization）——容器系统资源划分为虚拟资源。")]),r._v(" "),e("p",[r._v("因为容器并不是完整的操作系统，所以其启动要远比虚拟机快。")]),r._v(" "),e("p",[r._v("停止容器运行并不会损毁容器或者其中的数据。")]),r._v(" "),e("h2",{attrs:{id:"第8章-应用的容器化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第8章-应用的容器化"}},[r._v("#")]),r._v(" 第8章  应用的容器化")]),r._v(" "),e("h2",{attrs:{id:"第9章-使用dockers-compose部署应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第9章-使用dockers-compose部署应用"}},[r._v("#")]),r._v(" 第9章  使用Dockers Compose部署应用")]),r._v(" "),e("h2",{attrs:{id:"第10章-docker-swarm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第10章-docker-swarm"}},[r._v("#")]),r._v(" 第10章  Docker Swarm")]),r._v(" "),e("p",[r._v("Docker Swarm是使Docker规模化的关键方案。")]),r._v(" "),e("h2",{attrs:{id:"第11章-docker网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第11章-docker网络"}},[r._v("#")]),r._v(" 第11章  Docker网络")]),r._v(" "),e("h2",{attrs:{id:"第12章-docker覆盖网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第12章-docker覆盖网络"}},[r._v("#")]),r._v(" 第12章  Docker覆盖网络")]),r._v(" "),e("h2",{attrs:{id:"第13章-卷与持久化数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第13章-卷与持久化数据"}},[r._v("#")]),r._v(" 第13章 卷与持久化数据")]),r._v(" "),e("p",[r._v("docker volume prune会删除未装入某个容器或者服务的所有卷，所以谨慎使用！")]),r._v(" "),e("h2",{attrs:{id:"第14章-使用docker-stack部署应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第14章-使用docker-stack部署应用"}},[r._v("#")]),r._v(" 第14章  使用Docker Stack部署应用")]),r._v(" "),e("p",[r._v("Docker Stack和Docker Compose的一个区别是，Stack不支持构建。这意味着在部署Stack之前，所有镜像必须提前构建完成。")]),r._v(" "),e("p",[r._v("所有的变更都应该通过Stack文件进行声明，然后通过docker stack deploy进行部署。")]),r._v(" "),e("h2",{attrs:{id:"第15章-docker安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第15章-docker安全"}},[r._v("#")]),r._v(" 第15章 Docker安全")]),r._v(" "),e("p",[r._v("安全本质就是分层！通俗地讲，拥有更多的安全层，就能拥有更多的安全性。")]),r._v(" "),e("p",[r._v("Linx Docker利用了大部分Linux通用的安全技术。这些技术包括了命名空间（Namespace）、控制组（CGroup）、系统权限（Capability），强制访问控制（MAC）系统以及安全计算（Seccomp）。")]),r._v(" "),e("h2",{attrs:{id:"第16章-企业版工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第16章-企业版工具"}},[r._v("#")]),r._v(" 第16章  企业版工具")]),r._v(" "),e("p",[r._v("如果HA集群下仅丢失某个管理节点，并不需要从备份进行恢复。")]),r._v(" "),e("h2",{attrs:{id:"第17章-企业级特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第17章-企业级特性"}},[r._v("#")]),r._v(" 第17章  企业级特性")])])}),[],!1,null,null,null);a.default=s.exports}}]);
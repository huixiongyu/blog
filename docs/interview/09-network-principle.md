# 网络原理

## 1.七层模型和五层模型
**七层模型：**
1. 应用层：文件传输，电子邮件，文件服务，虚拟终端 TFTP，HTTP，SNMP，FTP，SMTP，DNS，Telnet 
2. 表示层：数据格式化，代码转换，数据加密 没有协议 
3. 会话层：解除或建立与别的接点的联系 没有协议  
4. 传输层：提供端对端的接口 TCP，UDP 
5. 网络层：为数据包选择路由 IP，ICMP，RIP，OSPF，BGP，IGMP 
6. 数据链路层：传输有地址的帧以及错误检测功能 SLIP，CSLIP，PPP，ARP，RARP，MTU 
7. 物理层：以二进制数据形式在物理媒体上传输数据 ISO2110，IEEE802，IEEE802.2

**五层模型：**
1. 应用层
2. 运输层
3. 网络层
4. 数据链路层
5. 物理层

![mark](http://qiniu.hackslog.cn/blog/20190524/zl8PnlsLoLLm.png?imageslim)

![mark](http://qiniu.hackslog.cn/blog/20190524/XykpljvcnHBh.png?imageslim)

## TCP 的重传机制？
TCP要保证所有的数据包都可以到达，所以，必需要有重传机制。
**超时重传机制：** 就是发送端死等接收端的ack，直到发送端超时之后，在发送一个包，直到收到接收端的ack为止。

**快速重传机制：**这个机制不以时间为驱动，而是以数据来重传！如果接收端包收包没有连续到达，就ACK最后那个可能被丢了的包，如果发送方连续收到接收端3次相同的ack，就重传。

相关知识：
TCP慢启动
拥塞避免算法
[TCP的超时重传机制与拥塞避免](https://blog.csdn.net/ahafg/article/details/51058467)

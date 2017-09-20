
function helptext(page){
        var txt = "</td></tr>";
        
        switch(page){
          

        	
/*单段说明*/




case 'ipaddress':
//txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;DHCP：选择单选框表示启用DHCP功能，不选表示禁用DHCP功能。启用DHCP后，交换机将从网络中的DHCP Server获得IP地址，若网络中不存在DHCP Server，或有其它原因导致IP地址获取失败，则无法使用IP地址访问交换机。    </td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;IP地址：用于设置和显示系统当前的IP地址，默认为192.168.1.100 </td></tr>";	 
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;子网掩码：用于设置和显示系统当前的子网掩码，默认为255.255.255.0。</td></tr>";	 
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;网关：用于设置和显示系统的网关地址，默认为0.0.0.0。</td></tr>";	 
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;首选DNS：用于设置和显示系统的首选DNS，默认为218.2.135.1。 </td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;备用DNS：用于设置和显示系统的备用DNS，默认为0.0.0.0。 </td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;管理VLAN：用于设置和显示系统的管理VLAN，默认为1。 </td></tr>";	
break;	 
			 
/****************************************************************/
case 'admin':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;用户名：用于显示访问系统的用户名。</td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;权限：用于显示系统用户的管理权限，分为管理员权限—Administrator，普通用户权限—User。日志用户权限—Logger。</td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;编辑/删除：用于修改用户密码和删除用户。 </td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;此操作请注意以下几条限制： <br>  &nbsp;&nbsp;修改密码设置只能用于当前用户。<br>&nbsp;&nbsp;删除只能是具有管理员权限的用户才可以操作。<br> &nbsp;&nbsp;系统默认的admin和guest logger用户不能删除，只能修改密码。</td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;新增用户：用于添加系统的管理用户，并分配相应的管理权限，只有管理员才可以添加用户。点击“添加用户”按钮就可以进入“添加用户”界面 </td></tr>";	   
break;	
			 
			 
			 
case 'addadmin':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;密码：用于设置管理用户的密码。密码由8~16 bytes的NVT ASCII字符(8-16)组成。                                    </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;确认密码：用于确认用户的密码设置，以防输入错误造成设置的密码不可知。                                           </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;权限：用于设置系统用户的管理权限，分为管理员权限—Administrator；普通用户权限—User    </td></tr>";	
	         break;
			 
case 'modifyPassword':
		txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;用于修改用户密码。 </td></tr>";	
	         break;
	
	
			 
case 'dos_attack':
		txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;用于DoS攻击防御。 </td></tr>";	
	         break;
		


case 'portsecurity':
		txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;用于端口安全。 </td></tr>";	
	         break;
			 
case 'acl':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;模式：设置是否启用ACL功能。</td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;List ID：ACL List 编号，二层：4000~4999。                                                            </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;匹配顺序：包括Config和Auto。config:默认方式显示， auto:里面的规则将会按照一定的规则显示。 </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ACL类型:包括二层这一种类型。        </td></tr>";	
	 	         break;
			 
			 
case 'aclrule_config':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;添加规则：为ACL List添加相应的规则。      </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;删除：删除相应的ACL List。                   </td></tr>";	
		 	         break;
			 
case 'gmrp':
		txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;用于启用、禁用gmrp端口状态。 </td></tr>";	
	         break;			 
						 
case 'mirror':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;是否启用：用于启用系统的端口镜像功能。                                                                                        </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;镜像端口：用于监控的那个端口，被镜像端口的数据都会被复制到此端口。                                                            </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;入口比率：在入口方向，复制到镜像端口的数据流量占该端口全部流量的比例，实际被镜像的流量等于入口比例的倒数乘以该端口的总流量。  </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;出口比率：在出口方向，复制到镜像端口的数据流量占该端口全部流量的比例，实际被镜像的流量等于出口比例的倒数乘以该端口的总流量。  </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;被镜像端口：被监控的端口。                                                                                                    </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;入口方向：表示监控入口方向的数据。                                                                                            </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;出口方向：表示监控出口方向的数据。                                                                                            </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;监控模式：All：表示监控被镜像端口的全部数据。                                                                                 </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;目的MAC：监控以此mac为目的mac的数据。                                                                                         </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;源MAC：监控以此mac为源mac的数据。                                                                                 						</td></tr>";	
	         break;
	
	
case 'sntp':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;模式：用于启用和禁用系统的SNTP功能。     </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;首选服务器：用于配置SNTP的首选服务器。   </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;备用服务器：用于配置SNTP的备用服务器。   </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;时区：用于设置系统的时区。               </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;系统时间配置：用于配置系统的日期和时间。 </td></tr>";
	
	
         break;	
		 
		 
case 'trunk':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;	此页面用于配置和查看静态汇聚的状态，最多支持二分之一端口数量的组数，每组不少于两个端口。当某个组的某单选框被选中时，表示该端口属于该静态汇聚组。当某端口属于缺省组时，表示该端口不是静态汇聚端口，默认情况下，所有端口都属于缺省组。 </td></tr>";
	
	
         break;			 
		 
			 
case 'alarm':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;电源告警：是否启用电源告警，选中为启用；  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口告警：是否启用端口告警，选中为启用；  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;温度告警：是否启用温度告警，选中为启用；  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;轮询时间：设置每隔多长时间去检测温度是否处于告警期间。  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;基本温度告警高温：设置基本温度告警的高温阀值，高于此温度则发出基本温度告警信息；    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;基本温度告警低温：设置基本温度告警的低温阀值，低于此温度则发出基本温度告警信息；    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;严重温度告警高温：设置严重温度告警的高温阀值，高于此温度则发出严重温度告警信息；    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;严重温度告警低温：设置严重温度告警的低温阀值，低于此温度则发出严重温度告警信息；    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;清除告警：清除所有告警信息。                                                        </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;严重温度告警高温要大于基本温度告警高温，严重温度告警低温要小于基本温度告警低温。    </td></tr>";
	
         break;	
		 


		 
case 'port':

txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;端口：表示交换机的逻辑端口号。 </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;状态：用于设置和显示端口的启用/禁用状态，所有端口默认为启用状态。 </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;连接状态：用于显示端口的连接/断开状态。 </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;类型：用于显示端口的光口/电口类型。 </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;模式：当前模式：用于显示端口当前的速率和双工状态。 </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;配置模式：用于设置和显示端口当前的速率/双工配置状态，配置的模式分为：100M全双工、100M半双工、自适应、10M全双工、10M半双工。  </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;流控：用于配置和显示端口流量控制功能的启用/禁用状态，默认为禁用状态。 </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;丢弃：用于配置和显示端口的丢弃模式状态，默认为None状态，分为以下3种模式：<br> &nbsp;&nbsp;None：表示端口不丢弃任何数据帧。<br> &nbsp;&nbsp;All：表示端口丢弃任何数据帧。<br> &nbsp;&nbsp;Untag：表示端口丢弃所有untag数据帧。 </td></tr>";
	
         break;	
		 
		 
		 
		 
case 'vlan_config':

	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;GVRP:  表示是否启用GVRP。                            </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID：表示交换机中VLAN组的编号。                  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;U：表示该端口是VLAN的成员，而且是该VLAN的untag端口。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;T：表示该端口是VLAN的成员，而且是该VLAN的tag端口。   </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;选择：用于选择某VLAN进行成员端口的编辑。             </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;删除：用于删除某VLAN组。                             </td></tr>";
	
         break;	
		 
		 		 
		 
case 'vlan_port':

txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口：交换机的逻辑端口号。                                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;PVID：端口的VLAN标示，取值范围为：1~4094。                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;优先级：用于设置端口的802.1p优先级，若该端口是某VLAN的成员，那么进入该端口的untag数据帧都会打上tag标记，且tag标记中的802.1p优先级的值就是该端口设置的值。 </td></tr>";
	
         break;	
		 
case 'mac':

txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;老化时间：动态MAC地址条目在MAC地址表中的老化时间，默认为300s。		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;MAC地址：用于添加的静态MAC地址。                              		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID：MAC地址对应的VLAN ID。                               		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口：MAC地址对应的端口号。                                   		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;数量：MAC地址的个数编号。                                     		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;类型：MAC地址在MAC地址表中的类型，分为动态和静态两种。        		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;删除：用于删除MAC地址表中的静态MAC地址。                      		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;特别说明：MAC地址、VLAN ID、端口不配置的情况下，可以单独配置老化时间。</td></tr>";
	
         break;	
		 
case 'mmac':

txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;MAC地址：用于添加的静态多播MAC地址。     </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID：多播MAC地址对应的VLAN ID。      </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口：多播MAC地址对应的端口号。          </td></tr>";    
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;数量：多播MAC地址的个数编号。            </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;提交：用于提交本界面的配置信息。         </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;删除：用于删除MAC地址表中的静态MAC地址。 </td></tr>";
	
         break;	
				 
		 
case 'qos_port':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口：交换机端口的逻辑编号。  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;进限速：用于启用/禁用端口进入方向的速率限制。</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;出限速：用于启用/禁用端口出方向的速率限制。</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;速率：表示端口需要限制到的速率值，其范围为2Mbps以下速率的限制粒度为64kbps，2Mbps以上速率的限制粒度为1024kbps。</td></tr>";

         break;	
		 
case 'qos_portConfig':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;QoS模式：用于启用/禁用系统的QoS功能。</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;调度算法：用于配置系统当前选用的调度算法，分为4WRR队列调度算法、1SP-3WRR队列调度算法、2SP-2WRR队列调度算法、4SP队列调度算法。</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;队列：优先级队列的逻辑编号，系统分为“0~3”共4个队列。  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;权重：用于设置各个队列在单位时间里传输流量的比重，其范围为1~32。 </td></tr>";

         break;	
		 
case 'qos_storm':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口：交换机端口的逻辑编号。 </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;模式：用于设置控制风暴的类型，包括广播、多播和未知单播。</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;抑制速率：用于设置风暴的抑制速率，单位为Kbps 或Mbps，默认为1Mbps。 </td></tr>";

         break;	
		 
case 'qos_config':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;802.1p优先级队列：此部分用于802.1p优先级与队列之间的映射关系，默认情况下，0和1优先级映射0队列，2和3优先级映射1队列，4和5优先级映射2队列，6和7优先级映射3队列。</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;DSCP优先级队列：此部分用于DSCP优先级与队列之间的映射关系，默认情况下，0~15优先级映射0队列，16~31优先级映射1队列，32~47优先级映射2队列，48~63优先级映射3队列。 </td></tr>";

         break;	
		 
case 'stp_systeminfo':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;系统优先级：用于设置系统的优先级，系统默认优先级为“32768”。系统优先级的范围为0~61440；递增粒度为4096；值越小表示优先级越高。</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;最大老化时间：设置生成树配置消息最大生存期。  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;转发延时：设置转发延时。</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;协议版本：用于设置系统当前使用的是stp协议还是rstp协议。 </td></tr>";

         break;	
		 
case 'stp_port':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;stp模式：用于启用/禁用端口的stp功能。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;路径开销：设置路径开销的值，“0”表示该端口处于auto状态。  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;优先级：设置端口优先级。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;边缘端口：边缘端口是指不直接与任何交换机连接，也不通过端口所连接的网络间接与任何交换机相连的端口。用户如果将某个端口指定为边缘端口，那么当该端口由阻塞状态向转发状态迁移时，这个端口可以实现快速迁移，而无需等待延迟时间，系统默认为启用状态。</td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;P2P端口：P2P端口是两台交换机之间直接连接的端口。相连的两个P2P端口，如果端口角色满足一定条件，则可以通过传送同步报文快速迁移到转发状态，减少了不必要的转发延迟时间。可以设置为auto、true、false状态，系统默认为auto状态。                      </td></tr>";

         break;	
		 
case 'stp_port_info':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID：表示交换机中VLAN组的编号。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;桥ID：由桥的优先级和MAC地址组成。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;根桥ID：由根桥的优先级和MAC地址组成。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;根端口：所谓根端口，是指一个非根桥的设备上离根桥最近的端口。根端口负责与根桥进行通信。非根桥设备上有且只有一个根端口，根桥上没有根端口。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;根路径开销:到根桥的最短路径开销。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;拓扑标记：用于显示拓扑当前的状态，分为steady和changing状态。steady表示拓扑已经收敛，处于稳定状态。changing表示拓扑正在改变，处于改变状态。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口角色：分为以下六种：&nbsp;&nbsp;<br>&nbsp;&nbsp;Disabled：表示该端口的STP功能处于禁用状态。&nbsp;&nbsp;<br>&nbsp;&nbsp;Alternate:替换端口。如果一个端口收到另外一个网桥的更好的 BPDU，但不是最好的，那么这个端口成为替换端口。&nbsp;&nbsp;<br>&nbsp;&nbsp;Backup：如果一个端口收到同一个网桥的更好 &nbsp;&nbsp;BPDU，那么这个端口成为备份端口。当两个端口被一个点到点链路的一个环路连在一起时，或者当一个交换机有两个或多个到共享局域网段的连接时，一个备份端口才能存在。&nbsp;&nbsp;<br>&nbsp;&nbsp;Root：非根桥收到最优的BPDU配置信息的端口为根端口，即到根桥开销最小的端口。&nbsp;&nbsp;<br>&nbsp;&nbsp;Designated：根桥上连接非根桥的那个端口，它和根端口对应。&nbsp;&nbsp;<br>&nbsp;&nbsp;Non-STP：表示端口不参与RSTP拓扑计算，直接进入Forwarding 状态。 </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口状态：&nbsp;&nbsp;<br>&nbsp;&nbsp;Disabled：表示该端口的STP功能处于禁用状态。&nbsp;&nbsp;<br>&nbsp;&nbsp;Blocking：表示该端口处于阻塞状态。&nbsp;&nbsp;<br&nbsp;&nbsp;>Listening：表示该端口处于侦听状态。&nbsp;&nbsp;<br>&nbsp;&nbsp;Learning：表示该端口处于学习状态。&nbsp;&nbsp;<br>&nbsp;&nbsp;Forwarding：表示该端口处于转发状态。&nbsp;&nbsp;<br>&nbsp;&nbsp;Non-STP：表示端口不参与RSTP拓扑计算，直接进入Forwarding 状态。                                                                                                                                                                                                                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;路径开销：路径开销是STP协议用于选择链路的参考值。STP协议通过计算路径开销，选择较为“强壮”的链路，阻塞多余的链路，将网络修剪成无环路的树型网络结构。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;边缘端口：一个边缘端口就像一个Port Fast-enabled端口，并且只在连接了一个单独的末端站点的端口上启用他。但它和Port Fast-enabled 不一样，它不产生拓扑改变，但当它收到BPDU时，自动成为生成树端口。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;P2P端口：两台交换机之间只有一条链路，同时端口之间的连接为全双工，这样的链路类型叫点到点链路。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;对端版本：该端口对端交换机的STP模式。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </td></tr>";

         break;	
		 
case 'stp_status':

         break;		
	
	
	
case 'igmp':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;模式：用于启用/禁用交换机的IGMP Snooping功能。 </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID：交换机中VLAN组的编号。 </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Snooping enabled：用于基于VLAN启用/禁用IGMP Snooping功能。 </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;IGMP Querier：用于基于VLAN启用/禁用IGMP Snooping的查询功能。</td></tr>";

         break;		
	
	
case 'igmprouter':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;路由端口：用于设置交换机上连接组播路由器的端口。 </td></tr>";
         break;
         
         
case 'igmpgroup':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;查看IGMP加入的组信息 </td></tr>";
         break;         		
			 
case 'lldp':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Tx Interval：此参数用于设置交换机发送LLDP数据帧的周期，范围为5~32768，系统默认为30。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Tx Hold：此参数用于设置LLDP信息老化时循环的次数，范围为2~10，系统默认为3。  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Tx Delay：此参数用于设置交换机发送LLDP数据帧的延时时长，范围为1~8192，系统默认为2。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Tx Reinit：此参数用于设置LLDP端口的重新初始化的时长，范围为1~10，系统默认为2。  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;禁用：选用此参数表示禁用端口的LLDP功能。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;启用：选用此参数表示启用端口的LLDP功能。且此端口既可以发送自身的LLDP信息，也能识别对方发送过来的LLDP信息。     </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;仅发送：选用此参数表示启用端口的LLDP功能。且此端口仅发送自身的LLDP信息，不能识别对方发送过来的LLDP信息。       </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;仅接收：选用此参数表示启用端口的LLDP功能。且此端口既不能发送自身的LLDP信息，但可以识别对方发送过来的LLDP信息。 </td></tr>";

         break;		
	
			 
case 'lldpInfo':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;本地端口：本设备启用LLDP功能的端口号。  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;系统ID：对端设备的MAC地址。  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;远端端口：对应对端设备的端口号  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;端口描述：对端设备对应端口的描述。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;系统名：对端设备的系统名称。  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;系统描述：对端设备的系统描述信息。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;系统类型：对端设备的系统类型，包括Other、Repeater、 Bridge、WLAN Access Point、Router、Telephone、DOCSIS cable device、Station only、Reserved等。 </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;管理地址：对端设备的IP地址，此IP地址链接到对端的Web管理界面，点击此链接就可以访问对端设备的Web管理界面。                                          </td></tr>";

         break;		
	
		
	
			 
case 'snmp_admin':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;用户名：用于识别新的SNMP用户。                                           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;群组：用于新的SNMP用户与其关联。                                         </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;SNMP V3加密：允许此用户使用SNMP V3认证，并选择一种认证方式。            </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;认证协议：用户可以选择一种认证算法对SNMP用户进行认证，包括MD5和SHA方式。</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;加密协议：通过添加私有参数来进行加密，包括DES方式。                      </td></tr>";
         break;		
			 
case 'snmp_community':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;   团体名：用于识别SNMP团体成员。                                                                         </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp; 视图名：用于识别远程SNMP管理员访问交换机上MIB对象库。                                                   </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp; 权限：使得SNMP的团体成员仅允许读取或修改交换机上的MIB信息，分为Read_Only只读方式和Read_Write读写方式。  </td></tr>";

         break;		
			 
case 'snmp_engine':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;引擎ID：用来设置交换机的SNMP引擎名，范围为16~64位的十六进制字符。</td></tr>";

         break;		
			 
case 'snmp_group':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;群组：用于识别与SNMP user关联的SNMP群组。                              </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;只读视图：已经创建的SNMP群组可以发送SNMP读取请求。                     </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;读写视图：已创建的SNMP群组有修改的特权。                               </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;告警视图：已创建的SNMP群组可以在交换机的SNMP代理上接收到SNMP trap信息。</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;安全模式：用于识别与SNMP user关联的SNMP群组。                          </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;安全等级：决定SNMP信息是否来自有效源。                                 </td></tr>";

         break;		
			 
case 'snmp_host':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;主机IP：远程管理站的IP地址，通常当作交换机的SNMP主机。              </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;SNMP版本：表示使用SNMP v1、v2c、v3版本。                                </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;团体名:用于识别SNMP的trap接收主机，当选择v1和v2c时使用相应的团体名。</td></tr>";

         break;		
			 
case 'snmp_view':
	         txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;视图名：创建由1-32位字母和数字组成的SNMP视图名。                                                                          </td></tr>";
	         txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;子树OID：	用于识别对象树(MIB tree)的ID。                                                                                 </td></tr>";
	         txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;视图类型：Included：表示包含子树OID确定的访问对象范围。Excluded：表示在访问的对象范围中，不包含子树OID确定的访问对象范围。</td></tr>";
	
         break;		


case 'rmonAlert':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;条目编号：告警组的索引号，取值范围为1～65535。                                                                                                                                               </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;告警变量：字符串类型，长度为1～256，格式为节点OID的点分格式，如1.3.6.1.2.1.2.1.10.1，只有可以解析为ASN.1中INTEGER (INTEGER, Counter, Gauge, or TimeTicks)的数据类型的变量才能作为告警变量。  </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;采样时间：采样时间长度，取值范围为5～3600，单位为秒。                                                                                                                                        </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;采样类型：变化值：采样类型为变化值（选定变量的当前采样值相对于最近一次采样值的变化量）。                                                                                                     </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;绝对值：采样类型为绝对值。                                                                                                                                                                   </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;上限阀值：设置的上限值，取值范围为1~4294967295。                                                                                                                                            </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;上限事件号：上限阈值相应的事件号，取值范围为1～65535。                                                                                                                                      </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;下限阀值：设置的下限值，取值范围为1~4294967295。                                                                                                                                           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;下限事件号：下限阈值相应的事件号，取值范围为1～65535。                                                                                                                                       </td></tr>";
	
         break;	

case 'rmonEvent':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;条目编号：事件组的索引号，取值范围为1～65535。                            </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;事件描述：事件的描述，字符串，长度为1~32个字符。                        </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;事件类型：事件的操作方式，分为log、trap和log_trap。                       </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;log：日志事件。                                                           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;trap：定义事件为Trap事件。                                                </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;log-trap：定义事件为日志和Trap事件。                                      </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;事件团体名：接收事件消息的网管站的团体名属性，字符串，长度为1~32个字符。</td></tr>";
	
         break;	

case 'rmonhistory':
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;端口号：交换机端口的编号            </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;条目编号：历史组的索引号，范围是1~65535。             </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;历史表大小：该条目对应历史表容量。取值范围为1～64。 </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;采样时间：采样时间长度，取值范围为5～3600，单位为秒。  </td></tr>";
	
         break;	

case 'rmonstat':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;端口号：交换机端口的编号 </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;条目编号：统计组的索引号，范围是1~65535。</td></tr>";
	
         break;	
		 
		 
		 

case 'factory':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;点击'恢复出厂值'按钮，系统会弹出确认对话框，点击确定就会将系统恢复到出厂设置，但IP地址保持不变。若想取消此操作，则点击'取消'按钮即可。</td></tr>";
	
         break;	
		 
case 'config_setting':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;配置管理也需要TFTP Server的支持，配置备份就是将存储在flash中的配置文件上传到TFTP Server中；配置恢复就是将TFTP Server中的配置文件下载到flash中。  </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;TFTP服务器 IP：TFTP Server的IP地址，这里需要注意，TFTP Server和待升级的交换机能够正常通讯。 </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;备份文件名：备份文件的文件名 ,一般为config.cfg。 </td></tr>";
	
         break;	
			 
	 

		 
	
case 'update':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;这里的升级方式是TFTP方式，因此需要TFTP Server的支持，在架设好TFTP Server后，填写下列各参数的值即可进行升级：</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;TFTP Server IP：TFTP Server的IP地址，这里需要注意，TFTP Server和交换机能够正常通讯。                        </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;文件名：升级文件的文件名，通常使用vxworks.Z。                                                             </td></tr>";
	
         break;	



case 'syslog':
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;HOST:用于设置创建的日志服务器的编号。    </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;模式：用于启用系统日志功能。            </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;IP：用于设置日志服务器的IP地址。         </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;UDP端口：用于设置系统日志所用的UDP端口。 </td></tr>";
	
         break;	
	

case 'syslog_result':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;模式：设置按功能模块查询的查询条件。</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;用户：设置按用户类型查询的查询条件，可以和模式结合使用。</td></tr>";
	
         break;	
	
	

case 'acring_link':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;此页面用于显示主备链路的状态信息，各参数的意义如下： </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;链路ID：主备链路的编号，范围是“1~1000”。           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;端口：主备链路的成员端口。                          </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;角色：主备链路的端口角色，分为主链路和备份链路。    </td></tr>";
	
         break;	
		
		
case 'acring_Port_info':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;此页面用于显示ut_ring各成员端口的状态信息，各参数的意义如下：</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;端口：sac_ring的端口成员。 </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;状态：端口成员的链接状态，分为linkup和linkdown。 </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;环ID：环网的编号，环与环之间可以根据ring ID进行区别，其范围为1~4096。  </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;环模式：环的状态，分为启用和禁用两种状态。 </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;角色：端口成员的的角色，包括Master、Subsidiary</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;转发状态：端口成员的转发状态，分为forwarding、blocking和disable等状态。</td></tr>";
	
         break;	
			
		
case 'acring_ringList':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;环网类型：环网类型分为动态环网和静态环网。动态环网表示主交换机不确定，随拓扑的变化而变化，主要特点是当链路恢复时不需要收敛时间。静态环网主要特点是不管拓扑怎么变化，主交换机是确定不变的，但链路恢复时需要收敛时间。                               </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;ring ID：环网的编号，环与环之间可以根据ring ID进行区别，其范围为1~4096。                                                                                                                                                                          </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;端口成员1：环网的第一个端口成员，每个环的成员最多包括两个端口，每个交换机可以有多个环。                                                                                                                                                           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;端口成员2：环网的第二个端口成员。                                                                                                                                                                                                                  </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;系统类型：系统类型分为Transfer（传输节点）、Master（主节点。                                                                                                            </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;端口成员1类型：端口成员的类型根据系统类型改变而改变，当系统为Master时，其成员的类型为Master和Subsidiary；当系统为Transfer时，其成员的类型为None； </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;端口成员2类型：端口成员的类型根据系统类型改变而改变，当系统为Master时，其成员的类型为Master和Subsidiary；当系统为Transfer时，其成员的类型为None； </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;Master：此参数用于启用系统的Master状态。当系统为Master类型时，必须启用此参数，ut_ring功能才可以正常使用。                                                                                                                                          </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;UT-Ring列表：当环的各参数设置成功后，此列表就会显示该环的各种信息。                                                                                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;UT-Ring配置向导:UT-Ring配置向导用于环网的分步配置，由于环网配置复杂，用向导引导客户按步骤进行配置，将会使环网配置变得简单易行。                                                                                                                    </td></tr>";
	
         break;			
		 
		 }        	
   
   
       return txt;	  	
       
}


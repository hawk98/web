stBM(260,"IETHMenu",[1,"images","","blank.gif",0,"left","default","hand",1,0,-1,180,-1,"solid",1,"#009999","transparent","","repeat",1,"blue_f.gif","blue_uf.gif",11,11,1,"round_t.gif","round_c.gif","round_b.gif","round_v.gif",1,0,2,2,"left",0,0,0,"","","","",""]);
stBS("p0",[0,0,"",-2,"",-2,50,-1,3]);
stIT("p0i0",["系统设置","","main","","","","",0,0,"9pt 'Verdana'","#333333","none","transparent","bg_01.gif","repeat-x","bold 9pt 'Verdana'","#FFFF00","none","transparent","bg_02.gif","repeat-x","9pt 'Verdana'","#333333","none","transparent","bg_01.gif","repeat-x","bold 9pt 'Verdana'","#FFFF00","none","transparent","bg_02.gif","repeat-x",1,0,"left","middle",0,0,"","","","",0,0,0]);
stBS("p1",[,,"progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion=forward,enabled=0,Duration=0.60)",5,"progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion=reverse,enabled=0,Duration=0.60)",4],"p0");
stIT("p1i0",["系统信息","systeminfo.html",,,,"icon_002.gif","icon_002.gif",5,5,,"#000000",,"#E6FAFF","",,"9pt 'Verdana'",,,"#AED6E2","",,,"#000000",,"#E6FAFF","",,"9pt 'Verdana'",,,"#AED6E2",""],"p0i0");
stIT("p1i1",["IP 地址","ipaddress.html"],"p1i0");
stIT("p1i2",["用户设置","admin.html"],"p1i0");
stES();
stIT("p0i1",["设备控制"],"p0i0");
stBS("p2",[],"p1");
stIT("p2i0",["端口设置","port.html"],"p1i0");
stIT("p2i1",["VLAN","",,,,"",""],"p1i0");
stBS("p3",[],"p0");
stIT("p3i0",["VLAN成员","vlan_menber.html"],"p2i0");
stIT("p3i1",["端口配置","vlan_port.html"],"p2i0");
stES();
stIT("p2i2",["MAC"],"p2i1");
stBS("p4",[],"p0");
stIT("p4i0",["单播","mac.html"],"p2i0");
stIT("p4i1",["多播","mmac.html"],"p2i0");
stES();
stIT("p2i3",["Mirror","mirror.html"],"p2i0");
stIT("p2i4",["802.1X","dot1x.html"],"p2i0");
stIT("p2i5",["IGMP","igmp.html"],"p2i0");
stIT("p2i6",["QoS"],"p2i1");
stBS("p5",[],"p0");
stIT("p5i0",["端口限速","qos_port.html"],"p2i0");
stIT("p5i1",["风暴控制","qos_storm.html"],"p2i0");
stES();
stIT("p2i7",["STP"],"p2i1");
stBS("p6",[],"p0");
stIT("p6i0",["系统配置","stp_systeminfo.html"],"p2i0");
stIT("p6i1",[],"p3i1");
stES();
stIT("p2i8",["链路汇聚"],"p2i1");
stBS("p7",[],"p0");
stIT("p7i0",["LACP","lacp.html"],"p2i0");
stIT("p7i1",["Trunk","trunk.html"],"p2i0");
stES();
stIT("p2i9",["LLDP","lldp.html"],"p2i0");
stIT("p2i10",["SNTP","sntp.html"],"p2i0");
stIT("p2i11",["SNMP"],"p2i1");
stBS("p8",[],"p0");
stIT("p8i0",["SNMP View","snmp_view.html"],"p2i0");
stIT("p8i1",["SNMP Community","snmp_comm.html"],"p2i0");
stIT("p8i2",["SNMP Group","snmp_group.html"],"p2i0");
stIT("p8i3",["SNMP User","snmp_admin.html"],"p2i0");
stIT("p8i4",["SNMP Host","snmp_host.html"],"p2i0");
stIT("p8i5",["SNMP Engine ID","snmp_eID.html"],"p2i0");
stES();
stES();
stIT("p0i2",["系统工具"],"p0i0");
stBS("p9",[],"p1");
stIT("p9i0",["Ping","ping.html"],"p2i0");
stIT("p9i1",["系统重启","reboot.html"],"p2i0");
stIT("p9i2",["出厂设置","factory.html"],"p2i0");
stIT("p9i3",["软件升级","soft_upgrat.html"],"p2i0");
stIT("p9i4",["配置管理","set_config.html"],"p2i0");
stES();
stIT("p0i3",["系统监控"],"p0i0");
stBS("p10",[],"p1");
stIT("p10i0",["系统日志","sys_log.html"],"p2i0");
stES();
stES();
stEM();

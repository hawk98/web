
function helptext(page){
        var txt = "</td></tr>";
        
        switch(page){
          

        	
/*����˵��*/




case 'ipaddress':
//txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;DHCP��ѡ��ѡ���ʾ����DHCP���ܣ���ѡ��ʾ����DHCP���ܡ�����DHCP�󣬽��������������е�DHCP Server���IP��ַ���������в�����DHCP Server����������ԭ����IP��ַ��ȡʧ�ܣ����޷�ʹ��IP��ַ���ʽ�������    </td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;IP��ַ���������ú���ʾϵͳ��ǰ��IP��ַ��Ĭ��Ϊ192.168.1.100 </td></tr>";	 
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�������룺�������ú���ʾϵͳ��ǰ���������룬Ĭ��Ϊ255.255.255.0��</td></tr>";	 
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���أ��������ú���ʾϵͳ�����ص�ַ��Ĭ��Ϊ0.0.0.0��</td></tr>";	 
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��ѡDNS���������ú���ʾϵͳ����ѡDNS��Ĭ��Ϊ218.2.135.1�� </td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;����DNS���������ú���ʾϵͳ�ı���DNS��Ĭ��Ϊ0.0.0.0�� </td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;����VLAN���������ú���ʾϵͳ�Ĺ���VLAN��Ĭ��Ϊ1�� </td></tr>";	
break;	 
			 
/****************************************************************/
case 'admin':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�û�����������ʾ����ϵͳ���û�����</td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Ȩ�ޣ�������ʾϵͳ�û��Ĺ���Ȩ�ޣ���Ϊ����ԱȨ�ޡ�Administrator����ͨ�û�Ȩ�ޡ�User����־�û�Ȩ�ޡ�Logger��</td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�༭/ɾ���������޸��û������ɾ���û��� </td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˲�����ע�����¼������ƣ� <br>  &nbsp;&nbsp;�޸���������ֻ�����ڵ�ǰ�û���<br>&nbsp;&nbsp;ɾ��ֻ���Ǿ��й���ԱȨ�޵��û��ſ��Բ�����<br> &nbsp;&nbsp;ϵͳĬ�ϵ�admin��guest logger�û�����ɾ����ֻ���޸����롣</td></tr>";	
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����û����������ϵͳ�Ĺ����û�����������Ӧ�Ĺ���Ȩ�ޣ�ֻ�й���Ա�ſ�������û������������û�����ť�Ϳ��Խ��롰����û������� </td></tr>";	   
break;	
			 
			 
			 
case 'addadmin':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���룺�������ù����û������롣������8~16 bytes��NVT ASCII�ַ�(8-16)��ɡ�                                    </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ȷ�����룺����ȷ���û����������ã��Է��������������õ����벻��֪��                                           </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Ȩ�ޣ���������ϵͳ�û��Ĺ���Ȩ�ޣ���Ϊ����ԱȨ�ޡ�Administrator����ͨ�û�Ȩ�ޡ�User    </td></tr>";	
	         break;
			 
case 'modifyPassword':
		txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����޸��û����롣 </td></tr>";	
	         break;
	
	
			 
case 'dos_attack':
		txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;����DoS���������� </td></tr>";	
	         break;
		


case 'portsecurity':
		txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ڶ˿ڰ�ȫ�� </td></tr>";	
	         break;
			 
case 'acl':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ģʽ�������Ƿ�����ACL���ܡ�</td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;List ID��ACL List ��ţ����㣺4000~4999��                                                            </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ƥ��˳�򣺰���Config��Auto��config:Ĭ�Ϸ�ʽ��ʾ�� auto:����Ĺ��򽫻ᰴ��һ���Ĺ�����ʾ�� </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ACL����:����������һ�����͡�        </td></tr>";	
	 	         break;
			 
			 
case 'aclrule_config':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��ӹ���ΪACL List�����Ӧ�Ĺ���      </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ɾ����ɾ����Ӧ��ACL List��                   </td></tr>";	
		 	         break;
			 
case 'gmrp':
		txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�������á�����gmrp�˿�״̬�� </td></tr>";	
	         break;			 
						 
case 'mirror':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�Ƿ����ã���������ϵͳ�Ķ˿ھ����ܡ�                                                                                        </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;����˿ڣ����ڼ�ص��Ǹ��˿ڣ�������˿ڵ����ݶ��ᱻ���Ƶ��˶˿ڡ�                                                            </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��ڱ��ʣ�����ڷ��򣬸��Ƶ�����˿ڵ���������ռ�ö˿�ȫ�������ı�����ʵ�ʱ����������������ڱ����ĵ������Ըö˿ڵ���������  </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ڱ��ʣ��ڳ��ڷ��򣬸��Ƶ�����˿ڵ���������ռ�ö˿�ȫ�������ı�����ʵ�ʱ�������������ڳ��ڱ����ĵ������Ըö˿ڵ���������  </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;������˿ڣ�����صĶ˿ڡ�                                                                                                    </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��ڷ��򣺱�ʾ�����ڷ�������ݡ�                                                                                            </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ڷ��򣺱�ʾ��س��ڷ�������ݡ�                                                                                            </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ģʽ��All����ʾ��ر�����˿ڵ�ȫ�����ݡ�                                                                                 </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Ŀ��MAC������Դ�macΪĿ��mac�����ݡ�                                                                                         </td></tr>";	
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ԴMAC������Դ�macΪԴmac�����ݡ�                                                                                 						</td></tr>";	
	         break;
	
	
case 'sntp':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ģʽ���������úͽ���ϵͳ��SNTP���ܡ�     </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��ѡ����������������SNTP����ѡ��������   </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���÷���������������SNTP�ı��÷�������   </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ʱ������������ϵͳ��ʱ����               </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ϵͳʱ�����ã���������ϵͳ�����ں�ʱ�䡣 </td></tr>";
	
	
         break;	
		 
		 
case 'trunk':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;	��ҳ���������úͲ鿴��̬��۵�״̬�����֧�ֶ���֮һ�˿�������������ÿ�鲻���������˿ڡ���ĳ�����ĳ��ѡ��ѡ��ʱ����ʾ�ö˿����ڸþ�̬����顣��ĳ�˿�����ȱʡ��ʱ����ʾ�ö˿ڲ��Ǿ�̬��۶˿ڣ�Ĭ������£����ж˿ڶ�����ȱʡ�顣 </td></tr>";
	
	
         break;			 
		 
			 
case 'alarm':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��Դ�澯���Ƿ����õ�Դ�澯��ѡ��Ϊ���ã�  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿ڸ澯���Ƿ����ö˿ڸ澯��ѡ��Ϊ���ã�  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�¶ȸ澯���Ƿ������¶ȸ澯��ѡ��Ϊ���ã�  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��ѯʱ�䣺����ÿ���೤ʱ��ȥ����¶��Ƿ��ڸ澯�ڼ䡣  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����¶ȸ澯���£����û����¶ȸ澯�ĸ��·�ֵ�����ڴ��¶��򷢳������¶ȸ澯��Ϣ��    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����¶ȸ澯���£����û����¶ȸ澯�ĵ��·�ֵ�����ڴ��¶��򷢳������¶ȸ澯��Ϣ��    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����¶ȸ澯���£����������¶ȸ澯�ĸ��·�ֵ�����ڴ��¶��򷢳������¶ȸ澯��Ϣ��    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����¶ȸ澯���£����������¶ȸ澯�ĵ��·�ֵ�����ڴ��¶��򷢳������¶ȸ澯��Ϣ��    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;����澯��������и澯��Ϣ��                                                        </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����¶ȸ澯����Ҫ���ڻ����¶ȸ澯���£������¶ȸ澯����ҪС�ڻ����¶ȸ澯���¡�    </td></tr>";
	
         break;	
		 


		 
case 'port':

txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;�˿ڣ���ʾ���������߼��˿ںš� </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;״̬���������ú���ʾ�˿ڵ�����/����״̬�����ж˿�Ĭ��Ϊ����״̬�� </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;����״̬��������ʾ�˿ڵ�����/�Ͽ�״̬�� </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;���ͣ�������ʾ�˿ڵĹ��/������͡� </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;ģʽ����ǰģʽ��������ʾ�˿ڵ�ǰ�����ʺ�˫��״̬�� </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;����ģʽ���������ú���ʾ�˿ڵ�ǰ������/˫������״̬�����õ�ģʽ��Ϊ��100Mȫ˫����100M��˫��������Ӧ��10Mȫ˫����10M��˫����  </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;���أ��������ú���ʾ�˿��������ƹ��ܵ�����/����״̬��Ĭ��Ϊ����״̬�� </td></tr>";
txt += "<tr height=22 ><TD  class='all_tables'>&nbsp;&nbsp;�������������ú���ʾ�˿ڵĶ���ģʽ״̬��Ĭ��ΪNone״̬����Ϊ����3��ģʽ��<br> &nbsp;&nbsp;None����ʾ�˿ڲ������κ�����֡��<br> &nbsp;&nbsp;All����ʾ�˿ڶ����κ�����֡��<br> &nbsp;&nbsp;Untag����ʾ�˿ڶ�������untag����֡�� </td></tr>";
	
         break;	
		 
		 
		 
		 
case 'vlan_config':

	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;GVRP:  ��ʾ�Ƿ�����GVRP��                            </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID����ʾ��������VLAN��ı�š�                  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;U����ʾ�ö˿���VLAN�ĳ�Ա�������Ǹ�VLAN��untag�˿ڡ� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;T����ʾ�ö˿���VLAN�ĳ�Ա�������Ǹ�VLAN��tag�˿ڡ�   </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ѡ������ѡ��ĳVLAN���г�Ա�˿ڵı༭��             </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ɾ��������ɾ��ĳVLAN�顣                             </td></tr>";
	
         break;	
		 
		 		 
		 
case 'vlan_port':

txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿ڣ����������߼��˿ںš�                                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;PVID���˿ڵ�VLAN��ʾ��ȡֵ��ΧΪ��1~4094��                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ȼ����������ö˿ڵ�802.1p���ȼ������ö˿���ĳVLAN�ĳ�Ա����ô����ö˿ڵ�untag����֡�������tag��ǣ���tag����е�802.1p���ȼ���ֵ���Ǹö˿����õ�ֵ�� </td></tr>";
	
         break;	
		 
case 'mac':

txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�ϻ�ʱ�䣺��̬MAC��ַ��Ŀ��MAC��ַ���е��ϻ�ʱ�䣬Ĭ��Ϊ300s��		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;MAC��ַ��������ӵľ�̬MAC��ַ��                              		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID��MAC��ַ��Ӧ��VLAN ID��                               		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿ڣ�MAC��ַ��Ӧ�Ķ˿ںš�                                   		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;������MAC��ַ�ĸ�����š�                                     		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ͣ�MAC��ַ��MAC��ַ���е����ͣ���Ϊ��̬�;�̬���֡�        		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ɾ��������ɾ��MAC��ַ���еľ�̬MAC��ַ��                      		</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�ر�˵����MAC��ַ��VLAN ID���˿ڲ����õ�����£����Ե��������ϻ�ʱ�䡣</td></tr>";
	
         break;	
		 
case 'mmac':

txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;MAC��ַ��������ӵľ�̬�ಥMAC��ַ��     </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID���ಥMAC��ַ��Ӧ��VLAN ID��      </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿ڣ��ಥMAC��ַ��Ӧ�Ķ˿ںš�          </td></tr>";    
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�������ಥMAC��ַ�ĸ�����š�            </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�ύ�������ύ�������������Ϣ��         </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ɾ��������ɾ��MAC��ַ���еľ�̬MAC��ַ�� </td></tr>";
	
         break;	
				 
		 
case 'qos_port':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿ڣ��������˿ڵ��߼���š�  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����٣���������/���ö˿ڽ��뷽����������ơ�</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����٣���������/���ö˿ڳ�������������ơ�</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ʣ���ʾ�˿���Ҫ���Ƶ�������ֵ���䷶ΧΪ2Mbps�������ʵ���������Ϊ64kbps��2Mbps�������ʵ���������Ϊ1024kbps��</td></tr>";

         break;	
		 
case 'qos_portConfig':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;QoSģʽ����������/����ϵͳ��QoS���ܡ�</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����㷨����������ϵͳ��ǰѡ�õĵ����㷨����Ϊ4WRR���е����㷨��1SP-3WRR���е����㷨��2SP-2WRR���е����㷨��4SP���е����㷨��</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���У����ȼ����е��߼���ţ�ϵͳ��Ϊ��0~3����4�����С�  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Ȩ�أ��������ø��������ڵ�λʱ���ﴫ�������ı��أ��䷶ΧΪ1~32�� </td></tr>";

         break;	
		 
case 'qos_storm':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿ڣ��������˿ڵ��߼���š� </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ģʽ���������ÿ��Ʒ籩�����ͣ������㲥���ಥ��δ֪������</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�������ʣ��������÷籩���������ʣ���λΪKbps ��Mbps��Ĭ��Ϊ1Mbps�� </td></tr>";

         break;	
		 
case 'qos_config':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;802.1p���ȼ����У��˲�������802.1p���ȼ������֮���ӳ���ϵ��Ĭ������£�0��1���ȼ�ӳ��0���У�2��3���ȼ�ӳ��1���У�4��5���ȼ�ӳ��2���У�6��7���ȼ�ӳ��3���С�</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;DSCP���ȼ����У��˲�������DSCP���ȼ������֮���ӳ���ϵ��Ĭ������£�0~15���ȼ�ӳ��0���У�16~31���ȼ�ӳ��1���У�32~47���ȼ�ӳ��2���У�48~63���ȼ�ӳ��3���С� </td></tr>";

         break;	
		 
case 'stp_systeminfo':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ϵͳ���ȼ�����������ϵͳ�����ȼ���ϵͳĬ�����ȼ�Ϊ��32768����ϵͳ���ȼ��ķ�ΧΪ0~61440����������Ϊ4096��ֵԽС��ʾ���ȼ�Խ�ߡ�</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;����ϻ�ʱ�䣺����������������Ϣ��������ڡ�  </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ת����ʱ������ת����ʱ��</td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Э��汾����������ϵͳ��ǰʹ�õ���stpЭ�黹��rstpЭ�顣 </td></tr>";

         break;	
		 
case 'stp_port':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;stpģʽ����������/���ö˿ڵ�stp���ܡ� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;·������������·��������ֵ����0����ʾ�ö˿ڴ���auto״̬��  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ȼ������ö˿����ȼ��� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��Ե�˿ڣ���Ե�˿���ָ��ֱ�����κν��������ӣ�Ҳ��ͨ���˿������ӵ����������κν����������Ķ˿ڡ��û������ĳ���˿�ָ��Ϊ��Ե�˿ڣ���ô���ö˿�������״̬��ת��״̬Ǩ��ʱ������˿ڿ���ʵ�ֿ���Ǩ�ƣ�������ȴ��ӳ�ʱ�䣬ϵͳĬ��Ϊ����״̬��</td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;P2P�˿ڣ�P2P�˿�����̨������֮��ֱ�����ӵĶ˿ڡ�����������P2P�˿ڣ�����˿ڽ�ɫ����һ�������������ͨ������ͬ�����Ŀ���Ǩ�Ƶ�ת��״̬�������˲���Ҫ��ת���ӳ�ʱ�䡣��������Ϊauto��true��false״̬��ϵͳĬ��Ϊauto״̬��                      </td></tr>";

         break;	
		 
case 'stp_port_info':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID����ʾ��������VLAN��ı�š�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��ID�����ŵ����ȼ���MAC��ַ��ɡ�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;����ID���ɸ��ŵ����ȼ���MAC��ַ��ɡ�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���˿ڣ���ν���˿ڣ���ָһ���Ǹ��ŵ��豸�����������Ķ˿ڡ����˿ڸ�������Ž���ͨ�š��Ǹ����豸������ֻ��һ�����˿ڣ�������û�и��˿ڡ�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��·������:�����ŵ����·��������                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���˱�ǣ�������ʾ���˵�ǰ��״̬����Ϊsteady��changing״̬��steady��ʾ�����Ѿ������������ȶ�״̬��changing��ʾ�������ڸı䣬���ڸı�״̬��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿ڽ�ɫ����Ϊ�������֣�&nbsp;&nbsp;<br>&nbsp;&nbsp;Disabled����ʾ�ö˿ڵ�STP���ܴ��ڽ���״̬��&nbsp;&nbsp;<br>&nbsp;&nbsp;Alternate:�滻�˿ڡ����һ���˿��յ�����һ�����ŵĸ��õ� BPDU����������õģ���ô����˿ڳ�Ϊ�滻�˿ڡ�&nbsp;&nbsp;<br>&nbsp;&nbsp;Backup�����һ���˿��յ�ͬһ�����ŵĸ��� &nbsp;&nbsp;BPDU����ô����˿ڳ�Ϊ���ݶ˿ڡ��������˿ڱ�һ���㵽����·��һ����·����һ��ʱ�����ߵ�һ������������������������������ε�����ʱ��һ�����ݶ˿ڲ��ܴ��ڡ�&nbsp;&nbsp;<br>&nbsp;&nbsp;Root���Ǹ����յ����ŵ�BPDU������Ϣ�Ķ˿�Ϊ���˿ڣ��������ſ�����С�Ķ˿ڡ�&nbsp;&nbsp;<br>&nbsp;&nbsp;Designated�����������ӷǸ��ŵ��Ǹ��˿ڣ����͸��˿ڶ�Ӧ��&nbsp;&nbsp;<br>&nbsp;&nbsp;Non-STP����ʾ�˿ڲ�����RSTP���˼��㣬ֱ�ӽ���Forwarding ״̬�� </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿�״̬��&nbsp;&nbsp;<br>&nbsp;&nbsp;Disabled����ʾ�ö˿ڵ�STP���ܴ��ڽ���״̬��&nbsp;&nbsp;<br>&nbsp;&nbsp;Blocking����ʾ�ö˿ڴ�������״̬��&nbsp;&nbsp;<br&nbsp;&nbsp;>Listening����ʾ�ö˿ڴ�������״̬��&nbsp;&nbsp;<br>&nbsp;&nbsp;Learning����ʾ�ö˿ڴ���ѧϰ״̬��&nbsp;&nbsp;<br>&nbsp;&nbsp;Forwarding����ʾ�ö˿ڴ���ת��״̬��&nbsp;&nbsp;<br>&nbsp;&nbsp;Non-STP����ʾ�˿ڲ�����RSTP���˼��㣬ֱ�ӽ���Forwarding ״̬��                                                                                                                                                                                                                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;·��������·��������STPЭ������ѡ����·�Ĳο�ֵ��STPЭ��ͨ������·��������ѡ���Ϊ��ǿ׳������·�������������·���������޼����޻�·����������ṹ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;��Ե�˿ڣ�һ����Ե�˿ھ���һ��Port Fast-enabled�˿ڣ�����ֻ��������һ��������ĩ��վ��Ķ˿�����������������Port Fast-enabled ��һ���������������˸ı䣬�������յ�BPDUʱ���Զ���Ϊ�������˿ڡ�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;P2P�˿ڣ���̨������֮��ֻ��һ����·��ͬʱ�˿�֮�������Ϊȫ˫������������·���ͽе㵽����·��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�Զ˰汾���ö˿ڶԶ˽�������STPģʽ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </td></tr>";

         break;	
		 
case 'stp_status':

         break;		
	
	
	
case 'igmp':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ģʽ����������/���ý�������IGMP Snooping���ܡ� </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;VLAN ID����������VLAN��ı�š� </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Snooping enabled�����ڻ���VLAN����/����IGMP Snooping���ܡ� </td></tr>";
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;IGMP Querier�����ڻ���VLAN����/����IGMP Snooping�Ĳ�ѯ���ܡ�</td></tr>";

         break;		
	
	
case 'igmprouter':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;·�ɶ˿ڣ��������ý������������鲥·�����Ķ˿ڡ� </td></tr>";
         break;
         
         
case 'igmpgroup':
txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�鿴IGMP���������Ϣ </td></tr>";
         break;         		
			 
case 'lldp':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Tx Interval���˲����������ý���������LLDP����֡�����ڣ���ΧΪ5~32768��ϵͳĬ��Ϊ30�� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Tx Hold���˲�����������LLDP��Ϣ�ϻ�ʱѭ���Ĵ�������ΧΪ2~10��ϵͳĬ��Ϊ3��  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Tx Delay���˲����������ý���������LLDP����֡����ʱʱ������ΧΪ1~8192��ϵͳĬ��Ϊ2�� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Tx Reinit���˲�����������LLDP�˿ڵ����³�ʼ����ʱ������ΧΪ1~10��ϵͳĬ��Ϊ2��  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ã�ѡ�ô˲�����ʾ���ö˿ڵ�LLDP���ܡ� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ã�ѡ�ô˲�����ʾ���ö˿ڵ�LLDP���ܡ��Ҵ˶˿ڼȿ��Է��������LLDP��Ϣ��Ҳ��ʶ��Է����͹�����LLDP��Ϣ��     </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����ͣ�ѡ�ô˲�����ʾ���ö˿ڵ�LLDP���ܡ��Ҵ˶˿ڽ����������LLDP��Ϣ������ʶ��Է����͹�����LLDP��Ϣ��       </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����գ�ѡ�ô˲�����ʾ���ö˿ڵ�LLDP���ܡ��Ҵ˶˿ڼȲ��ܷ��������LLDP��Ϣ��������ʶ��Է����͹�����LLDP��Ϣ�� </td></tr>";

         break;		
	
			 
case 'lldpInfo':
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;���ض˿ڣ����豸����LLDP���ܵĶ˿ںš�  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ϵͳID���Զ��豸��MAC��ַ��  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;Զ�˶˿ڣ���Ӧ�Զ��豸�Ķ˿ں�  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�˿��������Զ��豸��Ӧ�˿ڵ������� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ϵͳ�����Զ��豸��ϵͳ���ơ�  </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ϵͳ�������Զ��豸��ϵͳ������Ϣ�� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;ϵͳ���ͣ��Զ��豸��ϵͳ���ͣ�����Other��Repeater�� Bridge��WLAN Access Point��Router��Telephone��DOCSIS cable device��Station only��Reserved�ȡ� </td></tr>";
	         txt += "<tr height=22 ><TD class='all_tables'>&nbsp;&nbsp;�����ַ���Զ��豸��IP��ַ����IP��ַ���ӵ��Զ˵�Web������棬��������ӾͿ��Է��ʶԶ��豸��Web������档                                          </td></tr>";

         break;		
	
		
	
			 
case 'snmp_admin':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�û���������ʶ���µ�SNMP�û���                                           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;Ⱥ�飺�����µ�SNMP�û����������                                         </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;SNMP V3���ܣ�������û�ʹ��SNMP V3��֤����ѡ��һ����֤��ʽ��            </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��֤Э�飺�û�����ѡ��һ����֤�㷨��SNMP�û�������֤������MD5��SHA��ʽ��</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;����Э�飺ͨ�����˽�в��������м��ܣ�����DES��ʽ��                      </td></tr>";
         break;		
			 
case 'snmp_community':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;   ������������ʶ��SNMP�����Ա��                                                                         </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp; ��ͼ��������ʶ��Զ��SNMP����Ա���ʽ�������MIB����⡣                                                   </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp; Ȩ�ޣ�ʹ��SNMP�������Ա�������ȡ���޸Ľ������ϵ�MIB��Ϣ����ΪRead_Onlyֻ����ʽ��Read_Write��д��ʽ��  </td></tr>";

         break;		
			 
case 'snmp_engine':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;����ID���������ý�������SNMP����������ΧΪ16~64λ��ʮ�������ַ���</td></tr>";

         break;		
			 
case 'snmp_group':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;Ⱥ�飺����ʶ����SNMP user������SNMPȺ�顣                              </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;ֻ����ͼ���Ѿ�������SNMPȺ����Է���SNMP��ȡ����                     </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��д��ͼ���Ѵ�����SNMPȺ�����޸ĵ���Ȩ��                               </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�澯��ͼ���Ѵ�����SNMPȺ������ڽ�������SNMP�����Ͻ��յ�SNMP trap��Ϣ��</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ȫģʽ������ʶ����SNMP user������SNMPȺ�顣                          </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ȫ�ȼ�������SNMP��Ϣ�Ƿ�������ЧԴ��                                 </td></tr>";

         break;		
			 
case 'snmp_host':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;����IP��Զ�̹���վ��IP��ַ��ͨ��������������SNMP������              </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;SNMP�汾����ʾʹ��SNMP v1��v2c��v3�汾��                                </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;������:����ʶ��SNMP��trap������������ѡ��v1��v2cʱʹ����Ӧ����������</td></tr>";

         break;		
			 
case 'snmp_view':
	         txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ͼ����������1-32λ��ĸ��������ɵ�SNMP��ͼ����                                                                          </td></tr>";
	         txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;����OID��	����ʶ�������(MIB tree)��ID��                                                                                 </td></tr>";
	         txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ͼ���ͣ�Included����ʾ��������OIDȷ���ķ��ʶ���Χ��Excluded����ʾ�ڷ��ʵĶ���Χ�У�����������OIDȷ���ķ��ʶ���Χ��</td></tr>";
	
         break;		


case 'rmonAlert':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��Ŀ��ţ��澯��������ţ�ȡֵ��ΧΪ1��65535��                                                                                                                                               </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�澯�������ַ������ͣ�����Ϊ1��256����ʽΪ�ڵ�OID�ĵ�ָ�ʽ����1.3.6.1.2.1.2.1.10.1��ֻ�п��Խ���ΪASN.1��INTEGER (INTEGER, Counter, Gauge, or TimeTicks)���������͵ı���������Ϊ�澯������  </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;����ʱ�䣺����ʱ�䳤�ȣ�ȡֵ��ΧΪ5��3600����λΪ�롣                                                                                                                                        </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�������ͣ��仯ֵ����������Ϊ�仯ֵ��ѡ�������ĵ�ǰ����ֵ��������һ�β���ֵ�ı仯������                                                                                                     </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;����ֵ����������Ϊ����ֵ��                                                                                                                                                                   </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;���޷�ֵ�����õ�����ֵ��ȡֵ��ΧΪ1~4294967295��                                                                                                                                            </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�����¼��ţ�������ֵ��Ӧ���¼��ţ�ȡֵ��ΧΪ1��65535��                                                                                                                                      </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;���޷�ֵ�����õ�����ֵ��ȡֵ��ΧΪ1~4294967295��                                                                                                                                           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�����¼��ţ�������ֵ��Ӧ���¼��ţ�ȡֵ��ΧΪ1��65535��                                                                                                                                       </td></tr>";
	
         break;	

case 'rmonEvent':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��Ŀ��ţ��¼���������ţ�ȡֵ��ΧΪ1��65535��                            </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�¼��������¼����������ַ���������Ϊ1~32���ַ���                        </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�¼����ͣ��¼��Ĳ�����ʽ����Ϊlog��trap��log_trap��                       </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;log����־�¼���                                                           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;trap�������¼�ΪTrap�¼���                                                </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;log-trap�������¼�Ϊ��־��Trap�¼���                                      </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�¼��������������¼���Ϣ������վ�����������ԣ��ַ���������Ϊ1~32���ַ���</td></tr>";
	
         break;	

case 'rmonhistory':
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�˿ںţ��������˿ڵı��            </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��Ŀ��ţ���ʷ��������ţ���Χ��1~65535��             </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ʷ���С������Ŀ��Ӧ��ʷ��������ȡֵ��ΧΪ1��64�� </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;����ʱ�䣺����ʱ�䳤�ȣ�ȡֵ��ΧΪ5��3600����λΪ�롣  </td></tr>";
	
         break;	

case 'rmonstat':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�˿ںţ��������˿ڵı�� </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��Ŀ��ţ�ͳ����������ţ���Χ��1~65535��</td></tr>";
	
         break;	
		 
		 
		 

case 'factory':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;���'�ָ�����ֵ'��ť��ϵͳ�ᵯ��ȷ�϶Ի��򣬵��ȷ���ͻὫϵͳ�ָ����������ã���IP��ַ���ֲ��䡣����ȡ���˲���������'ȡ��'��ť���ɡ�</td></tr>";
	
         break;	
		 
case 'config_setting':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;���ù���Ҳ��ҪTFTP Server��֧�֣����ñ��ݾ��ǽ��洢��flash�е������ļ��ϴ���TFTP Server�У����ûָ����ǽ�TFTP Server�е������ļ����ص�flash�С�  </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;TFTP������ IP��TFTP Server��IP��ַ��������Ҫע�⣬TFTP Server�ʹ������Ľ������ܹ�����ͨѶ�� </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�����ļ����������ļ����ļ��� ,һ��Ϊconfig.cfg�� </td></tr>";
	
         break;	
			 
	 

		 
	
case 'update':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�����������ʽ��TFTP��ʽ�������ҪTFTP Server��֧�֣��ڼ����TFTP Server����д���и�������ֵ���ɽ���������</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;TFTP Server IP��TFTP Server��IP��ַ��������Ҫע�⣬TFTP Server�ͽ������ܹ�����ͨѶ��                        </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�ļ����������ļ����ļ�����ͨ��ʹ��vxworks.Z��                                                             </td></tr>";
	
         break;	



case 'syslog':
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;HOST:�������ô�������־�������ı�š�    </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;ģʽ����������ϵͳ��־���ܡ�            </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;IP������������־��������IP��ַ��         </td></tr>";
 txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;UDP�˿ڣ���������ϵͳ��־���õ�UDP�˿ڡ� </td></tr>";
	
         break;	
	

case 'syslog_result':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;ģʽ�����ð�����ģ���ѯ�Ĳ�ѯ������</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�û������ð��û����Ͳ�ѯ�Ĳ�ѯ���������Ժ�ģʽ���ʹ�á�</td></tr>";
	
         break;	
	
	

case 'acring_link':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ҳ��������ʾ������·��״̬��Ϣ�����������������£� </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��·ID��������·�ı�ţ���Χ�ǡ�1~1000����           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�˿ڣ�������·�ĳ�Ա�˿ڡ�                          </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ɫ��������·�Ķ˿ڽ�ɫ����Ϊ����·�ͱ�����·��    </td></tr>";
	
         break;	
		
		
case 'acring_Port_info':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ҳ��������ʾut_ring����Ա�˿ڵ�״̬��Ϣ�����������������£�</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�˿ڣ�sac_ring�Ķ˿ڳ�Ա�� </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;״̬���˿ڳ�Ա������״̬����Ϊlinkup��linkdown�� </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ID�������ı�ţ����뻷֮����Ը���ring ID���������䷶ΧΪ1~4096��  </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ģʽ������״̬����Ϊ���úͽ�������״̬�� </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;��ɫ���˿ڳ�Ա�ĵĽ�ɫ������Master��Subsidiary</td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;ת��״̬���˿ڳ�Ա��ת��״̬����Ϊforwarding��blocking��disable��״̬��</td></tr>";
	
         break;	
			
		
case 'acring_ringList':
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�������ͣ��������ͷ�Ϊ��̬�����;�̬��������̬������ʾ����������ȷ���������˵ı仯���仯����Ҫ�ص��ǵ���·�ָ�ʱ����Ҫ����ʱ�䡣��̬������Ҫ�ص��ǲ���������ô�仯������������ȷ������ģ�����·�ָ�ʱ��Ҫ����ʱ�䡣                               </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;ring ID�������ı�ţ����뻷֮����Ը���ring ID���������䷶ΧΪ1~4096��                                                                                                                                                                          </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�˿ڳ�Ա1�������ĵ�һ���˿ڳ�Ա��ÿ�����ĳ�Ա�����������˿ڣ�ÿ�������������ж������                                                                                                                                                           </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�˿ڳ�Ա2�������ĵڶ����˿ڳ�Ա��                                                                                                                                                                                                                  </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;ϵͳ���ͣ�ϵͳ���ͷ�ΪTransfer������ڵ㣩��Master�����ڵ㡣                                                                                                            </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�˿ڳ�Ա1���ͣ��˿ڳ�Ա�����͸���ϵͳ���͸ı���ı䣬��ϵͳΪMasterʱ�����Ա������ΪMaster��Subsidiary����ϵͳΪTransferʱ�����Ա������ΪNone�� </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;�˿ڳ�Ա2���ͣ��˿ڳ�Ա�����͸���ϵͳ���͸ı���ı䣬��ϵͳΪMasterʱ�����Ա������ΪMaster��Subsidiary����ϵͳΪTransferʱ�����Ա������ΪNone�� </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;Master���˲�����������ϵͳ��Master״̬����ϵͳΪMaster����ʱ���������ô˲�����ut_ring���ܲſ�������ʹ�á�                                                                                                                                          </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;UT-Ring�б������ĸ��������óɹ��󣬴��б�ͻ���ʾ�û��ĸ�����Ϣ��                                                                                                                                                                                </td></tr>";
txt += "<tr height=22 ><TD   class='all_tables'>&nbsp;&nbsp;UT-Ring������:UT-Ring���������ڻ����ķֲ����ã����ڻ������ø��ӣ����������ͻ�������������ã�����ʹ�������ñ�ü����С�                                                                                                                    </td></tr>";
	
         break;			
		 
		 }        	
   
   
       return txt;	  	
       
}


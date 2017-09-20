function toggleOPTIONS(value)
{
	if(value == 'show')
	{
		document.getElementById("OPTIONSMenu").style.display = "block";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('hide')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('hide')";
		document.images["OPTIONS_dotImg"].src = "pic/menu/collapse_web.gif";
		
		document.getElementById("serviceMenu").style.display = "none";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";
		document.images["service_dotImg"].src = "pic/menu/expand_web.gif";

		document.getElementById("statisticMenu").style.display = "none";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";
	
		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("deviceMenu").style.display = "none";
		//createCookie("OPTIONSTree", "true", 30);
		
	}else
	{
		document.getElementById("OPTIONSMenu").style.display = "none";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('show')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('show')";
	    document.images["OPTIONS_dotImg"].src = "pic/menu/expand_web.gif";
		
		//createCookie("OPTIONSTree", "false", 30);
	}
}


function toggleservice(value)
{
	if(value == 'show')
	{
		document.images["service_dotImg"].src = "pic/menu/collapse_web.gif";
		document.getElementById("serviceID").href = "javascript:toggleservice('hide')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('hide')";
		document.getElementById("serviceMenu").style.display = "block";
		
		document.getElementById("OPTIONSMenu").style.display = "none";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('show')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('show')";
		document.images["OPTIONS_dotImg"].src = "pic/menu/expand_web.gif";

		document.getElementById("statisticMenu").style.display = "none";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";

		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("deviceMenu").style.display = "none";

		//createCookie("serviceTree", "true", 30);
	}else
	{
		document.images["service_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";
		document.getElementById("serviceMenu").style.display = "none";
        //createCookie("serviceTree", "false", 30);
	}

}

function toggleOPTIONS_dot(value)
{
	if(value == 'show')
	{
		document.images["OPTIONS_dotImg"].src = "pic/menu/collapse_web.gif";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('hide')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('hide')";
		document.getElementById("OPTIONSMenu").style.display = "block";
		
		document.getElementById("serviceMenu").style.display = "none";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.images["service_dotImg"].src = "pic/menu/expand_web.gif";

		document.getElementById("statisticMenu").style.display = "none";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";

		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("deviceMenu").style.display = "none";


		document.getElementById("statisticMenu").style.display = "none";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";


        //createCookie("OPTIONS_dotTree", "true", 30);
	}else
	{
		document.images["OPTIONS_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('show')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('show')";
	    document.getElementById("OPTIONSMenu").style.display = "none";
		//createCookie("OPTIONS_dotTree", "false", 30);
	}
}

function toggleservice_dot(value)
{
	if(value == 'show')
	{
	 	document.images["service_dotImg"].src = "pic/menu/collapse_web.gif";
		document.getElementById("serviceID").href = "javascript:toggleservice('hide')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('hide')";
		document.getElementById("serviceMenu").style.display = "block";
		
		document.getElementById("OPTIONSMenu").style.display = "none";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('show')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('show')";
		document.images["OPTIONS_dotImg"].src = "pic/menu/expand_web.gif";

		document.getElementById("statisticMenu").style.display = "none";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";

		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("deviceMenu").style.display = "none";


		document.getElementById("statisticMenu").style.display = "none";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";

		//createCookie("service_dotTree", "true", 30);
	}else
	{
		document.images["service_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";
		document.getElementById("serviceMenu").style.display = "none";
        //createCookie("service_dotTree", "false", 30);
	}
}


function togglestatistic(value)
{
	if(value == 'show')
	{
		document.images["statistic_dotImg"].src = "pic/menu/collapse_web.gif";
		document.getElementById("statisticID").href = "javascript:togglestatistic('hide')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('hide')";
		document.getElementById("statisticMenu").style.display = "block";
		
		document.getElementById("OPTIONSMenu").style.display = "none";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('show')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('show')";

		document.getElementById("serviceMenu").style.display = "none";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";
		
		document.images["OPTIONS_dotImg"].src = "pic/menu/expand_web.gif";
	   	document.images["service_dotImg"].src = "pic/menu/expand_web.gif";
	
		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("deviceMenu").style.display = "none";

/*
		document.getElementById("syslogMenu").style.display = "none";
		document.getElementById("syslogID").href = "javascript:togglesyslog('show')";
		document.getElementById("syslog_dotID").href = "javascript:togglesyslog_dot('show')";
		document.images["syslog_dotImg"].src = "pic/menu/expand_web.gif";
*/	
		//createCookie("statisticTree", "true", 30);
	}else
	{
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.getElementById("statisticMenu").style.display = "none";
        //createCookie("statisticTree", "false", 30);
	}

}
function togglestatistic_dot(value)
{
	if(value == 'show')
	{
	 	document.images["statistic_dotImg"].src = "pic/menu/collapse_web.gif";
		document.getElementById("statisticID").href = "javascript:togglestatistic('hide')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('hide')";
		document.getElementById("statisticMenu").style.display = "block";
		
		document.getElementById("OPTIONSMenu").style.display = "none";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('show')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('show')";

		document.getElementById("serviceMenu").style.display = "none";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";
		
		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("deviceMenu").style.display = "none";

		document.images["OPTIONS_dotImg"].src = "pic/menu/expand_web.gif";
	   	document.images["service_dotImg"].src = "pic/menu/expand_web.gif";
		
/*
		document.getElementById("syslogMenu").style.display = "none";
		document.getElementById("syslogID").href = "javascript:togglesyslog('show')";
		document.getElementById("syslog_dotID").href = "javascript:togglesyslog_dot('show')";
		document.images["syslog_dotImg"].src = "pic/menu/expand_web.gif";
*/

		//createCookie("statistic_dotTree", "true", 30);
	}else
	{
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.getElementById("statisticMenu").style.display = "none";
        //createCookie("statistic_dotTree", "false", 30);
	}
}



function toggledevice(value)
{
	if(value == 'show')
	{
		document.images["device_dotImg"].src = "pic/menu/collapse_web.gif";
		document.getElementById("deviceID").href = "javascript:toggledevice('hide')";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('hide')";
		document.getElementById("deviceMenu").style.display = "block";
		
		document.getElementById("OPTIONSMenu").style.display = "none";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('show')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('show')";

		document.getElementById("serviceMenu").style.display = "none";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";

		document.getElementById("statisticMenu").style.display = "none";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";
		
		document.images["OPTIONS_dotImg"].src = "pic/menu/expand_web.gif";
	   	document.images["service_dotImg"].src = "pic/menu/expand_web.gif";
	
/*
		document.getElementById("syslogMenu").style.display = "none";
		document.getElementById("syslogID").href = "javascript:togglesyslog('show')";
		document.getElementById("syslog_dotID").href = "javascript:togglesyslog_dot('show')";
		document.images["syslog_dotImg"].src = "pic/menu/expand_web.gif";
*/	
	
		//createCookie("deviceTree", "true", 30);
	}else
	{
		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceMenu").style.display = "none";
        //createCookie("deviceTree", "false", 30);
	}

}
function toggledevice_dot(value)
{
	if(value == 'show')
	{
	 	document.images["device_dotImg"].src = "pic/menu/collapse_web.gif";
		document.getElementById("deviceID").href = "javascript:toggledevice('hide')";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('hide')";
		document.getElementById("deviceMenu").style.display = "block";
		
		document.getElementById("OPTIONSMenu").style.display = "none";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('show')";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('show')";

		document.getElementById("serviceMenu").style.display = "none";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";
		
		document.getElementById("statisticMenu").style.display = "none";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";

		document.images["OPTIONS_dotImg"].src = "pic/menu/expand_web.gif";
	   	document.images["service_dotImg"].src = "pic/menu/expand_web.gif";
		
/*
		document.getElementById("syslogMenu").style.display = "none";
		document.getElementById("syslogID").href = "javascript:togglesyslog('show')";
		document.getElementById("syslog_dotID").href = "javascript:togglesyslog_dot('show')";
		document.images["syslog_dotImg"].src = "pic/menu/expand_web.gif";
*/

		//createCookie("device_dotTree", "true", 30);
	}else
	{
		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceMenu").style.display = "none";
        //createCookie("device_dotTree", "false", 30);
	}
}

/*********************************************************************************/





function initialize()
{

        document.images["OPTIONS_dotImg"].src = "pic/menu/collapse_web.gif";
		document.getElementById("OPTIONS_dotID").href = "javascript:toggleOPTIONS_dot('hide')";
		document.getElementById("OPTIONSID").href = "javascript:toggleOPTIONS('hide')";
		document.getElementById("OPTIONSMenu").style.display = "";

		document.images["service_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("service_dotID").href = "javascript:toggleservice_dot('show')";
		document.getElementById("serviceID").href = "javascript:toggleservice('show')";
		document.getElementById("serviceMenu").style.display = "none";

		document.images["statistic_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("statistic_dotID").href = "javascript:togglestatistic_dot('show')";
		document.getElementById("statisticID").href = "javascript:togglestatistic('show')";
		document.getElementById("statisticMenu").style.display = "none";

		document.images["device_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("device_dotID").href = "javascript:toggledevice_dot('show')";
		document.getElementById("deviceID").href = "javascript:toggledevice('show')";
		document.getElementById("deviceMenu").style.display = "none";

/*
		document.images["syslog_dotImg"].src = "pic/menu/expand_web.gif";
		document.getElementById("syslog_dotID").href = "javascript:togglesyslog_dot('show')";
		document.getElementById("syslogID").href = "javascript:togglesyslog('show')";
		document.getElementById("syslogMenu").style.display = "none";
*/
	
}

var key = "";
function menu_click(name) 
{
	if (key != "") 
		 document.getElementById(key).className = "";
	
	document.getElementById(name).className="selectedDevice";
	key = name;
}

function level_mover(obj) 
{
	if (obj.id != key) 
		obj.className = "menuHover";
	
}
function level_mout(obj) 
{
	if (obj.id != key) 
		obj.className = "";
	
}

function switchSysBar(value)
{

	if (value=="hide")
	{
	document.images["switch_pic"].src="pic/open_web.gif"
	document.all("List").style.display="none"
	parent.content.cols="10,*"
	document.getElementById("switch_href").href = "javascript:switchSysBar('show')";
	}
	else
	{
	document.images["switch_pic"].src="pic/close_web.gif"
	document.all("List").style.display="" 
	parent.content.cols="205,*" 
	document.getElementById("switch_href").href = "javascript:switchSysBar('hide')";
	}
}
//控制左边菜单的开与关结束


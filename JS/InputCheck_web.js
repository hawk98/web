/* 单个端口 */
/*
function convert_tomodport(nstart)
{
	if(nstart<0)
	{
		return "-/-";
	}
	else
	{
		var oport_to_mod=[0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,0,0,0,0];
		var oport_to_port=[0,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4];
		ncard1 = oport_to_mod[nstart];
		nport1 = oport_to_port[nstart];
		res =  ncard1+"/"+ nport1;
		return res;
	}

}
*/

/* 单个端口 */
function convert_tomodport(nstart)
{
	if(nstart<0)
	{
		return "--";
	}
	else
	{
		var oport_to_port=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
		nport1 = oport_to_port[nstart];
		res =  nport1;
		return res;
	}

}

/* 多个端口，例如 1,2,3,4 */
function multi_tomodport(nstart)
{
	var i;
	var tempi="";
	for(i=0;i<nstart.split(",").length;i++)
	{
		tempi  +=  convert_tomodport(nstart.split(",")[i]) + " ";
	}
	return tempi;
	
}

function changebgcolor(){
 var tab = document.all.table1;
  var len = tab.rows.length ;
  for (var i=0; i<len; i++)
  {
	var lencol = tab.rows[i].cells.length
    for (var j=0; j<lencol; j++)
     {
        if (j % 2 == 1){

			tab.rows[i].cells[j].bgColor = "ffffff";
			tab.rows[i].cells[j].className = "all_tables" ;
		  }
	else{
			tab.rows[i].cells[j].bgColor = "D3E4F4";
			tab.rows[i].cells[j].className = "all_tables" ;
		}

     }

  }
}
function changebgcolor2(){
 var tab = document.all.table2;
  var len = tab.rows.length ;
  for (var i=0; i<len; i++)
  {
	var lencol = tab.rows[i].cells.length
    for (var j=0; j<lencol; j++)
     {
        if (j % 2 == 1){

			tab.rows[i].cells[j].bgColor = "ffffff";
			tab.rows[i].cells[j].className = "all_tables" ;
		  }
	else{
			tab.rows[i].cells[j].bgColor = "D3E4F4";
			tab.rows[i].cells[j].className = "all_tables" ;
		}

     }

  }
}
function changebgcolor3(){
 var tab = document.all.table3;
  var len = tab.rows.length ;
  for (var i=0; i<len; i++)
  {
	var lencol = tab.rows[i].cells.length
    for (var j=0; j<lencol; j++)
     {
        if (j % 2 == 1){

			tab.rows[i].cells[j].bgColor = "ffffff";
			tab.rows[i].cells[j].className = "all_tables" ;
		  }
	else{
			tab.rows[i].cells[j].bgColor = "D3E4F4";
			tab.rows[i].cells[j].className = "all_tables" ;
		}

     }

  }
}
function changebgcolor4(){
 var tab = document.all.table4;
  var len = tab.rows.length ;
  for (var i=0; i<len; i++)
  {
	var lencol = tab.rows[i].cells.length
    for (var j=0; j<lencol; j++)
     {
        if (j % 2 == 1){

			tab.rows[i].cells[j].bgColor = "ffffff";
			tab.rows[i].cells[j].className = "all_tables" ;
		  }
	else{
			tab.rows[i].cells[j].bgColor = "D3E4F4";
			tab.rows[i].cells[j].className = "all_tables" ;
		}

     }

  }
}





function toNext(obj){
 if(obj.value.length==2&&obj.nextSibling.nextSibling.type=="text")
 obj.nextSibling.nextSibling.select()
}



function chkmaxlen(str){   
  sl=str.length;   
  strLen=0;   
    for(i=0;i<sl;i++){   
    if(str.charCodeAt(i)>255)   strLen+=2;   
    else   strLen++;   
    }   
  return strLen;   
  }
  
function fucCheckNUM(NUM)
{
 var i,j,strTemp;
 strTemp="0123456789";
 if ( NUM.length== 0)
  return 0
 for (i=0;i<NUM.length;i++)
 {
  j=strTemp.indexOf(NUM.charAt(i)); 
  if (j==-1)
  {
  //说明有字符不是数字
   return false;
  }
 }
 //说明是数字
 return true;
} 

function isChinese(inputStr){
      iLength = inputStr.length
      for (i = 0; i < iLength; i++)
        if (inputStr.charCodeAt(i) > 255){ 
//            alert("不允许输入中文字符!");
            return true ;
           }
     return false ;
}

function left_trim(field)
{
 var tmp_string = field.value;
 while (''+tmp_string.charAt(0) == ' ')
 tmp_string = tmp_string.substring(1,tmp_string.length);

 field.value = tmp_string;

}

function right_trim(field)
{
 var tmp_string = field.value;

 while (''+tmp_string.charAt(tmp_string.length-1) == ' ')
 tmp_string = tmp_string.substring(0,tmp_string.length-1);

 field.value = tmp_string;
}

function  checkOtherChar(str,errmsg) {
       for(var loop_index=0; loop_index<str.length; loop_index++)
       {
         if(str.charAt(loop_index) == '~'
           ||str.charAt(loop_index) == '!'
           ||str.charAt(loop_index) == '@'
           ||str.charAt(loop_index) == '#'
           ||str.charAt(loop_index) == '$'
           ||str.charAt(loop_index) == '%'
           ||str.charAt(loop_index) == '^'
           ||str.charAt(loop_index) == '&'
           ||str.charAt(loop_index) == '*'
           ||str.charAt(loop_index) == '('
           ||str.charAt(loop_index) == ')'
           ||str.charAt(loop_index) == '+'
           ||str.charAt(loop_index) == '{'
           ||str.charAt(loop_index) == '}'
           ||str.charAt(loop_index) == '|'
           ||str.charAt(loop_index) == ':'
           ||str.charAt(loop_index) == '"'
           ||str.charAt(loop_index) == '<'
           ||str.charAt(loop_index) == '>'
           ||str.charAt(loop_index) == '?'
           ||str.charAt(loop_index) == '`'
           ||str.charAt(loop_index) == '='
           ||str.charAt(loop_index) == '['
           ||str.charAt(loop_index) == ']'
           ||str.charAt(loop_index) == '\\'
           ||str.charAt(loop_index) == ';'
           ||str.charAt(loop_index) == '\''
           ||str.charAt(loop_index) == '/')
          {
            
            alert(errmsg);
            return false;
   	   }
         }
      return true;
   }

function checkname(field,err_blank,err_space,err_invalid,flag)
{
	if ((field.value.indexOf(" ") >=0)&&(flag == 1))
   {
		alert(err_space);
		field.focus();
		field.select();
		return false;
	}

	left_trim(field);
	right_trim(field);




	if ((field.value =="" | field.value == null)&&(flag == 1))
	{
		
		alert(err_blank);
		field.focus();
		field.select();
		return false;
	}


	if (checkOtherChar(field.value, err_invalid)==false)
	{
		field.focus();
		field.select();
		return false;
	}
	
/*	
	if (isChinese(field.value)==true)
	{
		field.focus();
		field.select();
		return false;
	}
*/

	return true;
}


function tdIpCheck(textValue)
{
    re1=/(\d+)(\W)(\d+)(\W)(\d+)(\W)(\d+)/
    Check=textValue.search(re1);
    if(Check==-1)
    {
        return false;
    }
    else
    {
        ipSplit=textValue.split('.');
        if(ipSplit.length!=4)
        {
            return false;
        }

        for(i=0; i<ipSplit.length; i++)
        {
            if(isNaN(ipSplit[i]))  return false;
			if(ipSplit[i].length > 1 && ipSplit[i].charAt(0) == "0") return false;
        }
    
        for(i=0; i<ipSplit.length; i++)
        {
            if(ipSplit[i] > 255)
            {
                return false;
            }
            if(ipSplit[i] < 0)
            {
                return false;
            }
        }
        if((ipSplit[0]==255) && (ipSplit[1]==255) && (ipSplit[2]==255) && (ipSplit[3]==255))
        {
            return false;
        }

        if((ipSplit[0]==0) || (ipSplit[0]==127) || (ipSplit[3]==0) || (ipSplit[3]==255))
        {
            return false;
        }

        if(ipSplit[0] >= 224)
        {
            return false;
        }
        return true;
    }
}

 function IsHex(Value,AlertOn)
{
    // Default value
    var  AlertOn = (AlertOn == null) ? 0 : AlertOn;

    ValidChars = "0123456789ABCDEFabcdef";

    var ValueIsHex = true;

    // check for valid charaters  
    for (var i = 0 ; i <= Value.length; i ++ ) {
	var ValueChar = Value.charAt(i);
	if (ValidChars.indexOf(ValueChar) == -1 ) {
	    ValueIsHex = false; 
	}
    }
    
    if (!ValueIsHex && AlertOn) {
        alert ("Value " + Value + " is not a valid hex number");
    }

    return ValueIsHex;
}




function IsMacAddress(textValue) 
{
	var reg_name=/^([0-9A-Fa-f]{2})(-[0-9A-Fa-f]{2}){5}$/;   
	var reg_name2=/^([0-9A-Fa-f]{2})(:[0-9A-Fa-f]{2}){5}$/;   
	if((!reg_name.test(textValue))&&(!reg_name2.test(textValue)))
	{ 
		return false;
	}
	else
	{ if(textValue == "00-00-00-00-00-00" || textValue == "00:00:00:00:00:00")
		  return false;
		return true;
	}

}

function tdMacCheck(textValue)
{
	return IsMacAddress(textValue);
}


function tdMacMcastCheck(textValue)
{
    var counter=0;
    var ZeroCounter=0;
    for(var i=0; i<12+5;i++)
    {
      if(textValue.charAt(i)=='F' || textValue.charAt(i)=='f')
       counter++;

}
    if(counter==12) return false;

else
    {
        check=textValue.charAt(1);
        //alert(" number "+check);
        if((check=='A') ||
           (check=='C') ||
           (check=='E') ||
           (check=='0') ||
           (check=='2') ||
           (check=='4') ||
           (check=='6') ||
           (check=='8'))
           return false;
    }
    return true;
}


function tdCheckSubnetMask(textValue)
{
    var subIP=textValue.split('.');
    var i;

    if(subIP.length!=4)
        return false;

    if(subIP[0]==0 && subIP[1]==0 && subIP[2]==0 && subIP[3]==0)
        return false;

    if(subIP[0]==255 && subIP[1]==255 && subIP[2]==255 && subIP[3]==255)
        return false;

    for(i=0;i<3;i++)
    {
        if(subIP[i]<subIP[i+1])
            return false;
    }

    for(i=0;i<4;i++)
    {
        if(subIP[i] != 255 && subIP[i] != 254 && subIP[i] != 252 && subIP[i] != 248 && subIP[i] != 240 && subIP[i] != 224
        && subIP[i] != 192 && subIP[i] != 128 && subIP[i] != 0)
            return false;
    }

    for(i=0;i<3;i++)
    {
        if(subIP[i]!= 255 && subIP[i+1] !=0)
            return false;
    }

    return true;

}

 

function tdOIDCheck(textValue)
{     
 
    ipSplit=textValue.split('.'); 
      
        for(i=0; i<ipSplit.length; i++)
        {        
          if (isNaN(ipSplit[i]))
		  {
			  //alert("i="+i+",ipSplit[i]="+ipSplit[i]);
			  return false;
		  
		  }
//        if (ipSplit[i]>4294967295)  return false;   
        if (ipSplit[i]< 0 )  return false;
        if (ipSplit[i].indexOf(' ') >= 0 ) return false;
        if (ipSplit[i].length == 0) return false;   
        }        
   
    return true; 
 }




function tdCheckASCIICode(input)
{
    var ch;
    var len;
    len=input.length;
    for(i=0;i<len;i++)
    {
        ch=input.charCodeAt(i);
        if(ch>0x7e || ch<0x20)
        {
            //alert("Input Error!");
            return false;
        }
    }
    return true;
}



function checkQuote(s){
  if(s.indexOf("\"") > -1 || s.indexOf("'") > -1)
    return false;
  return true;
}


function tdCheckSubnetMaskAcl(textValue)
{
    var subIP=textValue.split('.');
    var i;

    if(subIP.length!=4)
        return false;

    if(subIP[0]==0 && subIP[1]==0 && subIP[2]==0 && subIP[3]==0)
        return false;


    for(i=0;i<3;i++)
    {
        if(subIP[i]<subIP[i+1])
            return false;
    }

    for(i=0;i<4;i++)
    {
        if(subIP[i] != 255 && subIP[i] != 254 && subIP[i] != 252 && subIP[i] != 248 && subIP[i] != 240 && subIP[i] != 224
        && subIP[i] != 192 && subIP[i] != 128 && subIP[i] != 0)
            return false;
    }

    for(i=0;i<3;i++)
    {
        if(subIP[i]!= 255 && subIP[i+1] !=0)
            return false;
    }

    return true;

}


function tdIpCheckAcl(textValue)
{
    re1=/(\d+)(\W)(\d+)(\W)(\d+)(\W)(\d+)/
    Check=textValue.search(re1);
    if(Check==-1)
    {
        return false;
    }
    else
    {
        ipSplit=textValue.split('.');
        if(ipSplit.length!=4)
        {
            return false;
        }

        for(i=0; i<ipSplit.length; i++)
        {
            if(isNaN(ipSplit[i]))  return false;
			if(ipSplit[i].length > 1 && ipSplit[i].charAt(0) == "0") return false;
        }
    
        for(i=0; i<ipSplit.length; i++)
        {
            if(ipSplit[i] > 255)
            {
                return false;
            }
            if(ipSplit[i] < 0)
            {
                return false;
            }
        }
        if((ipSplit[0]==255) && (ipSplit[1]==255) && (ipSplit[2]==255) && (ipSplit[3]==255))
        {
            return false;
        }

        if((ipSplit[0]==0) || (ipSplit[0]==127) || (ipSplit[3]==255))
        {
            return false;
        }

        if(ipSplit[0] >= 224)
        {
            return false;
        }
        return true;
    }
}

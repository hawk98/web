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

function tdHostAddrCheck(textValue)
{
    var re1=/(\d+)(\W)(\d+)(\W)(\d+)(\W)(\d+)/;
    var check=textValue.search(re1);
    if(check == -1)
        return false;
    else
    {
        var re2=/(\W)/;
        var ipString=textValue.split('.');
        if(ipString.length!=4)
            return false;
        if(eval(ipString[0])+eval(ipString[1])+eval(ipString[2])+eval(ipString[3])==1020)
            return false;
        else if(ipString[0] == 127)
            return false;
        else
        {
            if(ipString[0] > 223)
                return false;
        }
        return true;
    }
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

function tdIpCheck3(textValue)
{

    re1=/(\d+)(\W)(\d+)(\W)(\d+)(\W)(\d+)/
    Check=textValue.search(re1);
    if(Check==-1)   return false;

    else
    {
       ipSplit=textValue.split('.');
       if(ipSplit.length!=4) return false;
       for(i=0; i<ipSplit.length; i++)
       {
         if(ipSplit[i]>=255)  return false;
       }

       if(ipSplit[0]==127) return false;  //case 1
       if(ipSplit[0]>=224 && ipSplit[0]<=255) return false; //case 2

        if(ipSplit[0]==128 && ipSplit[1]==0) return false;   //case 3
        if(ipSplit[0]==191 && ipSplit[1]==255) return false;  // case 4
        if(ipSplit[3]==255 || ipSplit[3]==0)
        {
            if(ipSplit[0]>=192 && ipSplit[0]<=255) return false;  //case 7, 10

            if(ipSplit[2]==255 || ipSplit[2]==0)
            {
                if(ipSplit[0]>=128 && ipSplit[0]<=191) return false; //case 6, 9
                if(ipSplit[1]==255 || ipSplit[1]==0)
                if(ipSplit[0]>=64 && ipSplit[0]<=127) return false; //case 5, 8
            }
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




 function IsGoodNum(cntrl,errmsg3,flag,errmsg1,errmsg2,from,to)
    {
    	var	val = 0;
    	num_str = cntrl.value;
   if (num_str.indexOf(" ") >=0)
   {
		alert(errmsg3);
		cntrl.focus();
		cntrl.select();
		return false;
	}

	if (flag == 1) {
	if (num_str == "") {
		alert(errmsg1);
    		return false;
	}}
    	val = toNumber(num_str, 0, num_str.length);
		
		
		
    	if ((val < from || val > to) && (num_str != ""))
    	{
		alert(errmsg2);
    		return false;
    	}
    	else
    	{
    		return true;
    	}
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

/*
function tdMacCheck(textValue)
{
    re1=/(-)|(:)|(\s)/
    Check=textValue.search(re1);
    if(Check==-1)
        return false;
    else
    {
        macSplit = textValue.split(':');
        macSplit2 = textValue.split('-');    
        if(macSplit.length!=6 && macSplit2.length!=6)
            return false;

        if (macSplit.length != 0)
        {
            for(i=0; i< macSplit.length; i++)
            {
                re2=/[A-Fa-f0-9][A-Fa-f0-9]/
                Check=macSplit[i].search(re2);
                if(Check==-1)
                    return false;
            }
        }
        else if (macSplit2.length != 0)
        {
            for(i=0; i< macSplit2.length; i++)
            {
                re2=/[A-Fa-f0-9][A-Fa-f0-9]/
                Check=macSplit2[i].search(re2);
                if(Check==-1)
                    return false;
            }
        }
   }
    return true;
}
*/

function tdMacMcastCheck(textValue)
{
    var counter=0;
    var ZeroCounter=0;
    for(var i=0; i<12+5;i++)
    {
      if(textValue.charAt(i)=='F' || textValue.charAt(i)=='f')
       counter++;
      if (i>1 && textValue.charAt(i)=='0')
        ZeroCounter++;
    }
    if(counter==12) return false;
    else if(ZeroCounter>9)
    return false;
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

function tdMacUcastCheck(textValue)
{
    var ZeroCounter=0;
    for(var i=0; i<12+5;i++)
    {
        if (textValue.charAt(i)=='0')
        ZeroCounter++;
    }

    if (ZeroCounter == 12)
        return false;
    
    check=textValue.charAt(1);
        if((check=='1') ||
           (check=='3') ||
           (check=='5') ||
           (check=='7') ||
           (check=='8') ||
           (check=='B') ||
           (check=='D') ||
           (check=='F'))
           return false;

    return true;
}

function tdUcastMACCheck(textValue)
{

    var check1=textValue.charAt(0);
    var check2=textValue.charAt(1);
    var counter=0;

    for(var i=0;i<12+5;i++)
    {
        if(textValue.charAt(i)=='0')
            counter++;
    }

    if(counter==12)
        return false;

    if(check1 !=0 || check2 !=0)
           return false;

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

function tdIpCheckZero(textValue)
{

    re1=/(\d+)(\W)(\d+)(\W)(\d+)(\W)(\d+)/
    Check=textValue.search(re1);
    if(Check==-1)   return false;
    else
    {
       ipSplit=textValue.split('.');
       if(ipSplit.length!=4) return false;
       for(i=0; i<ipSplit.length; i++)
       {
         if(ipSplit[i]<=0)  return false;
       }

       return true;
    }
}
 
function tdMaskCheck(textValue)
{
    var Len= textValue.length   
    var  flag=1;
    
    for(var i=0; i<Len; i++) 
    {
      if(textValue.charAt(i)=='.')  flag=0;    
                   
    }
   
   if (flag==0) return  false;
         
        re2=/[^A-Fa-f0-9]/
        Check=textValue.search(re2); 
        if(Check==-1)  return true;
        else return  false;

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

function tdOIDValueCheck(textValue)
{     
    ipSplit=textValue.split('.');     
    for(i=0; i<ipSplit.length; i++)
    {         
        if (ipSplit[i]>4294967295)  return false;   
        if (ipSplit[i]< 0 )  return false;
        if (ipSplit[i].indexOf(' ') >= 0 ) return false;
        if (ipSplit[i].length == 0) return false;   
    } 
    return true;
}

function GetElementIndex(ElementName,NameLen)
{     
    var EName=new String(ElementName);
    return EName.substr(NameLen);
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

function isQuotExist(s)
{
    var len=s.length;
    var ch;
    for(i=0;i<len;i++)
    {
        ch=s.charCodeAt(i);
        if(ch == 34)
        return false;
    }
    return true;
}

function strCheck(s)
{
    re1=/^[a-z0-9A-Z]{1,16}$/
    Check=s.search(re1);
    if(Check==-1)
    {
        alert("Invalid input!");
        return false;
    }
    return true;
}

function tdGetQuery(name)
{
   var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) 
        return unescape(r[2]);
    return null;
}


function isHex(s)   
{   
var patrn=/^[A-F]|[a-f]|[0-9]$/;   
if (!patrn.exec(s)) return false  
return true  
}  



function checkChinese(s){
  if(/^[u4e00-u9fa5]+$/.test(s))
    return true;
  return false;
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

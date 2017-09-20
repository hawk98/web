
if (top.location != document.location) top.location.href = document.location.href;

function WriteTableBegin()
{
   
   if(screen.width >= 1024){
	   t='';
	   t+='<br><table  valign="top" cellPadding=0 cellSpacing=0 align=center width="100%"  bgcolor="EFEFEF">\n';
	   t+='<tr valign="top">\n';
	   t+='<td width="4" bgcolor="EFEFEF">&nbsp;</td>\n';
 
	   t+='<td  bgcolor="EFEFEF">\n';

     }else{
           t='';
	   t+='<table valign="top" cellPadding=0 cellSpacing=0 align=center width="750"  bgcolor="EFEFEF">\n';
	   t+='<tr valign="top" bgcolor="EFEFEF">\n';
	   t+='<td width="100%"   >\n';

     }
	 return t;
}
function WriteTableBegin1()
{
   
   if(screen.width >= 1024){
	   t='';
	   t+='<table  valign="top" cellPadding=0 cellSpacing=0 align=center width="100%"  bgcolor="EFEFEF">\n';
	   t+='<tr valign="top">\n';
	   t+='<td width="4" bgcolor="EFEFEF">&nbsp;</td>\n';
	   t+='<td  bgcolor="EFEFEF">\n';

     }else{
           t='';
	   t+='<table valign="top" cellPadding=0 cellSpacing=0 align=center width="750"  bgcolor="EFEFEF">\n';
	   t+='<tr valign="top" bgcolor="EFEFEF">\n';
	   t+='<td width="100%"   >\n';

     }
	 return t;
}
function WriteTableSytleTop1(){
 	   t='';
	   t+='<table width="100%"  border="0" cellspacing="0" cellpadding="0">\n';
	   t+='<tr>\n';
	   t+='<td></td>\n';
	   t+='</tr>\n';
	   t+='</table>\n';

return t;

}
function WriteTableSytleBottom(){
 	   t='';
	   t+='<table width="100%"  border="0" cellspacing="0" cellpadding="0">\n';
	   t+='<tr>\n';
	   t+='<td></td>\n';
	   t+='<td></td>\n';
	   t+='</tr>\n';
	   t+='</table>\n';

return t;

}
function WriteTableSytleTop(){
 	   t='';
	   t+='<table width="100%"  border="0" cellspacing="0" cellpadding="0">\n';
	   t+='<tr>\n';
	   t+='<td></td>\n';	  
	   t+='<td></td>\n';
	   t+='</tr>\n';
	   t+='</table>\n';

return t;

}
  function WriteTableEnd()
{
   if(screen.width >= 1024){
	   t='';
	   t+='</td>\n';
	   t+='<td width="4" bgcolor="EFEFEF">&nbsp;</td>\n';
	   t+='</tr>\n';
	   t+='</table>\n';
     }else{

	   t='';
	   t+='</td>\n';
	   t+='</tr>\n';
	   t+='</table>\n';
     }

   return t;
}





//var pagelogo=false ;
//var pagecmd=false ;

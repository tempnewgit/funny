function move07() {

    var add01=document.getElementById("img2").offsetLeft;
    add01 += 1;
    document.getElementById("img2").style.left = add01+ "px";

}


function move05() {
    aval=setInterval(move07, 50);
}


function pa() {

    clearInterval(aval);

}
function pa01() {

    aval=setInterval(move07, 50);

}
move05();





function OwnerMemberID() {
    var ownerMemberID =getQueryString(location.href, OwnerMemberID);
    var sData = "memberId="+escape(member_id)+"OwnerMemberID="+escape(ownerMemberID);
    AjaxDo2(rltCheck, "LatestVisitors", "", sData);
}



//<div runat="server" id="uctr_pgeList_HomeProducts">
//    <div runat="server" id="List_Params_HomeProducts">
//    <div runat="server" id="dataList_ReplyRows">1</div>
//    <div runat="server" id="dataList_RepeatColumns">1</div>
//    <div runat="server" id="ListMod_FieldList">VisiterMemberID,BeVisiterMemberID</div>
//<div runat="server" id="ListMod_TableName">RecentlyVisiter</div>
//   以下语句是生产变量并赋值，说是这样写法会比较安全
//    <div id="ListMod_Parameters_HomeProducts2" runat="server">@memberId#|*|memberId|*|</div>
//<div runat="server" id="ListMod_WhereStr">crdate between convert(varchar(10),getdate()-10,120) and convert(varchar(10),getdate(),120) and BeVisiterMemberID=|*|MemberID|*|</div>
//    <div runat="server" id="ListMod_SortStr">crDate DESC</div>
//<div runat="server" id="PageSplit_pageSize">20</div>
//    <div runat="server" id="dataList_CssClass">MarkSJ</div>
//    <div runat="server" id="ListMod_groupBy">&nbsp;</div>
//</div>
//<div runat="server" id="List_Item_HomeProducts">
//    <div id="Row_0" runat="server">
//    <div class="oPart">
//    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="line-height:
//25px;overflow: hidden;border-collapse:separate;padding:15px;">
//<tbody>
//<tr>
//<td width="80%" style="border-bottom:1px dashed #ccc; ">|*|BeVisiterMemberID|*|</td>
//    </tr>
//    </tbody>
//    </table>
//    </div>
//    </div>
//    </div>
//    </div>




//数据库语句
//    var oSQL = "exec dbo.EditBuyedAdvofFlash @picAndURL";




//private string LatestVisitors(HttpContext context)
//{
//    var rlt = "";
//
//    nvParams.Clear();
//    nvParams.Add("@memberId", getQuery("memberId", context, ConstParam.NID));
//    nvParams.Add("@ownerMemberID", getQuery("OwnerMemberID", context, ConstParam.NID));
//    nvParams.Add("@crDate", getDate());
//
//
//    var oExec = new asiapac.db.SQLEdit_V2();
//    var oSQL = "insert into RecentlyVisiter ('VisiterMemberID','BeVisiterMemberID ','crDate')  values ( '@picAndURL','@ownerMemberID','@crDate')";
//    以下语句就是写入数据库，成功返回true，失败返回fail
//    if (oExec.executeSQL(oSQL, nvParams) == 0)
//    {
//        rlt = "success";
//    }
//    else
//    {
//        rlt = "fail";
//    }
//
//    return rlt;
//}








//var  rltCheck1= function(StyleDesc){
//    //alert(StyleDesc.substring(0,5));
//    if(StyleDesc=="success") {
//    alert("success");
//    }else{
//        alert("fail");
//    }
//}





//var  rltCheck1= function(StyleDesc){
//    //alert(StyleDesc.substring(0,5));
//    if(GetAjaxValueFromNV(StyleDesc, "error")=="") {
//        if (StyleDesc == "error"){
//            alert("验证码不正确");
//        }else{
//            alert("留言成功");
//            location.reload();
//        }
//    }else{
//        var err= GetAjaxValueFromNV(StyleDesc, "error");
//        alert(err);
//    }
//}





//<div runat="server" id="uctr_pgeList_HomeProducts">
//    <div runat="server" id="List_Params_HomeProducts">
//    <div runat="server" id="dataList_ReplyRows">1</div>
//    <div runat="server" id="dataList_RepeatColumns">1</div>
//    <div runat="server" id="ListMod_FieldList">VisiterMemberID,BeVisiterMemberID</div>
//<div runat="server" id="ListMod_TableName">RecentlyVisiter</div>
//<div runat="server" id="ListMod_WhereStr">crdate between convert(varchar(10),getdate()-10,120) and convert(varchar(10),getdate(),120) and BeVisiterMemberID=|*|ownermemberid|*|</div>
//<div runat="server" id="ListMod_SortStr">crDate DESC</div>
//<div runat="server" id="PageSplit_pageSize">200</div>
//    <div runat="server" id="dataList_CssClass">MarkSJ</div>
//    <div runat="server" id="ListMod_groupBy">&nbsp;</div>
//</div>
//<div runat="server" id="List_Item_HomeProducts">
//    <div id="Row_0" runat="server">
//    <div class="oPart">
//    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="line-height:
//25px;overflow: hidden;border-collapse:separate;padding:15px;">
//<tbody>
//<tr>
//<td width="80%" style="border-bottom:1px dashed #ccc; ">|*|BeVisiterMemberID|*|</td>
//    </tr>
//    </tbody>
//    </table>
//    </div>
//    </div>
//    </div>
//    </div>




//<div runat="server" id="uctr_pgeList_HomeProducts3">
//    <div runat="server" id="List_Params_HomeProducts3">
//    <div runat="server" id="dataList_ReplyRows_HomeProducts3">1</div>
//    <div runat="server" id="dataList_RepeatColumns_HomeProducts3">1</div>
//    <div runat="server" id="ListMod_FieldList_HomeProducts3">VisiterMemberID,BeVisiterMemberID</div>
//<div runat="server" id="ListMod_TableName_HomeProducts3">RecentlyVisiter</div>
//    <div runat="server" id="ListMod_WhereStr_HomeProducts3">crdate between convert(varchar(10),getdate()-10,120) and convert(varchar(10),getdate(),120) and BeVisiterMemberID='|*|ownermemberid|*|'</div>
//    <div runat="server" id="ListMod_SortStr_HomeProducts3">crDate DESC</div>
//<div runat="server" id="PageSplit_pageSize_HomeProducts3">200</div>
//    <div runat="server" id="dataList_CssClass_HomeProducts3">MarkSJ</div>
//    <div runat="server" id="ListMod_groupBy_HomeProducts3">&nbsp;</div>
//</div>
//<div runat="server" id="List_Item_HomeProducts3">
//    <div id="Row_0_HomeProducts3" runat="server">
//    <div class="oPart">&nbsp;</div>
//<table width="100%" cellspacing="0">
//    <tbody>
//    <tr>
//    <td>|*|MemberID|*|</td>
//    </tr>
//    </tbody>
//    </table>
//</div>
//</div>
//</div>
//</div>










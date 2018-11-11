const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.set('port', process.env.PORT || 5000);
app.get('/ping', function (req, res) {
 return res.send('pong');
});



var sql =require("mssql");
var config = {
      server:'***',
      user:'***',
      password:'***',
      driver: 'tedious',
      database:'DB_DMS',
      database:'DB_BIM',
      port:1433,
      options: {
        encrypt: false // Use this if you're on Windows Azure
    }
};


app.get('/design_documents',function(req,res){
  var connection = new sql.ConnectionPool(config,function(err){
          //In case of an error print the error to the console. You can have your customer error handling
          if (err) console.log("err");

          //Query Database
          var dbQuery = new sql.Request(connection);
          //Purposely we are delaying the results
            var search = req.query.search;
/**
            if (search.includes(" ")) {

          var params = search.split(" ");
          var count = 0;
            for (var i = 0; i < params.length; i++) {

              sqlquery1 = "SELECT * FROM DB_DMS.dbo.DRW_Drawings WHERE DB_DMS.dbo.DRW_Drawings.UDN like '%"+params[0]+"%' OR DB_DMS.dbo.DRW_Drawings.Title like '%"+params[0]+"%'"
              add = "INTERSECT SELECT * FROM DB_DMS.dbo.DRW_Drawings WHERE DB_DMS.dbo.DRW_Drawings.UDN like '%"+params[i]+"%' OR DB_DMS.dbo.DRW_Drawings.Title like '%"+params[i]+"%'"

               if (count = 0 ) {
                 sqlquery = sqlquery1;

               }
               count = count +1;
               if (count>0) {
                sqlquery = sqlquery + add;
              }





            }

      } else {
          sqlquery = "SELECT * FROM DB_DMS.dbo.DRW_Drawings WHERE DB_DMS.dbo.DRW_Drawings.UDN like '%"+search+"%' OR DB_DMS.dbo.DRW_Drawings.Title like '%"+search+"%'";
      }
*/
  //console.log(sqlquery+"       new        ");
          dbQuery.query("SELECT * FROM DB_DMS.dbo.DRW_Drawings",function(err,resultset){
              //In case of an error print the error to the console. You can have your customer error handling
              if (err) console.log(err);


              //Passing the resultset to the callback function
              res.json(resultset);
          })

      });

});

app.get('/design_documents/revisions',function(req,res){
  var connection = new sql.ConnectionPool(config,function(err){
          //In case of an error print the error to the console. You can have your customer error handling
          if (err) console.log(err);

          //Query Database
          var dbQuery = new sql.Request(connection);
          //Purposely we are delaying the results
          dbQuery.query("select DB_DMS.dbo.DRW_Drawings.UDN , DB_DMS.dbo.CON_DrawingsPackages.MLID , DB_DMS.dbo.DRW_DrawingRevisions.Transmittal , DB_DMS.dbo.DRW_DrawingRevisions.RecieveDate, DB_DMS.dbo.DRW_DrawingRevisions.XPATH , DB_DMS.dbo.DRW_DrawingRevisions.Extension,DB_DMS.dbo.DRW_DrawingRevisions.Revision,DB_DMS.dbo.DRW_DrawingRevisions.CompareToPrev,DB_DMS.dbo.DRW_DrawingRevisions.CompareToInti , DB_DMS.dbo.DRW_DrawingRevisions.VBCURL , DB_DMS.dbo.DRW_DrawingRevisions.Latest , DB_DMS.dbo.DRW_Packages.Package from DB_DMS.dbo.DRW_Drawings join DB_DMS.dbo.CON_DrawingsPackages on DB_DMS.dbo.DRW_Drawings.ID = DB_DMS.dbo.CON_DrawingsPackages.MLID join DB_DMS.dbo.DRW_DrawingRevisions on DB_DMS.dbo.CON_DrawingsPackages.ID  = DB_DMS.dbo.DRW_DrawingRevisions.MLPLID join DB_DMS.dbo.DRW_Packages on DB_DMS.dbo.CON_DrawingsPackages.PLID = DB_DMS.dbo.DRW_Packages.ID where DB_DMS.dbo.DRW_DrawingRevisions.Extension like 'PDF'  AND DB_DMS.dbo.DRW_Drawings.UDN like '"+req.query.UID+"'order by RecieveDate DESC",function(err,resultset){
              //In case of an error print the error to the console. You can have your customer error handling
              if (err) console.log(err);

              //Passing the resultset to the callback function
              res.json(resultset);
          })

      });

});

app.get('/design_documents/rfi',function(req,res){
  var connection = new sql.ConnectionPool(config,function(err){
          //In case of an error print the error to the console. You can have your customer error handling
          if (err) console.log(err);

          //Query Database
          var dbQuery = new sql.Request(connection);
          //Purposely we are delaying the results
          dbQuery.query("SELECT DB_DMS.dbo.DRW_Drawings.UDN, DB_DMS.dbo.RFI.ReferenceID, DB_DMS.dbo.RFI.IssueDate, DB_DMS.dbo.RFI.Replied, DB_DMS.dbo.RFI.ReplyDate, DB_DMS.dbo.DRW_Packages.Package FROM DB_DMS.dbo.RFI INNER JOIN DB_DMS.dbo.CON_DrawingsRFIs INNER JOIN DB_DMS.dbo.CON_DrawingsPackages ON DB_DMS.dbo.CON_DrawingsRFIs.MLPLID = DB_DMS.dbo.CON_DrawingsPackages.ID ON DB_DMS.dbo.RFI.ReferenceID = DB_DMS.dbo.CON_DrawingsRFIs.RFIRef INNER JOIN DB_DMS.dbo.DRW_Drawings ON DB_DMS.dbo.CON_DrawingsPackages.MLID = DB_DMS.dbo.DRW_Drawings.ID INNER JOIN DB_DMS.dbo.DRW_Packages ON DB_DMS.dbo.CON_DrawingsPackages.PLID=DB_DMS.dbo.DRW_Packages.ID where DB_DMS.dbo.DRW_Drawings.UDN like '"+req.query.UDNID+"'",function(err,resultset){
              //In case of an error print the error to the console. You can have your customer error handling
              if (err) console.log(err);

              //Passing the resultset to the callback function
              res.json(resultset);
          })

      });

});
app.get('/shopdrawings',function(req,res){
  var connection = new sql.ConnectionPool(config,function(err){
          //In case of an error print the error to the console. You can have your customer error handling
          if (err) console.log(err);

          //Query Database
          var dbQuery = new sql.Request(connection);
          //Purposely we are delaying the results
          dbQuery.query("SELECT distinct TOP 1000 DB_DMS.dbo.ShopDrawingSchedule.DocumentID,DB_DMS.dbo.ShopDrawingSchedule.Title,DB_DMS.dbo.ShopDrawingSchedule.Level,DB_DMS.dbo.ShopDrawingSchedule.Sector , DB_DMS.dbo.ShopDrawingSchedule.Originator FROM DB_DMS.dbo.ShopDrawingSchedule WHERE DB_DMS.dbo.ShopDrawingSchedule.DocumentID LIKE '%"+req.query.search+"%' OR DB_DMS.dbo.ShopDrawingSchedule.Title LIKE '%"+req.query.search+"%' OR DB_DMS.dbo.ShopDrawingSchedule.Originator LIKE '%"+req.query.search+"%' OR DB_DMS.dbo.ShopDrawingSchedule.Level LIKE '%"+req.query.search+"%' OR DB_DMS.dbo.ShopDrawingSchedule.Sector LIKE '%"+req.query.search+"%'",function(err,resultset){
              //In case of an error print the error to the console. You can have your customer error handling
              if (err) console.log(err);

              //Passing the resultset to the callback function
              res.json(resultset);
          })

      });

});
app.get('/shopdrawings/revision',function(req,res){
  var connection = new sql.ConnectionPool(config,function(err){
          //In case of an error print the error to the console. You can have your customer error handling
          if (err) console.log(err);

          //Query Database
          var dbQuery = new sql.Request(connection);
          //Purposely we are delaying the results
          dbQuery.query("SELECT TOP 1000 DB_DMS.dbo.ShopDrawingSchedule.DocumentID,DB_DMS.dbo.ShopDrawingSchedule.Version,DB_DMS.dbo.ShopDrawingSchedule.RevIssuedFor,DB_DMS.dbo.ShopDrawingSchedule.RevIssueDate,DB_DMS.dbo.ShopDrawingSchedule.RelatedRef   ,DB_DMS.dbo.ShopDrawingSchedule.IncomingDate,DB_DMS.dbo.ShopDrawingSchedule.CommentDate,DB_DMS.dbo.ShopDrawingSchedule.CommentCode  ,DB_DMS.dbo.ShopDrawingSchedule.LatestRev   ,DB_DMS.dbo.ShopDrawingSchedule.PlannedDate    ,DB_DMS.dbo.ShopDrawingSchedule.ForeCastDate FROM DB_DMS.dbo.ShopDrawingSchedule WHERE DB_DMS.dbo.ShopDrawingSchedule.DocumentID like'"+req.query.SDID+"'",function(err,resultset){
              //In case of an error print the error to the console. You can have your customer error handling
              if (err) console.log(err);

              //Passing the resultset to the callback function
              res.json(resultset);
          })

      });

});
app.get('/abtmodels',function(req,res){
  var connection = new sql.ConnectionPool(config,function(err){
          //In case of an error print the error to the console. You can have your customer error handling
          if (err) console.log(err);

          //Query Database
          var dbQuery = new sql.Request(connection);
          //Purposely we are delaying the results
          dbQuery.query("SELECT distinct [Discipline],Package,ModelName,modelScope as Scope,[Area Description] , [Floor Description],[Owner],[Planned Submission Date],issuedate,case when [PW_Transmittal] is null then '-' else [PW_Transmittal] end  as [PW Transmittal],[PW Submission Date],case when [Transmittal] is null then '-' else [Transmittal] end as [LiveLink Transmittal],[Revision], [IssueDate] as [LiveLink Submission Date],ReplyDate,case when [Reply Comment] ='?' then 'Under Review' else [Reply Comment] end as [Reply Comment] ,[TranID],[DIMS_Transmittal] as [DIMS Transmittal],[CreationDate],[CreatedBy],[UserName],[ClientStatus],[ModifiedBy],[ModifiedOn],head ,[ID],Abbrivation,[SC_WP],[ClientRecieved],Model_Description,Model_Description_Information,case when SDCommentCode is null then '-' else SDCommentCode end as SDCommentCode,[Sub-Contractor],CAST(YEAR([Planned Submission Date]) AS nvarchar(4)) as Ye , DATENAME(month,[Planned Submission Date]) as Mon FROM [DB_DMS].[dbo].[Vfr_DIMS_ABT_Model_Master] left join (select pwID.[ModelID],IssueDate AS [PW Submission Date],CASE WHEN REV<>'' THEN  'INT-BIM-'+tr.TransNum + '-' + tr.Rev ELSE 'INT-BIM-'+tr.TransNum END as PW_Transmittal from (select * from [DB_BIM].[dbo].[CON_TransmittalsAbtModelsPW]  where id in (SELECT  max(trABTPW.[ID]) as ID FROM [DB_BIM].[dbo].[CON_TransmittalsAbtModelsPW] trABTPW group by trABTPW.[ModelID] )  ) as pwID inner join [DB_BIM].[dbo].[TRS_Transmittals] tr on  pwID.[TransmittalID]= tr.ID) as PwTran on [DB_DMS].[dbo].[Vfr_DIMS_ABT_Model_Master].ID=PwTran.ModelID left join (select ABT_Model_ID,MAX(SDCommentCode) SDCommentCode from (select distinct mSdC.ABT_Model_ID, case when SDCommentCode is null then '3E' else SDCommentCode end as SDCommentCode  from DB_DMS.dbo.Model_SD_Connection mSdC left join (select distinct DocumentID,max(CommentCode) as SDCommentCode from (select distinct DB_DMS.dbo.Vfr_SD_Latest_ABT.DocumentID,case when DB_DMS.dbo.Vfr_SD_Latest_ABT.CommentCode like '1. No Exception Taken' then '1A' when DB_DMS.dbo.Vfr_SD_Latest_ABT.CommentCode ='' and [Version] like 'A%' then '2N' when DB_DMS.dbo.Vfr_SD_Latest_ABT.CommentCode like '2. Exceptions As Noted' then '4R' when DB_DMS.dbo.Vfr_SD_Latest_ABT.CommentCode like '3. Revise and Resubmit' then '4R' when DB_DMS.dbo.Vfr_SD_Latest_ABT.CommentCode like '4. Rejected' then '4R' when DB_DMS.dbo.Vfr_SD_Latest_ABT.CommentCode like '5. Review Not Required' then '4R' when DB_DMS.dbo.Vfr_SD_Latest_ABT.CommentCode like 'NONE' then '2N'  else '3E' end as CommentCode from DB_DMS.dbo.Vfr_SD_Latest_ABT ) as SdAbtMaxCode group by DocumentID) as SdAbtMaxCode2 on mSdC.ShopDrawing = SdAbtMaxCode2.DocumentID   where mSdC.Action=1 ) as sda group by ABT_Model_ID) as ModelSdCode on [DB_DMS].[dbo].[Vfr_DIMS_ABT_Model_Master].ID= ModelSdCode.ABT_Model_ID" ,function(err,resultset){
              //In case of an error print the error to the console. You can have your customer error handling
              if (err) console.log(err);

              //Passing the resultset to the callback function
              res.json(resultset);
          })

      });

});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.send(resultset);
});

app.listen(app.get('port'), function(){
console.log( 'Express server started on http://localhost:' +
app.get('port') + '; press Ctrl-C to terminate.' );
});

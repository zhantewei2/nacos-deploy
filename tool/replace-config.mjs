import mysql from "mysql2/promise";
import {targetConf,originConf,replaceInfo} from "./env.mjs";
import {insertSql} from "./util.mjs";


const targetConn=await mysql.createConnection(targetConf);
const originConn=await mysql.createConnection(originConf);

const targetNamespace="e11a4d40-40fe-4cc0-bdd5-039af7c5218f";
const originNamespace= "e11a4d40-40fe-4cc0-bdd5-039af7c5218f";

const [targetRecords]=await targetConn.query(`select * from config_info where tenant_id='${targetNamespace}'`);

for(let record of targetRecords){
  let content=record.content;
  for(let replaceI of replaceInfo){
    content=content.replaceAll(replaceI[0],replaceI[1]);
  }

  const [r]=await targetConn.execute(`update config_info set content=? where id=?`,[content,record.id]);
  console.log("id:",record.id,"info:",r);
  // break;
}



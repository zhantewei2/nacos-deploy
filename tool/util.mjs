export const insertSql=(table,obj)=>{
  const keys=Object.keys(obj);
  const values=Object.values(obj);
  const str=`insert into ${table}(${keys.join(",")}) values(${keys.map(i=>'?').join(",")})`
  return [str,values];
}
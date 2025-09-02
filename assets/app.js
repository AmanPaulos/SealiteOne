
function tableToCsv(tableId){
  const table = document.getElementById(tableId);
  if(!table) return '';
  const rows = Array.from(table.querySelectorAll('tr')).map(tr => Array.from(tr.children).map(td => '"'+(td.innerText||'').replace(/"/g,'""')+'"').join(','));
  return rows.join('\n');
}
function exportCsv(tableId, filename){
  const csv = tableToCsv(tableId);
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename || 'export.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

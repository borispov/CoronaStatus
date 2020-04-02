 var months = [];
    months[months.length] = "ינואר";
    months[months.length] = "פברואר";
    months[months.length] = "מרץ";
    months[months.length] = "אפריל";
    months[months.length] = "מאי";
    months[months.length] = "יוני";
    months[months.length] = "יולי";
    months[months.length] = "אוגוסט";
    months[months.length] = "ספטמבר";
    months[months.length] = "אוקטובר";
    months[months.length] = "נובמבר";
    months[months.length] = "דצמבר";


export default (d) => {
  const date = new Date(d)
  const m = months[date.getMonth()]
  const day = date.getDate()
  return `${day} ב${m}`
}

// const SS = "Wed, 01 Apr 2020 23:04:51 GMT"

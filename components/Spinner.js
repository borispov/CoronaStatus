const sizing = s => {
  switch(s){
    case 'big':
      return {}; break;
    case 'med':
      return { height: '64px', width: '64px' };break;
    case 'high':
      return { height: '36px', width: '36px' };break;
  }
}

export default ({ size = 'big' }) => (
  <div className="loader-content" style={ sizing(size) }>
    <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
       <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
       <circle cx="170" cy="170" r="135" stroke="#404041"/>
       <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
       <circle cx="170" cy="170" r="85" stroke="#404041"/>
    </svg>

  </div>
)

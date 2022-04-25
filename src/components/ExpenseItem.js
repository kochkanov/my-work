import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props) {
  return (
    <div className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.text}</h2>
        <div className='expense-item__price'>{props.price}</div>
        <button style={{width:'30px'}} onClick ={()=>props.onDelete(props.id)}>Delete

        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;

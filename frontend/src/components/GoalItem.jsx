import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div className='date-text'>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2 className='goal-text'>{goal.text}</h2>
      
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='btn'
                  type='submit'>
                Delete Goal
                </button>
    </div>
  )
}

export default GoalItem
import PropTypes from 'prop-types';


function FeedbackStats({feedback}) {
    // Calculate ratings avarage
    let average = feedback.reduce((prev, curr) => {
        return prev + curr.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}


export default FeedbackStats
import PropTypes from 'prop-types';
 
function Card({ children, reverse }) {
    // Conditional class
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>
//         {children}
//     </div>
//   )

    // Conditional in-line styling
    return <div className="card" style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        coloe: reverse ? '#fff' : 'rgba(0,0,0,0.4)'
    }}>
        {children}
    </div>
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
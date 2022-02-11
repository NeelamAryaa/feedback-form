import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const FeedbackForm = () => {
    const [feedback, setFeedback]=useState(null)
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/feedbackApp/comments`)
          .then(res => {
            const comments = res.data;
            setComments(comments);
            // console.log(comments)
    });
  },[]);
  
  
    const handleChange = (e) => {
    //   console.log(e.target.value, e.target.name)
      setFeedback({...feedback, [e.target.name]: e.target.value})
      console.log(feedback)  
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
    //   console.log(feedback)
  
      axios.post(`http://127.0.0.1:8000/feedbackApp/comments`, feedback)
          .then(() => { alert('Feedback sent successfully !')
    }) 
    .catch((error) => 
// console.log(error)
    alert(error )
    );
  
  }
  
  const handleReset = (e) => {
    setFeedback(null)
  }
  
    return (
      
      <div className='feedback'>
  
      <div className="container">
        
        <form className="form" onSubmit={handleSubmit}>
        <h3>Feedback Form</h3>
  
          <select required name="salutation" onChange={handleChange} >
            <option value="" selected>Salutation</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
          
          <label className="label" >First Name</label>
          <input type="text" name="first_name" id="firstName" maxLength="30" onChange={handleChange} required/>
          
          <label className="label" >Last Name</label>
          <input type="text" name="last_name" id="lastName" maxLength="30" onChange={handleChange} />
  
          <label className="label" >Your Comments:</label>
          <textarea
            maxLength="75"
            rows="3"
            placeholder="write here..."
            name="comment"
            onChange={handleChange} required></textarea>
  
          <div >
            <input type="submit" value="Submit" className="btn" />
            <input type="reset" value="Reset" className="btn" onClick={handleReset}/>
          </div>
        </form>
        
        <div className='card-container'><h3>TOP COMMENTS</h3>
        {comments ? comments.slice(-4).map((comment,idx) => 
            <div className='card' key={idx}>
            <div className='card-header'>{comment.salutation} {comment.first_name} {comment.last_name} says... </div>
            <div className='card-body'>{comment.comment}</div>
          </div>)  : null}
        
      </div> 
      </div>  
      </div> 
    );
  }
  
  export default FeedbackForm;
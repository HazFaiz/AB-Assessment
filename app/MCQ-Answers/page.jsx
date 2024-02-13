const page = () => {

const answers = [{
    question: 'Question 1: Which CSS property positions the content of a table’s caption on the specified side?',
    answer: 'Answer 1: a. Caption Side'
},
{
    question: 'Question 2: What does this CSS code do?',
    answer: 'Answer 2: c. It selects the 2nd, 4th, 6th, 8th, etc. (even) <p> tags starting from 2 '
},
{
    question: 'Question 3: Given the following snippet, choose the correct order of arrangement of all the divs in the view ',
    answer: 'Answer 3: c. Order: #div1, #div3, #div2, and #div4'
},
{
    question: 'Question 4: Which CSS styling produces the buttons as shown? ',
    answer: `Answer 4: b. .tabs {
        background-color: lightgreen;
        color: white;
        border: none;
        padding: 20px;
        text-align: center;
        font-size: 16px;
        float: left;
        }
        .tabs:hover {
        background-color: green;
        }`
},
{
    question: 'Question 5: Which code produces the following? Width and height are 100px ',
    answer: `Answer 5: c. <fieldset style="height: 100px; width: 100px">
    <legend>Coding is Fun</legend>
    </fieldset>`
},
{
    question: 'Question 6: If you want to wrap a block of text around an image, which CSS property would you use? ',
    answer: `Answer 6: d. Float`
},
{
    question: 'Question 7: The following HTML tags are used to display the data in tabular form. Which one is false? ',
    answer: `Answer 7: b. <th> - Defines a cell in a table`
},
{
    question: 'Question 8: Which of the following methods is/are invoked when there is an error during rendering in the React lifecycle? ',
    answer: `Answer 8: c. Both A and B.`
},
{
    question: 'Question 9: Assuming options state values are given in the constructor, which code should wrap the components that are going to have access to the context inside a class component? ',
    answer: `Answer 9: a. <NotesContext.Provider value={this.state.notes}> //code
    </NotesContext.Provider>`
},
{
    question: `Question 10: Which of the following functions gets invoked after the render() function when 'state' or 'props' is updated? `,
    answer: `Answer 10:  a. componentDidUpdate()`
},
{
    question: `Question 11: Which property is used to set the alignment of items inside the flexible container of CSS? `,
    answer: `Answer 11: d. align-items`
},
{
    question: `Question 12: What element type does this render? `,
    answer: `Answer 12: b. Span`
},





]



  return (

    <div className='mcq-container'>
        <h2>Multiple Choice Question - Answers</h2>
 
        {answers.map((set, index) =>(
            <div key={index} className='question-container'>
                <p className="question">{set.question}</p>
                <p className="answer">{set.answer}</p>
            </div>

         ))

        }
    
        
    </div>
  )
}

export default page
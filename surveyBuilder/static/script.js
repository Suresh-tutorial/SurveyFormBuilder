 const form= document.getElementById('form');
const addButton= document.getElementById('addTextButton');
let questionCount = 0;
let inputCount=0;
addButton.addEventListener('click',()=>{
    //create input tag
    // Create a new question container
  const questionContainer = document.createElement('div');
  questionContainer.innerHTML = `Question ${++questionCount}:`;

  // Create a new input element (question text)
  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionInput.placeholder = 'Enter question text';
  questionInput.name=`name${++inputCount}`;
    //create br tag
    const br=document.createElement('br');
    //create Remove button
    const removeButton=document.createElement('button');
    removeButton.textContent='Remove';
    removeButton.onclick= function(){
        
        questionContainer.remove();
    }

    //appending the tags
    questionContainer.appendChild(questionInput);
    questionContainer.appendChild(removeButton);
    questionContainer.appendChild(br);
    form.appendChild(questionContainer);
    
})
// Get the form and button elements

const addChoiceButton = document.getElementById('addChoiceButton');


// Add event listener to the button
addChoiceButton.addEventListener('click', () => {
  // Create a new question container
  const questionContainer = document.createElement('div');
  questionContainer.innerHTML = `Question ${++questionCount}:`;

  // Create a new input element (question text)
  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionInput.placeholder = 'Enter question text';
  questionInput.name=`name${++inputCount}`;


  // Create a container for options
  const optionsContainer = document.createElement('div');
  let countOp=0;

  // Function to add option
  function addOption() {
    const optionInput = document.createElement('input');
    optionInput.type = 'text';
    optionInput.name=`Question_op${questionCount}${++countOp}`;
    optionInput.placeholder = `Enter option text${countOp}`;


   
    const optionElement = document.createElement('input');
    optionElement.type = 'radio';
    
    optionElement.value = `option${questionCount}`;

    optionsContainer.appendChild(optionInput);
    optionsContainer.appendChild(optionElement);
    optionsContainer.appendChild(document.createElement('br'));
  }

  // Add initial option
  addOption();

  // Add button to add more options
  const addOptionButton = document.createElement('button');
  addOptionButton.textContent = 'Add Option';
  addOptionButton.onclick = (e) => {
    e.preventDefault();
    addOption();
  };
  

  // Add elements to the question container
  questionContainer.appendChild(questionInput);
  questionContainer.appendChild(optionsContainer);
  questionContainer.appendChild(addOptionButton);

  // Add question container to the form
  form.appendChild(questionContainer);
});

const addCheckButton = document.getElementById('addcheckBoxButton');


// Add event listener to the button
addCheckButton.addEventListener('click', () => {
    
  // Create a new question container
  const questionContainer = document.createElement('div');
  questionContainer.innerHTML = `Question ${++questionCount}:`;

  // Create a new input element (question text)
  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionInput.placeholder = 'Enter question text';
  questionInput.name=`name${++inputCount}`;


  // Create a container for options
  const optionsContainer = document.createElement('div');
  let countOp=0;

  // Function to add option
  function addOption() {
    const optionInput = document.createElement('input');
    optionInput.type = 'text';
    optionInput.name=`Question_op${questionCount}${++countOp}`;
    optionInput.placeholder = `Enter option text${countOp}`;

   
    const optionElement = document.createElement('input');
    optionElement.type = 'checkbox';
    
    optionElement.value = `option${questionCount}`;

    optionsContainer.appendChild(optionInput);
    optionsContainer.appendChild(optionElement);
    optionsContainer.appendChild(document.createElement('br'));
  }

  // Add initial option
  addOption();

  // Add button to add more options
  const addOptionButton = document.createElement('button');
  addOptionButton.textContent = 'Add Option';
  addOptionButton.onclick = (e) => {
    e.preventDefault();
    addOption();
  };

  // Add elements to the question container
  questionContainer.appendChild(questionInput);
  questionContainer.appendChild(optionsContainer);
  questionContainer.appendChild(addOptionButton);

  // Add question container to the form
  form.appendChild(questionContainer);
});
/*********************************
 Clear before display
**********************************/


const topicContainer = document.querySelector('#topic') as HTMLDivElement;
const topicHeaderContainer = document.querySelector('#topicHeader') as HTMLDivElement;
const postsContainer = document.querySelector('#posts') as HTMLDivElement

export function clearAll():void{
  topicContainer.classList.remove('hide');
  topicContainer.classList.add('flex');
  const startContainer = document.querySelector('.startWrapper') as HTMLDivElement;
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  const subjects = document.querySelector('.subjects') as HTMLDivElement;

  // startContainer.innerHTML = '';
  postsContainer.innerHTML = '';
  subjects.innerHTML = '';
  topicHeaderContainer.innerHTML = '';

  const userContainer = document.querySelector('.userContainer') as HTMLDivElement;
  const userProfileComments = document.querySelector('.userProfileComments') as HTMLDivElement;
  if (!userContainer) return;   
    userContainer.innerHTML = '';
  if (!userProfileComments) return; 
    userProfileComments.innerHTML = '';
}


export function clearMain():void{
  const mainContent = document.querySelector('.mainContent') as HTMLDivElement;
  mainContent.innerHTML = '';
}


export function clearPosts():void{
  postsContainer.innerHTML = '';
}
// export function clearFormContainer():void{
//   const formContainer = document.querySelector('formContainer') as HTMLDivElement;
//   formContainer.innerHTML = '';
// }


// TEST
export function clearForStart():void{ 
  // const startContainer = document.querySelector('.startWrapper') as HTMLDivElement;
  const topicContainer = document.querySelector('#topic') as HTMLDivElement;
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  const subjects = document.querySelector('.subjects') as HTMLDivElement;
  // const createformContainer = document.querySelector('#createThreadForm') as HTMLDivElement;
  // const formContainer = document.querySelector('formContainer') as HTMLDivElement;
  topicContainer.classList.add('hide')
  // formContainer.classList.add('hide')
  postsContainer.classList.add('hide')
 

  // startContainer.innerHTML = '';
  // createformContainer.innerHTML = '';
  // formContainer.innerHTML = '';
  postsContainer.innerHTML = '';
  subjects.innerHTML = '';
  topicHeaderContainer.innerHTML = '';

  const userContainer = document.querySelector('.userContainer') as HTMLDivElement;
  const userProfileComments = document.querySelector('.userProfileComments') as HTMLDivElement;
  if (!userContainer) return;   
    userContainer.innerHTML = '';
  if (!userProfileComments) return; 
    userProfileComments.innerHTML = '';
}





// export function clearThreadForm():void{
//   const createThreadForm = document.querySelector('#createThreadForm') as HTMLDivElement;
//   createThreadForm.innerHTML = '';
// }
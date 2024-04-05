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


// TEST
export function clearForStart():void{ 
  topicContainer.classList.add('hide')
  const startContainer = document.querySelector('.startWrapper') as HTMLDivElement;
  const postsContainer = document.querySelector('#posts') as HTMLDivElement;
  const subjects = document.querySelector('.subjects') as HTMLDivElement;
  const formContainer = document.querySelector('#createThreadForm') as HTMLDivElement;
  formContainer.innerHTML = '';

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





// export function clearThreadForm():void{
//   const createThreadForm = document.querySelector('#createThreadForm') as HTMLDivElement;
//   createThreadForm.innerHTML = '';
// }
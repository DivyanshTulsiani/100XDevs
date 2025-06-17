**REACT**
1. As we scale we start seeing the issue of writing too much code for too small of functions
2. This is not feasible as we saw in the case of journizz that while adding newer journals we had too 
3. do a lot of DOM manipulation just to get a newer HTML CSS component on the

Here comes react to save the day 

*REACT*
1. State
2. Component

**STATE**
Is a basically a javascript object which stores all the dynamic variables
that may change on our website

**COMPONENT** It defines the outer structure of how something would look on our site this is accompanied by the state variables 
any changes made in state object would be *RE-RENDERED* according to how our component logic and design

**RE-RENDER** RE-RENDERING is the part that we earlier did using DOM manipulation but now is handled by REACT inherently making 
the life of developer easy as we on our part only need to define the state and component and how it is handled is being done by 
REACT itsef

1. We created something similar in journizz State and Render function which inherently does what react does for us now 
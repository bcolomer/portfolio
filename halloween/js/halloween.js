

/***********************************************
 * js function for halloween excercise
 * author: Barbara Colomer
 * date: november 2023
 * comment: my first excercise with js functions
 ***********************************************/
 
function show(element){
    document.getElementById(element).style.visibility= "visible"; /*document es el pagina completa, los elementos tienen estilo todos, */
/**cuando hay varias cosas juntas por medio de . es que esta orientado a objetos */
}function sound(element){
  document.getElementById(element).play();
}
function silence(element){
  document.getElementById(element).pause();
}
function hide(element){
  document.getElementById(element).style.visibility = "hidden";
}     


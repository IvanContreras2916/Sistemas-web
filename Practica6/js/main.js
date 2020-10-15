var bLogeo = document.getElementById('sign');
bLogeo.addEventListener('click',function(){
   var p = document.getElementById('password').value
   var e = document.getElementById('email').value
   const parametros = new URLSearchParams();
   parametros.append('PrnEmail',e);
   parametros.append('PrnPassword',p);
   alert(parametros)
   axios.get('http://localhost:4567/')
   .then(function(){
       console.log(response)
       console.log('contenido: '+response.data)
       console.log('estatus: '+status.data)
       document.getElementById('titulo'.innerHTML = response.data)
   })
   .catch(function(error) {
       console.log(error)
       
   })
})

function adicionar()  {
  const musica = document.getElementById("musica")
  console.log("debug")

  musica.innerHTML=`<a target ="_blank" href="${tst}"> test <a/>`
  const load = "https://accounts.spotify.com/pt-BR/status"

  load.onload = function loaded()  {
    window.location.href="google.com"
  }
}


const tst = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    });




//********************requisitos spotify***********************//
//********************access token***********************//

  //**********************************************//

const spotTest = "'https://accounts.spotify.com/"




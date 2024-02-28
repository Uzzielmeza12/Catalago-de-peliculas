const API='https://api.themoviedb.org/3'
export async function get(path){
    const result = await fetch(API + path, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTQ1MGYxZDg3YjM4YTFkNDNlYTYxYmIzMTAzYWMzNiIsInN1YiI6IjY0OGRkNzc2NTU5ZDIyMDBhZDgyMGJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BnDo3xWDONDITBrLN31ieXlOw7hCje0ajkobAxVzUu8",
      "Content-Type": "application/json;charset=utf-8",
    }
  });
  return await result.json();
}


/*otra forma de llamar la api*/ 
/* const API = 'https://api.themoviedb.org/3'
 
export const httpClient =  (path) => {
  const API_URL = `https://api.themoviedb.org/3${path}?api_key=ingresa_la_api`;
 
  const resp =  fetch(API_URL).then(
    (result) => result.json()
    );
 
  return resp;
}*/ 


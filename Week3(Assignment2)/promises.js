
function main(){


          
const text = document.getElementById('search').value;
//storing url query
const api_url = 'https://api.github.com/search/repositories?q='+text;

//Calling main function
main()


//calling various function and passing data accordingly
async function main(){
    //Fetch file through url          
    const res = await fetch (api_url);
    //generating json response
    const data = await res.json();
    getUser(data);
    owner(data.items[0])
    branch(data.items[0])
}

//Extracting data for items
function getUser(data){
        //retrieve the desired data values
        let repo_name = data.items[0].name;
        let fname = data.items[0].full_name;
        let private = data.items[0].private;
        let login = data.items[0].owner.login;
        let licenseName = data.items[0].license.name;
        let score = data.items[0].score;

        //generating html content
        document.getElementById('name').textContent = repo_name;
        document.getElementById('fname').textContent = fname;
        document.getElementById('private').textContent = private;
        document.getElementById('license').textContent = licenseName;
        document.getElementById('score').textContent = score;
}

//Extracting data for owner url 
async function owner(data){

        //retrieve the desired data values
        const res = await fetch (data['owner']['url']);
        let data1 = await res.json();
        let login = data['owner'].login;
        let name = data1.name;
        let followers = data1.followers;
        let following = data1.following;
        
        //generating html content
        document.getElementById('login').textContent = login;
        document.getElementById('oname').textContent = name;
        document.getElementById('followers').textContent = followers;
        document.getElementById('following').textContent = following;       

}


async function branch(data){
    //accessing only the initial value using split    
    const res1 = await fetch (data['branches_url'].split("{")[0]);
    let data2 = await res1.json();
    let nbranch = data2.length;

    //generating html content
    document.getElementById('nbranch').textContent = nbranch;
 }


}

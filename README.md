# Week3Assignment
Assignments statement for week3
1) 
Get battles.json via. AJAX call
From battle json provide following output
Try to use declarative type programming

{
'most_active':{
    'attacker_king',
    'defender_king',
    'region',
    'name'
},
'attacker_outcome':{
    'win', // total win
    'loss' // total loss
},
'battle_type':[], // unique battle types
'defender_size':{
    'average',
    'min',
    'max'
    }
}


2)
Create a textbox and search button in DOM
When i click search it should find repository from git using git search API using ajax.
*Try to solve this problem in promise , async await and callbacks

Visit this api to know more about API : https://developer.github.com/v3/search/
Api documentation :
https://api.github.com/search/repositories?q={{input from text}}
From that api you will get this output is expected 









{
	"name": "node",
      	"full_name": "nodejs/node",
      	"private": false,
	"owner":{
  		"login":"owner.login",
		"name":" API call to result.owner.url ",
            “followersCount”:”API call to result.owner.url”,
            ““followingCount”:”API call to result.owner.url”,”
        },
       “licenseName”:”license.name”,
       "score":”score”
       "numberOfBranch":"API call to result.branches_url and count the    result"
}





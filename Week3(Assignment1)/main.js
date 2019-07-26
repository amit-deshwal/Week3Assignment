//Fetching JSON file using getJSON
function execute(){
    $.getJSON("battles.json", function(data){
        //Storing variables for final json result
        const json1=data;
        var most_active={};
        var attacker_outcome={};
        var defender_size={};
        var mapofattackers={};
        var mapofdefenders={};
        var mapofregions={};
        var attacker_outcomes={};
        var mapofuniquebattles={};
        var defender_sizes=[];
        var totalDefendersSize;
        var arr=[];
        var most_attacker_king;
        var most_defender_king;
        var most_active_region;
        var uniquebattles=[];   
        var attacker_outcomes_win=0;
        var attacker_outcomes_lost=0;
        var sum=0, min=0, max=0;
        
    
    //Finding most frequent item
        var attackmap=json1.forEach(function(attacker)
        {
        var name = attacker.attacker_king
        if(mapofattackers[name]==null)
        {
        mapofattackers[name]=1;
        }
        else
        {
        mapofattackers[name]++;
        }
        });
        most_attacker_king=Object.keys(mapofattackers).reduce((a, b) => mapofattackers[a] > mapofattackers[b] ? a : b);
    
        
    //Most frequent defender
        var defendmap=json1.forEach(function(defender)
        {
        var name = defender.defender_king
        if(mapofdefenders[name]==null)
        {
        mapofdefenders[name]=1;
        }
        else
        {
        mapofdefenders[name]++;
        }
        });
        most_defender_king=Object.keys(mapofdefenders).reduce((a, b) => mapofdefenders[a] > mapofdefenders[b] ? a : b);
    
    // Most frequent region  
        var regionmap=json1.forEach(function(regions)
        {
        var name = regions.region
        if(mapofregions[name]==null)
        {
        mapofregions[name]=1;
        }
        else
        {
        mapofregions[name]++;
        }
        });
        most_active_region=Object.keys(mapofregions).reduce((a, b) => mapofregions[a] > mapofregions[b] ? a : b);
        
        
        
     //Calculating most m=wins and losses   
        var winmap=json1.forEach(function(wins)
        {
        var name = wins.attacker_outcome;
        // console.log(wins.attacker_outcome);
        if(name=="win")
        {
        attacker_outcomes_win++;
        }
        else if(name!="win" && name!="")
        {
        attacker_outcomes_lost++;
        }
        
        });
    
    
    
    //Finding unique battles
        var unique_battles_map=json1.forEach(function(unique)
        {
        var name = unique.battle_type
        if(mapofuniquebattles[name]==null)
        {
        mapofuniquebattles[name]=1;
        }
        else
        {
        mapofuniquebattles[name]++;
        }
        
        });
        
        uniquebattles=Object.keys(mapofuniquebattles).filter(Boolean);
    
    //Finding average, min,    
        var defendersizes=json1.forEach(function(ds)
        {
        var name = ds.defender_size;
        defender_sizes.push(name)
        });
        
        totalDefendersSize=defender_sizes.filter(x=>x!=null)
        for(let i=0; i<totalDefendersSize.length; i++)
        {
        sum+=totalDefendersSize[i];
        }
        sum=sum/totalDefendersSize.length;
        sum=Math.round(sum)
        min=Math.min(...totalDefendersSize);
        max=Math.max(...totalDefendersSize);
        
        most_active=
        {
        'attacker_king': most_attacker_king,
        'defender_king': most_defender_king,
        'region':most_active_region,
        }
        
        attacker_outcome=
        {
        'win': attacker_outcomes_win,
        'lost': attacker_outcomes_lost
        }
        
        defender_size=
        {
        'average':sum,
        'min':min,
        'max':max
        }

        var obj={
        most_active,
        attacker_outcome,
        uniquebattles,
        defender_size
        }
        console.log(JSON.stringify(obj));
        })
    
}


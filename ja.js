const URL = 'http://api.tvmaze.com/shows';

        fetch(URL).then(function(dataList){
            return dataList.json();
        }).then(function(jsonList){
            console.log(jsonList);
            
        })
class DataMod{

    getListData(showListHandler){
        const URL = 'http://api.tvmaze.com/shows';

        fetch(URL).then(function(dataList){
           
            return dataList.json();

        }).then(function(jsonList){
            
            showListHandler(jsonList);
            
        })
    }

    getSingleShow(id, singleShowHandler){

        const URL = 'http://api.tvmaze.com/shows/' + id;

        fetch(URL).then(function(singleShowData){
            
            return singleShowData.json();

        }).then(function(jsonSingleData){

            singleShowHandler(jsonSingleData);

        })
    }

    getSeasonsInfo(id, seasonsInfoHandler){

        const URL = 'http://api.tvmaze.com/shows/' + id + '/seasons';

        fetch(URL).then(function(seasonsInfo){
            
            return seasonsInfo.json();

        }).then(function(jsonSeasonsInfo){

            seasonsInfoHandler(jsonSeasonsInfo);

        })
    }

    getCastInfo(id, castInfoHandler){

        const URL = 'http://api.tvmaze.com/shows/' + id + '/cast';

        fetch(URL).then(function(castInfoData){

            return castInfoData.json();

        }).then(function(jsonCastInfo){

            castInfoHandler(jsonCastInfo);
        })
    }

    getShowSearch(q, showSearchHandler){

        const URL = 'http://api.tvmaze.com/search/shows?q=' + q;

        fetch(URL).then(function(searchResult){

            return searchResult.json();

        }).then(function(jsonSeaarchResult){

            showSearchHandler(jsonSeaarchResult);
        })
    }
}

export default DataMod;
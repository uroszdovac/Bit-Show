class InfoUiMod{

    dataBuilder(singleShow){

        let appendDiv = document.querySelector('#singleShowAppend');

        var assets = {

            name: singleShow.name,
            image: singleShow.image.original,
            summary: singleShow.summary
        }

        appendDiv.innerHTML = `<h1>${assets.name}</h1><div id='imgAndSeasons'><img src='${assets.image}'><div id='seasonsInfoDiv'></div></div><p>${assets.summary}</p>`;
        
    }

    seasonsInfoBuilder(singleShow){

        let appendDiv = document.querySelector('#imgAndSeasons');
        let seasonsInfoDiv = document.querySelector('#seasonsInfoDiv');

        var numOfSeasons = singleShow.length;
        var seasonsInfoH3 = document.createElement('h3');
        seasonsInfoH3.innerHTML = 'Seasons (' + numOfSeasons + ')';
        seasonsInfoDiv.appendChild(seasonsInfoH3);
        var listOfSeasons = document.createElement('ul');

        for(var i = 0; i < singleShow.length; i++){
            var li = document.createElement('li');
            li.innerHTML = singleShow[i].premiereDate + ' - ' + singleShow[i].endDate;
            listOfSeasons.appendChild(li);
        }

        seasonsInfoDiv.appendChild(listOfSeasons);

        appendDiv.appendChild(seasonsInfoDiv);
        
    }

    castInfoBuilder(showCast){

        let appendDiv = document.querySelector('#imgAndSeasons');
        let seasonsInfoDiv = document.querySelector('#seasonsInfoDiv');
        
        var castH3 = document.createElement('h3');
        castH3.innerHTML = 'Cast';

        seasonsInfoDiv.appendChild(castH3);

        var listOfCast = document.createElement('ul');

        for(var i = 0; i < showCast.length; i++){

            var li = document.createElement('li');
            li.innerHTML = showCast[i].person.name;
            listOfCast.appendChild(li);

        }

        seasonsInfoDiv.appendChild(listOfCast);
        appendDiv.appendChild(seasonsInfoDiv);
        

    }
}

export default InfoUiMod;
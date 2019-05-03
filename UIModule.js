class UIMod{

    listBuilder(data){

        var contentList = document.querySelector('#contentList');

        for(var i = 0; i < 50; i++){

            var a = document.createElement('div');
            a.setAttribute('class', 'oneShow');
            a.innerHTML = `<a href='./ShowInfoPage.html?id=${data[i].id}'><img src='${data[i].image.medium}'> <br> <h5> ${data[i].name}</h5></a>`
            contentList.appendChild(a);
            
        }
        
    }

    searchListBuilder(data){

        var searchList = document.querySelector('#searchList');

        for(var i = 0; i < 10; i++){
            
            var li = document.createElement('li');
            // li.textContent = data[i].show.name;
            li.innerHTML = `<a href='./ShowInfoPage.html?id=${data[i].show.id}'>${data[i].show.name}</a>`; 
            searchList.appendChild(li);
        }
    }

    
}

export default UIMod;
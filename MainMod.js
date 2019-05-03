import DataMod from './DataModule.js';
import UIMod from './UIModule.js';

class MainMod {
    init() {
        $(document).ready(function () {
            var data = new DataMod();
            let UI = new UIMod();

            data.getListData(function (list) {

                UI.listBuilder(list);

            })



            $('#searchInput').bind("change paste keyup", function () {
                var searchList = document.querySelector('#searchList');
                searchList.innerHTML = ''
                var q1 = $(this).val();


                data.getShowSearch(q1, function (results) {

                    UI.searchListBuilder(results);
                    console.log(results);
                    
                })
            })

        })



    }
}

var program = new MainMod;
program.init()
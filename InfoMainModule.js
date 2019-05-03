import InfoUIMod from './InfoUIModule.js';
import DataMod from './DataModule.js';

class InfoMainMod{
    init(){

        $(document).ready(function(){

            let infoUI = new InfoUIMod();
            let data = new DataMod();

            let showId = window.location.search.split('=')[1];

            data.getSingleShow(showId, function(details){

                infoUI.dataBuilder(details);

            })

            data.getSeasonsInfo(showId, function(seasonDetails){
                
                infoUI.seasonsInfoBuilder(seasonDetails);
                
            })

            data.getCastInfo(showId, function(castDetails){

                infoUI.castInfoBuilder(castDetails);

            })

        })
    }
}

var program = new InfoMainMod();
program.init(); 
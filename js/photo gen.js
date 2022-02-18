function getPhoto (query, howmanyresponse) {
    import { createClient } from 'pexels';
    //script id 1
    const client = createClient('563492ad6f9170000100000193cc17ed9ff74a12a461e5633ad1da85');
    const query = query;
    client.photos.search({ query, per_page: howmanyresponse }).then(photos => {const responeseJSON = (photos)});
    console.info("debug system:" + responeseJSON + "script id: 1")
}
function ParseJson(Json) {
    const covert = JSON.parse(Json);
    return covert
}
function PutPhotoInside (data){
    const ImgBackgroundTag = document.getElementById("backgroundIMG");
    ImgBackgroundTag.outerHTML("<img src=\""+ data +"\" id=\"backgroundIMG\" class=\"search-tab search-tab-backgroud\">")
}
export function searchTabBackGroundPhoto (){
    getPhoto("highway","1");
    PutPhotoInside(getItemFromObject(ParseJson(responeseJSON), Photo));
}
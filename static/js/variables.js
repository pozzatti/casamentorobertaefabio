/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slideshow_images = [
    "/static/images/fundo.png",
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Mensagem enviada com sucesso! :)";
var contact_form_error_msg = "Erro ao enviar mensagem :(";
var contact_form_recaptcha_error_msg = "Erro ao verificar reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "DIAS";                            //Countdown "Days" label
var c_hours = "HORAS";                          //Countdown "Hours" label
var c_minutes = "MINUTOS";                         //Countdown "Minutes" label
var c_seconds = "SEGUNDOS";                         //Countdown "Seconds" label
var countdown_end_msg = "Começou!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#8eaeba";                      //Google map color
var map_initial_zoom = 15;                      //The initial zoom when Google map loads
var map_initial_latitude = -22.468692;           //Google map initial Latitude. If "null", the latitude of the first marked will be used
var map_initial_longitude = -46.682689;        //Google map initial Longitude. If "null", the longitude of the first marked will be used
var use_default_map_style = false;              //If true, default map style will be used

//List of map markers
var map_markers = [
    {
        "title": "Festa de Casamento",
        "latitude": -22.468692,
        "longitude": -46.682689,
        "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Haras da Mangueiras, Itapira - SP"
    },
];


